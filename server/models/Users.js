const { Model } = require('objection')

class Users extends Model {
    static get tableName() {
        return 'users'
    }
}

Users.relationMappings = {
    tripsCreated: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/Trip',
        join: {
            from: 'users.id',
            to: 'trip.user_id',
        },
    },
    tripsAttended: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/Trip',
        join: {
            from: 'users.id',
            to: 'trip.id',
            through: {
                from: 'party.user_id',
                to: 'party.trip_id',
            },
        },
    },
}

module.exports = Users