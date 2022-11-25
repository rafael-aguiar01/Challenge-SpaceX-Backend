import { LoadRocketsFromApi } from './loadRocketsFromApiData'
import env from '../../main/config/env'

const rocketsLink = env.rocketsLink

describe('Load Rockets From Api', () => {
  test('Should return 200 if load data success', async () => {
    const sut = new LoadRocketsFromApi()
    const rockets = await sut.getRockets(rocketsLink)
    console.log(rockets)
    expect(rockets.status).toBe(200)
  })
})
