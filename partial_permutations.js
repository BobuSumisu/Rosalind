/**
 * Rosalind Problem - Partial Permutations
 * by Øyvind Ingvaldsen <oyvind.ingvaldsen@gmail.com>
 *
 * http://rosalind.info/problems/pper/
 *
 * Problem:
 *  Given - Positive integers n and k such that 100 >= n >= 0 and 10 >= k >= 0.
 *  Return - The total number of partial permutations P(n, k), modulo 1,000,000.
 *
 * Terms:
 *  Partial permutation - An ordering of some of the objects from a collection.
 */

var fs = require('fs');
var bignum = require('bignum');

var facTable = [];
function fac(n) {
  if(n === 0) {
    return 1;
  }
  else if(facTable[n]) {
    return facTable[n];
  }
  else {
    return bignum(n).mul(fac(n - 1));
  }
}

function P(n, k) {
  return fac(n).div(fac(n - k));
}

fs.readFile('test.txt', 'utf-8', function(err, data) {
  var n = parseInt(data.split(' ')[0]);
  var k = parseInt(data.split(' ')[1]);

  console.log(P(n, k).mod(1000000).toString());
});
