const port = process.env.PORT || 3000;
const host = "RENDER" in process.env ? `0.0.0.0` : `localhost`;

const mongoose = require("mongoose");
const fastify = require("fastify")({
  logger: true,
});

// try {
//   mongoose.connect("mongodb+srv://xyz:xyz@cluster0.reo0yux.mongodb.net/Fastify?retryWrites=true&w=majority")
//   console.log("Connected to mongodb")
// } catch (error) {
//   console.log("Failed to connect to mongodb")
// }

fastify.get("/", function (request, reply) {
  reply.send("Hello!");
});
// const app = fastify
// const userRoute = require('./route/user.jsx');
// app.register(userRoute)

// fastify.register(userRoute, {prefix: "/"})

fastify.listen({ host: host, port: port }, function (err, address) {
  if (err) {
    fastify.log.error("err");
    process.exit(1);
  }
});
