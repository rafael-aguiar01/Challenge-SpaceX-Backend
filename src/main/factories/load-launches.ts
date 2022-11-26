import { LoadLaunchesController } from '../../presentation/controllers/launches/load-launches-controller'
import { Controller } from '../../presentation/protocols/controller'

export const makeLoadLaunchesController = (): Controller => {
  return new LoadLaunchesController()
}
