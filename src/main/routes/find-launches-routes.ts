import { Router } from 'express'
import { makeFindLaunchesController } from '../factories/find-launches'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.get('/launches', adaptRoute(makeFindLaunchesController()))
}
