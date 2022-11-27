import { LaunchModel } from '../../domain/models/launch'
import { ResultLaunchPageModel } from '../../domain/models/resultLaunchPage'
import { AddLaunchModel } from '../../domain/usecases/add-launch'
import { FindConditionsModel } from '../../domain/usecases/find-launch'

export interface AddLaunchRepository {
  add (launchData: AddLaunchModel): Promise<LaunchModel>
  findByPage (conditions: FindConditionsModel): Promise<ResultLaunchPageModel>
}
