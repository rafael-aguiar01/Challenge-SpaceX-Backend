import { Controller } from '../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../protocols/http'

export class LoadLaunchesController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const { search, limit } = httpRequest.query
    console.log(search, limit)
    return null
  }
}
