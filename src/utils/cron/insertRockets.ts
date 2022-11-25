import { InsertRocketsInDB } from '../rockets/insertRocketsInBD'

import cron = require('node-cron')

async function InsertRockets (): Promise<void>{
  const insertRocketsInBD = new InsertRocketsInDB()
  await insertRocketsInBD.run()
}

module.exports = cron.schedule('0 0 9 1/1 * ? *', InsertRockets, {
  scheduled: false
})
