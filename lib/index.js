const Joi = require('joi');
const ObjectId = require('bson').ObjectId

module.exports = Joi.extend({
    type: 'objectId',
    messages: {
        invalid: 'It must have a valid ObjectId.',
    },
    validate(value, { error }) {
        if (!ObjectId.isValid(value)) {
            return { value, errors: error('invalid')}
        }
    }
})

