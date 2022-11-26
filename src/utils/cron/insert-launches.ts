import { InsertLaunchsInDB } from '../launches/insert-launches-in-db'
import cron = require('node-cron')

async function InsertLaunches (): Promise<void>{
  const insertLaunchesInBD = new InsertLaunchsInDB()
  await insertLaunchesInBD.run()
}

module.exports = cron.schedule('0 0 9 1/1 * ? *', InsertLaunches, {
  scheduled: false
})
