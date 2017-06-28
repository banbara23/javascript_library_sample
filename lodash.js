// lodash
// https://lodash.com/

var _ = require('lodash');

// chunk
console.log(_.chunk(['a', 'b', 'c', 'd', 'e'], 2))
// => [ [ 'a', 'b' ], [ 'c', 'd' ], [ 'e' ] ]

// isEmpty
var x = [1,2,3]
console.log(_.isEmpty(x))

// _.isEmpty(3)
// => 数字はすべてtrueになる

// _.isEmpty('a')
// => false

// _.isEmpty([1,2,3])
// => false

console.log(_.pad('abc',5,'0'))
// => 0abc0

console.log(_.padStart('abc',5,'0'))
// => 00abc

console.log(_.padEnd('abc',5,'0'))
// => abc00