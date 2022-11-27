import { ResultLaunchPageModel } from '../models/resultLaunchPage'

export interface FindConditionsModel {
  search: string
  limit: number
  page: number
}

export interface FindLaunch {
  find (conditions: FindConditionsModel): Promise<ResultLaunchPageModel>
}
