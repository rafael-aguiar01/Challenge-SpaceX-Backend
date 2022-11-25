import { LoadLaunchesFromApi } from './loadLaunchesFromApiData'

const link = 'https://api.spacexdata.com/v5/launches'

describe('Load Launches From Api', () => {
  test('Should return 200 if load data success', async () => {
    const sut = new LoadLaunchesFromApi()
    const launches = await sut.getLaunches(link)
    expect(launches.status).toBe(200)
  })
})
