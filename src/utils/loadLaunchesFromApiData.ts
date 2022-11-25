import axios from 'axios'

export class LoadLaunchesFromApi {
  async getLaunches (link: string): Promise<any>{
    try {
      const launchesApi = await axios.get(link)
      return launchesApi
    } catch {
      return new Error()
    }
  }
}
