import axios from 'axios'

export class LoadRocketsFromApi {
  async getRockets (link: string): Promise<any>{
    try {
      const rocketsApi = await axios.get(link)
      return rocketsApi
    } catch {
      return new Error()
    }
  }
}
