import { LaunchModel } from '../../domain/models/launch'
import { AddLaunchModel } from '../../domain/usecases/add-launch'
import { FindConditionsModel } from '../../domain/usecases/find-launch'

export interface AddLaunchRepository {
  add (launchData: AddLaunchModel): Promise<LaunchModel>
  find (conditions: FindConditionsModel): Promise<LaunchModel>
}
