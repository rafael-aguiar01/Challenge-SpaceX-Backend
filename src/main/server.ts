import { MongoHelper } from '../infra/db/mongodb/helpers/mongo-helper'
import app from './config/app'
import env from './config/env'

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    app.listen(env.port, () => console.log(`Server running at http://localhost:${5050}`))
  })
  .catch(console.error)
