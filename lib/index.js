const Joi = require('joi')
const objIdPattern = /^[0-9a-fA-F]{24}$/

const isValid = function (value) {
    return (Boolean(value) && !Array.isArray(value) && objIdPattern.test(String(value)))
}

module.exports = Joi.extend({
    type: 'objectId',
    messages: {
        invalid: 'It must have a valid ObjectId.',
    },
    validate(value, { error }) {
        if (!isValid(value)) {
            return { value, errors: error('invalid')}
        }
    }
})

