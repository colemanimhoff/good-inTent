const express = require('express')
const router = express.Router()
const queries = require('../db/tripQueries')

router.get('/', (request, response) => {
    return queries.list()
        .then(trips => response.json(trips))
})

router.get('/:id', isValidId, (request, response) => {
    return queries.read(request.params.id)
        .then(trip => {
            if (trip) {
                return response.json(trip)
            } else {
                return response.status(404)
                    .send({ message: 'Trip not found!' })
            }
        })
})

router.post('/', (request, response, next) => {
    validTrip(request.body)
        ? queries.create(request.body)
            .then(trips => response.json(trips[0]))
        : next(new Error('Invalid Trip!'))
})

router.put('/:id', isValidId, (request, response, next) => {
    validTrip(request.body)
        ? queries.update(request.params.id, request.body)
            .then(trips => response.json(trips[0]))
        : next(new Error('Invalid Trips!'))
})


router.delete('/:id', isValidId, (request, response) => {
    return queries.delete(request.params.id)
        .then(() => response.json({ message: 'Trip Deleted!' }))
})

function isValidId(request, response, next) {
    !isNaN(request.params.id)
        ? next()
        : next(new Error('Invalid ID'))
}

function validTrip(submission) {
    const name = typeof submission.name == 'string' && submission.name.trim() != ''
    const startDate = typeof submission.start_date == 'string' && submission.start_date.trim() != ''
    const endDate = typeof submission.end_date == 'string' && submission.end_date.trim() != ''
    const userId = !isNaN(submission.user_id)
    return userId && name && startDate && endDate
}

module.exports = router