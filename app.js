const port = process.env.PORT || 3000;

const mongoose = require('mongoose');
const fastify = require('fastify')({
  logger: false
})

try {
  mongoose.connect('mongodb://localhost:27017/fastify-demo')
  console.log("Connected to mongodb")
} catch (error) {
  console.log("Failed to connect to mongodb")
}

// fastify.get('/', function (request, reply) {
//   reply.send("Hello!")
// })
// const app = fastify
const userRoute = require('./route/user.jsx');
// app.register(userRoute)

fastify.register(userRoute, {prefix: "/"})


fastify.listen({ port: port }, function (err, address) {
  if (err) {
    fastify.log.error("err")
    process.exit(1)
  }
})
