import { LaunchModel } from '../../../domain/models/launch'
import { AddLaunch, AddLaunchModel } from '../../../domain/usecases/add-launch'
import { AddLaunchRepository } from '../../protocols/launch-repository'

export class DbAddLaunch implements AddLaunch {
  private readonly addLaunchRepository: AddLaunchRepository

  constructor (addLaunchRepository: AddLaunchRepository) {
    this.addLaunchRepository = addLaunchRepository
  }

  async add (launchData: AddLaunchModel): Promise<LaunchModel>{
    const launch = await this.addLaunchRepository.add(Object.assign({}, launchData))
    return launch
  }
}
