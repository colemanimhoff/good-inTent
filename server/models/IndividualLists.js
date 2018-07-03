const { Model } = require('objection')

class IndividualLists extends Model {
    static get tableName() {
        return 'individual_list'
    }
}

// IndividualLists.relationMappings = {
//     user: {
//         relation: Model.HasManyRelation,
//         modelClass: __dirname + '/Users',
//         join: {
//             from: 'users.id',
//             to: 'individual_list.user_id',
//         },
//     },
//     trip: {
//         relation: Model.BelongsToOneRelation,
//         modelClass: __dirname + '/Trip',
//         join: {
//             from: 'trip.id',
//             to: 'individual_list.trip_id',
//         },
//     },
//     item: {
//         relation: Model.HasManyRelation,
//         modelClass: __dirname + '/Items',
//         join: {
//             from: 'individual_list.item_id',
//             to: 'item.id',
//         },
// },
// }

module.exports = IndividualLists