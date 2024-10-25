import { FastifyInstance } from "fastify"
import { ClientError } from "./errors/client-errors"
import { ZodError } from "zod";

type fastifyErrorHandler = FastifyInstance['errorHandler']

export const errorHandler: fastifyErrorHandler  = (error, request, reply) => {

    console.log(error instanceof ClientError); // Verificar se é uma instância de ClientError
    console.log(error)

    if(error instanceof ZodError){
        return reply.status(400).send({
            message: "Invalid input",
            error: error.flatten().fieldErrors,
        })
    }

    if(error instanceof ClientError){
        return reply.status(400).send({
            message: error.message,
        })
    }

    return reply.status(500).send({message: 'Internal server error'})

}