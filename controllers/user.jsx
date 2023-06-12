const {User} = require("../models/user.jsx")

const getUsers = async (request, reply) => {
    const user = await User.find({})
    reply.send(user);
}

const getUser = async (request, reply) => {
    const {id} = request.params
    const user = await User.findById(id)
    if(!user) return reply.status(400).send("user with given id doesn't exist!")
    reply.send(user)
}


const postUsers = async (request, reply) => {
    const user = new User({name: request.body.name})
    await user.save()
    reply.send(user)
}

const putUser = async (request, reply) => {
    const {id} = request.params
    const user = await User.findById(id)
    if(!user) return reply.status(400).send("user with given id doesn't exist!")
    user.name = request.body.name
    await user.save()
    reply.send(user)
}

const deleteUser = async (request, reply) => {
    const {id} = request.params
    const user = await User.findByIdAndRemove(id)
    if(!user) return reply.status(400).send("user with given id doesn't exist!")
    reply.send(user)
}

module.exports = {getUsers, getUser, postUsers, putUser, deleteUser}