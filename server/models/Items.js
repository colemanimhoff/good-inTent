const { Model } = require('objection')

class Items extends Model {
    static get tableName() {
        return 'item'
    }
}

module.exports = Items