import { LaunchModel } from '../../domain/models/launch'
import { AddLaunchModel } from '../../domain/usecases/add-launch'

export interface AddLaunchRepository {
  add (launchData: AddLaunchModel): Promise<LaunchModel>
}
