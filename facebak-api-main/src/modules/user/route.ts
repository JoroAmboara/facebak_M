import { FastifyPluginCallback } from "fastify";
import { createUserHandler } from "./controller";

export const userRoutes: FastifyPluginCallback = (server, _, done) => {
  // Route pour ajouter un nouvel utilisateur
  server.post(
    "/api/users",
    {
      schema: {
        body: {
          type: "object",
          properties: {
            email: { type: "string", format: "email" },
            password: { type: "string", minLength: 8 },
            username: { type: "string", minLength: 5 },
          },
          required: ["email", "password", "username"],
        },
      },
    },
    createUserHandler
  );

  done();
};
