import { AddLaunchRepository } from '../../../../data/protocols/add-launch-repository'
import { LaunchModel } from '../../../../domain/models/launch'
import { AddLaunchModel } from '../../../../domain/usecases/add-launch'
import { MongoHelper } from '../helpers/mongo-helper'

export class LaunchMongoRepository implements AddLaunchRepository {
  async add (launchData: AddLaunchModel): Promise<LaunchModel> {
    const launchCollection = await MongoHelper.getCollection('launches')
    const result = await launchCollection.insertOne(launchData)
    return MongoHelper.map(result.ops[0])
  }

  async findOne (launchtId: string): Promise<any> {
    const launchCollection = await MongoHelper.getCollection('launches')
    const result = await launchCollection.findOne({ id: launchtId })
    return result
  }
}
