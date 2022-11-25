import { AddRocketRepository } from '../../../../data/protocols/add-rocket-repository'
import { RocketModel } from '../../../../domain/models/rocket'
import { AddRocketModel } from '../../../../domain/usecases/add-rocket'

export class RocketMongoRepository implements AddRocketRepository {
  async add (rocketData: AddRocketModel): Promise<RocketModel> {
    throw new Error('Method not implemented.')
  }
}
