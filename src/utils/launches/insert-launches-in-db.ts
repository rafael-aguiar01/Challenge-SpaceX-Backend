import { LoadLaunchesFromApi } from './load-launches-from-api-data'
import { LaunchMongoRepository } from '../../infra/db/mongodb/launch-repository/lauch'
import env from '../../main/config/env'

export class InsertLaunchsInDB {
  async run (): Promise<void> {
    const launchesLink = env.launchesLink
    const loadLaunchesFromAPI = new LoadLaunchesFromApi()
    const launchMongoRepository = new LaunchMongoRepository()

    // Checar se os dados estão atulizados
    const launches = await loadLaunchesFromAPI.getLaunches(launchesLink)
    launches.forEach(async (launchItem) => {
      const launchAlreadyExists = await launchMongoRepository.findOne(launchItem.id)
      if (launchAlreadyExists) {
        console.log('LaunchAlreadyExists')
      } else {
        await launchMongoRepository.add(launchItem)
      }
    })
  }
}
