import { LoadRocketsFromApi } from './loadRocketsFromApiData'

const link = 'https://api.spacexdata.com/v4/rockets'

describe('Load Rockets From Api', () => {
  test('Should return 200 if load data success', async () => {
    const sut = new LoadRocketsFromApi()
    const launches = await sut.getRockets(link)
    expect(launches.status).toBe(200)
  })
})
