import { AddLaunchRepository } from '../../../../data/protocols/launch-repository'
import { LaunchModel } from '../../../../domain/models/launch'
import { AddLaunchModel } from '../../../../domain/usecases/add-launch'
import { FindConditionsModel } from '../../../../domain/usecases/find-launch'
import { MongoHelper } from '../helpers/mongo-helper'

export class LaunchMongoRepository implements AddLaunchRepository {
  async add (launchData: AddLaunchModel): Promise<LaunchModel> {
    const launchCollection = await MongoHelper.getCollection('launches')
    const result = await launchCollection.insertOne(launchData)
    return MongoHelper.map(result.ops[0])
  }

  async findOne (launchId: string): Promise<any> {
    const launchCollection = await MongoHelper.getCollection('launches')
    const result = await launchCollection.findOne({ id: launchId })
    return result
  }

  async find (conditions: FindConditionsModel): Promise<LaunchModel> {
    const page = conditions.page || 0
    const launchesPerPage = Number(conditions.limit)
    const search = conditions.search

    const launchCollection = await MongoHelper.getCollection('launches')
    const cursor = await launchCollection.find({
      name: { $regex: `(?i)^${search}` }
    }).limit(launchesPerPage).skip(page * launchesPerPage)
    const allLaunches = await cursor.toArray()
    console.log(allLaunches.length)
    return allLaunches
  }
}
