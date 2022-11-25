import { RocketModel } from '../../../domain/models/rocket'
import { AddRocket, AddRocketModel } from '../../../domain/usecases/add-rocket'
import { AddRocketRepository } from '../../protocols/add-rocket-repository'

export class DbAddRocket implements AddRocket {
  private readonly addRocketRepository: AddRocketRepository

  constructor (addRocketRepository: AddRocketRepository) {
    this.addRocketRepository = addRocketRepository
  }

  async add (rocketData: AddRocketModel): Promise<RocketModel>{
    const rocket = await this.addRocketRepository.add(Object.assign({}, rocketData))
    return rocket
  }
}
