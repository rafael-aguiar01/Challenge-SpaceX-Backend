import { LaunchModel } from '../models/launch'

export interface FindConditionsModel {
  search: string
  limit: number
}

export interface FindLaunch {
  find (conditions: FindConditionsModel): Promise<LaunchModel>
}
