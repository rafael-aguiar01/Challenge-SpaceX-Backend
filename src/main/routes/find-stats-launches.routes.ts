import { Router } from 'express'
import { makeStatsLaunchesController } from '../factories/stats-launches'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.get('/launches/stats', adaptRoute(makeStatsLaunchesController()))
}
