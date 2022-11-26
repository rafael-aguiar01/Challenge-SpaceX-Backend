import { MongoHelper } from '../infra/db/mongodb/helpers/mongo-helper'
import { ManagerCron } from '../utils/cron/manager-cron'

import app from './config/app'
import env from './config/env'

const managerCron = new ManagerCron()

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    app.listen(env.port, () => console.log(`Server running at http://localhost:${5050}`))
    managerCron.run()
  })
  .catch(console.error)
