const express = require('express')
const router = express.Router()
const queries = require('../db/partyQueries')

router.get('/', (request, response) => {
    return queries.list()
        .then(parties => response.json(parties))
})

router.get('/:id', isValidId, (request, response) => {
    return queries.read(request.params.id)
        .then(party => {
            if (party) {
                return response.json(party)
            } else {
                return response.status(404)
                    .send({ message: 'Party not found!' })
            }
        })
})

router.post('/', (request, response, next) => {
    validParty(request.body)
        ? queries.create(request.body)
            .then(parties => response.json(parties[0]))
        : next(new Error('Invalid Party!'))
})

router.put('/:id', isValidId, (request, response, next) => {
    validParty(request.body)
        ? queries.update(request.params.id, request.body)
            .then(party => response.json(party[0]))
        : next(new Error('Invalid Party!'))
})


router.delete('/:id', isValidId, (request, response) => {
    return queries.delete(request.params.id)
        .then(() => response.json({ message: 'Party Deleted!' }))
})

function isValidId(request, response, next) {
    !isNaN(request.params.id)
        ? next()
        : next(new Error('Invalid ID'))
}

function validParty(submission) {
    const userId = !isNaN(submission.user_id)
    const tripId = !isNaN(submission.trip_id)
    return userId && tripId
}

module.exports = router