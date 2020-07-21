const _ = require('lodash');

const obj = { "kebab": "roll", "burger": "pizza", "lasagna": "pasta" };

const food = _.invert(obj);

module.exports = food;