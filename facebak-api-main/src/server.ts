import fastify from "fastify";
import cors from "@fastify/cors";
import { commentRoutes } from "./modules/comment";
import { postRoutes } from "./modules/post";
import { schemas } from "./modules/shared";
import { userRoutes } from "./modules/user";
import { reactionRoutes } from "./modules/reaction";

const DEFAULT_OPTIONS = {};

export const buildServer = (opts: Record<string, unknown> = {}) => {
  const server = fastify({
    ...DEFAULT_OPTIONS,
    ...opts,
  });

  schemas.forEach((schema) => {
    server.addSchema(schema);
  });

  // Configure CORS options here
  server.register(cors, {
    origin: "http://localhost:3000", // Replace with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
  });

  // do not want to use prefix here
  server.register(commentRoutes);
  server.register(postRoutes);
  server.register(userRoutes);
  server.register(reactionRoutes);

  // Route d'inscription
  server.post('/api/signup', async (request, reply) => {
    try {
      const userData = request.body; // Les données d'inscription envoyées depuis le frontend
      // Code pour enregistrer les informations de l'utilisateur dans la base de données
      // Assurez-vous de gérer les erreurs et les validations appropriées ici
      reply.send({ message: 'Inscription réussie' });
    } catch (error) {
      console.error('Erreur lors de l\'inscription :', error);
      reply.status(500).send({ error: 'Erreur lors de l\'inscription' });
    }
  });

  return server;
};
