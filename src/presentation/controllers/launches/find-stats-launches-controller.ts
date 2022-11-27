import { FindLaunch } from '../../../domain/usecases/find-launch'
import { ok, serverError } from '../../helpers/http-helper'
import { Controller } from '../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../protocols/http'

export class FindStatsLaunchesController implements Controller {
  private readonly findLaunch: FindLaunch

  constructor (findLaunch: FindLaunch) {
    this.findLaunch = findLaunch
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const launches = await this.findLaunch.findAll()
      return ok(launches)
    } catch (error) {
      return serverError(error)
    }
  }
}
