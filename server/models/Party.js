const { Model } = require('objection')

class Party extends Model {
    static get tableName() {
        return 'party'
    }
}

Party.relationMappings = {
    trip: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/Trip',
        join: {
            from: 'party.trip_id',
            to: 'trip.id',
        },
    },
    user: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/Users',
        join: {
            from: 'users.id',
            to: 'party.user_id',
        },
    },
}

module.exports = Party