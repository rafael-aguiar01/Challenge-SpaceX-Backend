import { LaunchModel } from '../../../domain/models/launch'
import { FindConditionsModel, FindLaunch } from '../../../domain/usecases/find-launch'

export class DbFindLaunch implements FindLaunch {
  async find (conditions: FindConditionsModel): Promise<LaunchModel> {
    const launchesResult = await this.find(conditions)

    return launchesResult
  }
}
