import { AddRocketRepository } from '../../../../data/protocols/add-rocket-repository'
import { RocketModel } from '../../../../domain/models/rocket'
import { AddRocketModel } from '../../../../domain/usecases/add-rocket'
import { MongoHelper } from '../helpers/mongo-helper'

export class RocketMongoRepository implements AddRocketRepository {
  async add (rocketData: AddRocketModel): Promise<RocketModel> {
    const rocketCollection = await MongoHelper.getCollection('rockets')
    const result = await rocketCollection.insertOne(rocketData)
    return MongoHelper.map(result.ops[0])
  }

  async findOne (rocketData: AddRocketModel): Promise<any> {
    const rocketCollection = await MongoHelper.getCollection('rockets')
    const result = await rocketCollection.findOne(
      {
        $or: [
          { id: rocketData.id }
        ]
      }
    )
    return result
  }
}
