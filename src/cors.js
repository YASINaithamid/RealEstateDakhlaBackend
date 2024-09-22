import FastifyCors from "@fastify/cors";

export const setFastifyCors = function (fastify) {
  fastify.register(FastifyCors, {
    // put your options here
    origin: [
      "https://illustrious-dasik-79c411.netlify.app/",
      
    ],
  });
};
