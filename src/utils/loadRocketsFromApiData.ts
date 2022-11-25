import axios from 'axios'

export class LoadRocketsFromApi {
  async getRockets (rocketsLink: string): Promise<any>{
    try {
      const rocketsApi = await axios.get(rocketsLink)
      return rocketsApi
    } catch {
      return new Error()
    }
  }
}
