import fetch from 'cross-fetch'

export class LoadRocketsFromApi {
  async getRockets (rocketsLink: string): Promise<any>{
    try {
      const fetchResponse = await fetch(rocketsLink)
      if (fetchResponse.status >= 400) {
        throw new Error('Bad response from server')
      }
      const rocketsFromApi = await fetchResponse.json()
      return rocketsFromApi
    } catch {
      return new Error()
    }
  }
}
