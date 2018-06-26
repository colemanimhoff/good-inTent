const express = require('express')
const router = express.Router()
const queries = require('../db/individualListQueries')

router.get('/', (request, response) => {
    return queries.list()
        .then(lists => response.json(lists))
})

router.get('/:id', isValidId, (request, response) => {
    return queries.read(request.params.id)
        .then(List => {
            if (List) {
                return response.json(List)
            } else {
                return response.status(404)
                    .send({ message: 'List not found!' })
            }
        })
})

router.post('/', (request, response, next) => {
    validList(request.body)
        ? queries.create(request.body)
            .then(lists => response.json(lists[0]))
        : next(new Error('Invalid List!'))
})

router.put('/:id', isValidId, (request, response, next) => {
    validList(request.body)
        ? queries.update(request.params.id, request.body)
            .then(list => response.json(list[0]))
        : next(new Error('Invalid List!'))
})


router.delete('/:id', isValidId, (request, response) => {
    return queries.delete(request.params.id)
        .then(() => response.json({ message: 'List Deleted!' }))
})

function isValidId(request, response, next) {
    !isNaN(request.params.id)
        ? next()
        : next(new Error('Invalid ID'))
}

function validList(submission) {
    const tripId = !isNaN(submission.trip_id)
    const itemId = !isNaN(submission.item_id)
    const accountedFor = typeof submission.accounted_for == 'boolean'
    const userId = !isNaN(submission.user_id) || null
    return tripId && itemId && accountedFor && userId
}

module.exports = router