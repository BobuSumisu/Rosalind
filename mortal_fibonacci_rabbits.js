/**
 * Rosalind Challenge - Mortal Fibonacci Rabbits
 * by Øyvind Ingvaldsen <oyvind.ingvaldsen@gmail.com>
 *
 * http://rosalind.info/problems/fibd/
 *
 * Problem: 
 *  Given - Positive integers n <= 100 and m <= 20
 *  Return - The total number of pairs of rabbits that will remain after the n-th month if all rabbits live for m months.
 */

var fs = require('fs');
var bignum = require('bignum');

function mortalRabbitPairs(months, lifespan) {
  if(months === 0) {
    return 0;
  }

  var pairs = [];
  pairs[0] = bignum('1');
  pairs[1] = bignum('1');

  for(var i = 2; i <= months; i++) {
    if(i < lifespan) {
      pairs[i] = bignum.add(pairs[i - 1], pairs[i - 2]);
    }
    else {
      pairs[i] = pairs.slice(i - lifespan, i - 1).reduce(function(acc, x) { 
        return bignum.add(acc, x); 
      });
    }
  }

  return pairs[months - 1].toString();
}


/** Testing
for(var i = 0; i < 20; i++) {
  console.log(i + ': ' + mortalRabbitPairs(i, 3));
}
*/

fs.readFile('test.txt', 'utf-8', function(err, data) {
  var months = data.split(' ')[0];
  var lifespan = data.split(' ')[1];
  console.log(mortalRabbitPairs(months, lifespan));
});
