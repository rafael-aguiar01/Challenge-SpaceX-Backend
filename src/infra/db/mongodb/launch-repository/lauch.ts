import { AddLaunchRepository } from '../../../../data/protocols/launch-repository'
import { LaunchModel } from '../../../../domain/models/launch'
import { ResultLaunchPageModel } from '../../../../domain/models/resultLaunchPage'
import { AddLaunchModel } from '../../../../domain/usecases/add-launch'
import { FindConditionsModel } from '../../../../domain/usecases/find-launch'
import { MongoHelper } from '../helpers/mongo-helper'

export class LaunchMongoRepository implements AddLaunchRepository {
  async add (launchData: AddLaunchModel): Promise<LaunchModel> {
    const launchCollection = await MongoHelper.getCollection('launches')
    const rocketCollection = await MongoHelper.getCollection('rockets')
    const rocket = await rocketCollection.findOne({ id: launchData.rocket })
    let newName = rocket.name
    if (launchData.cores[0].reused) {
      newName = String(rocket.name) + ' Reused'
    }
    launchData.rocket = newName
    const result = await launchCollection.insertOne(launchData)
    return MongoHelper.map(result.ops[0])
  }

  async findOne (launchId: string): Promise<any> {
    const launchCollection = await MongoHelper.getCollection('launches')
    const result = await launchCollection.findOne({ id: launchId })
    return result
  }

  async findByPage (conditions: FindConditionsModel): Promise<ResultLaunchPageModel> {
    const page = Number(conditions.page) || 0
    const launchesPerPage = Number(conditions.limit)
    const search = conditions.search
    let hasNext = false
    let hasPrev = false

    const launchCollection = await MongoHelper.getCollection('launches')
    let cursor = await launchCollection.find({
      name: { $regex: `(?i)^${search}` }
    }).toArray()

    const totalDocs = (cursor.length)

    cursor = await launchCollection.find({
      name: { $regex: `(?i)^${search}` }
    }).limit(launchesPerPage)
      .skip(page * launchesPerPage)

    const results = await cursor.toArray()
    const totalPages = Math.round(totalDocs / launchesPerPage)
    if (page < totalPages){
      hasNext = true
    }
    if (page !== 0){
      hasPrev = true
    }

    return {
      results,
      totalDocs,
      page,
      totalPages,
      hasNext,
      hasPrev
    }
  }

  async findAll (): Promise<any> {
    const launchCollection = await MongoHelper.getCollection('launches')
    let successCount = 0
    let failureCount = 0

    await launchCollection.find({}).forEach((launch) => {
      if (launch.success) {
        successCount++
      } else {
        failureCount++
      }
    })
    const result = await launchCollection.aggregate([
      {
        $group: {
          _id: '$rocket',
          count: {
            $sum: 1
          }
        }
      }
    ]).toArray()
    result.forEach(async (rocket) => {
      const resultByDate = await launchCollection.aggregate([
        { $match: { rocket: rocket._id } },
        {
          $group: {
            _id: {
              ano: {
                $year: {
                  $dateFromString: {
                    dateString: '$date_utc'
                  }
                }
              }
            },
            total: { $sum: 1 }
          }
        }
      ]).toArray()
      console.log(resultByDate)
    })
    return {
      successCount,
      failureCount,
      result
    }
  }
}
