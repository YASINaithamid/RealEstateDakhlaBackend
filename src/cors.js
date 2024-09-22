import FastifyCors from "@fastify/cors";

export const setFastifyCors = function (fastify) {
  fastify.register(FastifyCors, {
    // put your options here
    origin: [
      "https://66f0745a6eb9530008388b5a--illustrious-dasik-79c411.netlify.app/",
      
    ],
  });
};
