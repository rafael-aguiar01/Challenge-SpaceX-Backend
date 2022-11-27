import { ResultLaunchPageModel } from '../../../domain/models/resultLaunchPage'
import { FindConditionsModel, FindLaunch } from '../../../domain/usecases/find-launch'

export class DbFindLaunch implements FindLaunch {
  async findByPage (conditions: FindConditionsModel): Promise<ResultLaunchPageModel> {
    const launchesResult = await this.findByPage(conditions)

    return launchesResult
  }

  async findAll (): Promise<any> {
    const launchesResult = await this.findAll()

    return launchesResult
  }
}
