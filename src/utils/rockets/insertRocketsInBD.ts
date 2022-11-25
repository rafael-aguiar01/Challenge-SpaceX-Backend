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
      const rocketAlreadyExists = await rocketMongoRepository.findOne('12345453243')
      if (rocketAlreadyExists) {
        console.log('Foguete já existe')
      } else {
        await rocketMongoRepository.add(rocketItem)
      }
    })
  }
}
