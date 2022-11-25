import express from 'express'
const app = express()

app.get('/', async (req, res) => {
  res.json({ message: 'Fullstack Challenge 🏅 - Space X API' })
})

export default app
