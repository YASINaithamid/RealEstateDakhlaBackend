import FastifyCors from "@fastify/cors";

export const setFastifyCors = function (fastify) {
  fastify.register(FastifyCors, {
    // put your options here
    origin: [
      "http://0.0.0.0:9000",
      "http://0.0.0.0:8100",
      "http://0.0.0.0:4200",
    ],
  });
};
