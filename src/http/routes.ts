import { FastifyInstance } from 'fastify'
import { authenticate } from './controllers/authenticateController'
import { createUser } from './controllers/createUserController'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', createUser)
  app.post('/sessions', authenticate)
}
