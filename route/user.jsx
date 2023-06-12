
const {getUsers, getUser, postUsers, putUser, deleteUser} = require("../controllers/user.jsx")
const {User} = require("../models/user.jsx")

function routes(app, opts, done) {
    app.get('/', getUsers)

    app.get('/:id', getUser)

    app.post('/', postUsers)
    
    app.put('/:id', putUser)

    app.delete(':id', deleteUser)

    done()
}

module.exports = routes