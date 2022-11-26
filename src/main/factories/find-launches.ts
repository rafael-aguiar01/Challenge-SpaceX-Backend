import { LaunchMongoRepository } from '../../infra/db/mongodb/launch-repository/lauch'
import { FindLaunchesController } from '../../presentation/controllers/launches/find-launches-controller'
import { Controller } from '../../presentation/protocols/controller'

export const makeFindLaunchesController = (): Controller => {
  const launchMongoRepository = new LaunchMongoRepository()
  return new FindLaunchesController(launchMongoRepository)
}
