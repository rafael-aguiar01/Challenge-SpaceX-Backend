import { Router } from 'express'
import { makeLoadLaunchesController } from '../factories/load-launches'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.get('/launches', adaptRoute(makeLoadLaunchesController()))
}
