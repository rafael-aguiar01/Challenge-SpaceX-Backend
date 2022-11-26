import { FindLaunch } from '../../../domain/usecases/find-launch'
import { ok, serverError } from '../../helpers/http-helper'
import { Controller } from '../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../protocols/http'

export class FindLaunchesController implements Controller {
  private readonly findLaunch: FindLaunch

  constructor (findLaunch: FindLaunch) {
    this.findLaunch = findLaunch
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { search, limit } = httpRequest.query
      const launches = await this.findLaunch.find({ search, limit })
      return ok(launches)
    } catch (error) {
      return serverError(error)
    }
  }
}
