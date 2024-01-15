const _ = require('lodash')
//  one of lodash method  make it as a flat array as follows: 
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
