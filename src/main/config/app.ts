import express from 'express'
import { InsertRocketsInDB } from '../../utils/rockets/insertRocketsInBD'

const app = express()

app.get('/', async (req, res) => {
  const intertRocketsInDB = new InsertRocketsInDB()
  await intertRocketsInDB.run()
  res.json({ message: 'Fullstack Challenge 🏅 - Space X API' })
})

export default app
