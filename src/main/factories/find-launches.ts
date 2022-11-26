import { FindLaunchesController } from '../../presentation/controllers/launches/find-launches-controller'
import { Controller } from '../../presentation/protocols/controller'

export const makeFindLaunchesController = (): Controller => {
  return new FindLaunchesController()
}
