const Joi = require('joi');
const ObjectId = require('bson').ObjectId

module.exports = Joi.extend({
    type: 'objectId',
    messages: {
        invalid: 'needs to be a valid ObjectId',
    },
    validate(value, state, options) {
        if (!ObjectId.isValid(value)) {
            return this.createError('objectId.invalid', { value }, state, options)
        }

        if (options.convert) {
            return new ObjectId(value)
        }

        return value
    }
})

