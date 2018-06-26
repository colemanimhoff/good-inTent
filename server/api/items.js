const express = require('express')
const router = express.Router()
const queries = require('../db/itemQueries')

router.get('/', (request, response) => {
    return queries.list()
        .then(items => response.json(items))
})

router.get('/:id', isValidId, (request, response) => {
    return queries.read(request.params.id)
        .then(item => {
            if (item) {
                return response.json(item)
            } else {
                return response.status(404)
                    .send({ message: 'Item not found!' })
            }
        })
})

router.post('/', (request, response, next) => {
    validItem(request.body)
        ? queries.create(request.body)
            .then(items => response.json(items[0]))
        : next(new Error('Invalid Item!'))
})

router.put('/:id', isValidId, (request, response, next) => {
    validItem(request.body)
        ? queries.update(request.params.id, request.body)
            .then(item => response.json(item[0]))
        : next(new Error('Invalid Item!'))
})


router.delete('/:id', isValidId, (request, response) => {
    return queries.delete(request.params.id)
        .then(() => response.json({ message: 'Item Deleted!' }))
})

function isValidId(request, response, next) {
    !isNaN(request.params.id)
        ? next()
        : next(new Error('Invalid ID'))
}

function validItem(submission) {
    const itemName = typeof submission.name == 'string' && submission.name.trim() != ''
    return itemName
}

module.exports = router