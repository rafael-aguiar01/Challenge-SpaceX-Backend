import { LaunchMongoRepository } from '../../infra/db/mongodb/launch-repository/lauch'
import { FindStatsLaunchesController } from '../../presentation/controllers/launches/find-stats-launches-controller'
import { Controller } from '../../presentation/protocols/controller'

export const makeStatsLaunchesController = (): Controller => {
  const launchMongoRepository = new LaunchMongoRepository()
  return new FindStatsLaunchesController(launchMongoRepository)
}
