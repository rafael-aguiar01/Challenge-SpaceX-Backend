import { LoadLaunchesFromApi } from './loadLaunchesFromApiData'
import env from '../../main/config/env'

const launchesLink = env.launchesLink

describe('Load Launches From Api', () => {
  test('Should return 200 if load data success', async () => {
    const sut = new LoadLaunchesFromApi()
    const launches = await sut.getLaunches(launchesLink)
    expect(launches).toBeTruthy()
  })
})
