const assert = require('assert')
const Joi = require('../')
const ObjectId = require('bson').ObjectId


describe('joi-oid', () => {
    it('exports a object', done => {
        assert.equal('object', typeof Joi)
        done()
    })

    it('requires a valid objectid', done => {
        const testData = [
            '5e43fc64ad9beb36cdeb4f8b',
            new ObjectId()
        ]

        testData.map(async data =>  {
            const result = await Joi.objectId().validate(data)
            assert(!result.error, result.error)
        })
        done()
    })

    it('should not accept to be invalid', done => {
        const testData = [
            ' e43fc64ad9beb36cdeb4f8b',
            '$e43fc64ad9beb36cdeb4f8b',
            { length: 24 }
        ]

        testData.map(async data =>  {
            const result = await Joi.objectId().validate(data)
            assert(!!result.error, result.error)
        })
        done()
    })



})
