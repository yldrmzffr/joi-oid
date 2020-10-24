
# joi-oid

Joi validator with Mongo ObjectId. 

### Installation

```
npm i -s joi-oid
```
or
```
npm install joi-oid --save
```

## use

`joi-oid` verifies whether the value is suitable for the Mongo ObjectId type.


It is used like `Joi` instead of `Joi`. 🤔

```js
const Joi = require('joi-oid')

const schema = Joi.object({
  id: Joi.objectId(),
  name: Joi.string(),
  age: Joi.number().min(18),
})
```

## License

[MIT](https://github.com/yldrmzffr/joi-oid/blob/master/LICENSE) 🥰🤑
