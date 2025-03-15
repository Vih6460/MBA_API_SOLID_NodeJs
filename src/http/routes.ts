import { FastifyInstance } from 'fastify'
import { authenticate } from './controllers/authenticateController'
import { createUser } from './controllers/createUserController'
import { profile } from '@/http/controllers/profile'
import { verifyJwt } from '@/http/middlewares/verify-jwt'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', createUser)
  app.post('/sessions', authenticate)

  /** Authenticated */
  app.get('/me', { onRequest: [verifyJwt] }, profile)
}
