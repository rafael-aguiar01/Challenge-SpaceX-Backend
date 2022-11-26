import { InsertRocketsInDB } from '../rockets/insertRocketsInBD'

import cron = require('node-cron')

async function InsertRockets (): Promise<void>{
  const insertRocketsInBD = new InsertRocketsInDB()
  await insertRocketsInBD.run()
}

module.exports = cron.schedule('00 00 09 * * *', InsertRockets, {
  scheduled: false
})
