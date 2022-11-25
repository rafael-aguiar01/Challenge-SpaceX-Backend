import fetch from 'cross-fetch'

export class LoadLaunchesFromApi {
  async getLaunches (lauchesLink: string): Promise<any>{
    try {
      const fetchResponse = await fetch(lauchesLink)
      if (fetchResponse.status >= 400) {
        throw new Error('Bad response from server')
      }
      const launchesFromApi = await fetchResponse.json()
      return launchesFromApi
    } catch {
      return new Error()
    }
  }
}
