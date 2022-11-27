import { ResultLaunchPageModel } from '../models/resultLaunchPage'

export interface FindConditionsModel {
  search: string
  limit: number
  page: number
}

export interface FindLaunch {
  findByPage (conditions: FindConditionsModel): Promise<ResultLaunchPageModel>
}
