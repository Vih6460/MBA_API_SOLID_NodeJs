import { FastifyInstance } from 'fastify'

import { verifyJwt } from '@/http/middlewares/verify-jwt'

import { authenticate } from './authenticateController'
import { createUser } from './createUserController'
import { profile } from '@/http/controllers/users/profileController'
import { refreshToken } from './refreshTokenController'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', createUser)
  app.post('/sessions', authenticate)

  app.patch('/token/refresh', refreshToken)

  /** Authenticated */
  app.get('/me', { onRequest: [verifyJwt] }, profile)
}
