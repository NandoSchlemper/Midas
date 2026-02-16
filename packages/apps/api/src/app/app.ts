import { FastifyInstance } from 'fastify';
import fastifyHomeRoute from './routes/root';

export async function app(fastify: FastifyInstance) {
  // plugins:
  await fastify.register(require('@fastify/cors'), {
    cors: {
      origin: "*"
    }
  })

  // routes:
  await fastify.register(fastifyHomeRoute)
}
