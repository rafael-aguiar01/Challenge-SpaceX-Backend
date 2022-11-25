import { RocketModel } from '../../domain/models/rocket'
import { AddRocketModel } from '../../domain/usecases/add-rocket'

export interface AddRocketRepository {
  add (rocketData: AddRocketModel): Promise<RocketModel>
}
