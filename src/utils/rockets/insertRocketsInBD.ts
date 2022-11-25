import { LoadRocketsFromApi } from './loadRocketsFromApiData'
import { RocketMongoRepository } from '../../infra/db/mongodb/rocket-repository/rocket'
import env from '../../main/config/env'

export class InsertRocketsInDB {
  async run (): Promise<void> {
    const rocketsLink = env.rocketsLink
    const loadRocketsFromAPI = new LoadRocketsFromApi()
    const rocketMongoRepository = new RocketMongoRepository()

    // Checar se os dados estão atulizados
    const rockets = await loadRocketsFromAPI.getRockets(rocketsLink)
    rockets.forEach(async (rocketItem) => {
      const rocketAlreadyExists = await rocketMongoRepository.findOne(rocketItem.id)
      if (rocketAlreadyExists) {
        console.log('RocketAlreadyExists')
      } else {
        await rocketMongoRepository.add(rocketItem)
      }
    })
  }
}
