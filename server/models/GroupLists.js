const { Model } = require('objection')

class GroupLists extends Model {
    static get tableName() {
        return 'group_list'
    }
}

// GroupLists.relationMappings = {
//     item: {
//         relation: Model.HasManyRelation,
//         modelClass: __dirname + '/Items',
//         join: {
//             from: 'item.id',
//             to: 'group_list.item_id',
//         },
//     },
//     trip: {
//         relation: Model.BelongsToOneRelation,
//         modelClass: __dirname + '/Trip',
//         join: {
//             from: 'trip.id',
//             to: 'group_list.trip_id',
//         },
//     },
// }


module.exports = GroupLists