import { FastifyInstance } from 'fastify';

export default async function fastifyHomeRoute(fastify: FastifyInstance) {
  fastify.get('/', async function () {
    return { message: 'Hello API' };
  });
}