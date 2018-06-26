const express = require('express')
const router = express.Router()
const queries = require('../db/userQueries')

router.get('/', (request, response) => {
    return queries.list()
        .then(users => response.json(users))
})

router.get('/:id', isValidId, (request, response) => {
    return queries.read(request.params.id)
        .then(user => {
            if (user) {
                return response.json(user)
            } else {
                return response.status(404)
                    .send({ message: 'User not found!' })
            }
        })
})

router.post('/', (request, response, next) => {
    validUser(request.body)
        ? queries.create(request.body)
            .then(users => response.json(users[0]))
        : next(new Error('Invalid User!'))
})

router.put('/:id', isValidId, (request, response, next) => {
    validUser(request.body)
        ? queries.update(request.params.id, request.body)
            .then(user => response.json(user[0]))
        : next(new Error('Invalid User!'))
})


router.delete('/:id', isValidId, (request, response) => {
    return queries.delete(request.params.id)
        .then(() => response.json({ message: 'User Deleted!' }))
})

function isValidId(request, response, next) {
    !isNaN(request.params.id)
        ? next()
        : next(new Error('Invalid ID'))
}

function validUser(submission) {
    const userName = typeof submission.username == 'string' && submission.username.trim() != ''
    const userEmail = typeof submission.email == 'string' && submission.email.trim() != ''
    return userName && userEmail
}

module.exports = router