import { Router } from 'express'

export default (router: Router): void => {
  router.get('/', (req, res) => {
    res.json({ message: 'Fullstack Challenge 🏅 - Space X API' })
  })
}
