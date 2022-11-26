import { InsertLaunchsInDB } from '../launches/insert-launches-in-db'
import cron = require('node-cron')

async function InsertLaunches (): Promise<void>{
  const insertLaunchesInBD = new InsertLaunchsInDB()
  await insertLaunchesInBD.run()
}

module.exports = cron.schedule('00 00 09 * * *', InsertLaunches, {
  scheduled: false
})
