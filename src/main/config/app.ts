import express from 'express'
import setupMiddlewares from './middlewares'
import setupRoutes from './routes'

import swaggerUi from 'swagger-ui-express'
import swaggerFile from '../../swagger.json'

const app = express()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
setupMiddlewares(app)
setupRoutes(app)

export default app
