const { Model } = require('objection')

class Trip extends Model {
    static get tableName() {
        return 'trip'
    }
}

Trip.relationMappings = {
    creator: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/Users',
        join: {
            from: 'trip.user_id',
            to: 'users.id',
        },
    },
    partyMembers: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/Users',
        join: {
            from: 'trip.id',
            to: 'users.id',
            through: {
                from: 'party.trip_id',
                to: 'party.user_id',
            },
        },
    },
    groupList: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/Items',
        join: {
            from: 'trip.id',
            to: 'item.id',
            through: {
                from: 'group_list.trip_id',
                extra: ['id', 'accounted_for', 'user_id', 'claimed_by', 'item_id', 'pending'],
                to: 'group_list.item_id',
            },
        },
    },
    individualList: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/Items',
        join: {
            from: 'trip.id',
            to: 'item.id',
            through: {
                from: 'individual_list.trip_id',
                extra: ['id', 'accounted_for', 'user_id', 'claimed_by', 'id', 'item_id', 'pending'],
                to: 'individual_list.item_id',
            },
        },
    },
}

module.exports = Trip