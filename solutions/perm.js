/**
 * Rosalind Problem - Enumerating Gene Orders
 * by Øyvind Ingvaldsen <oyvind.ingvaldsen@gmail.com>
 *
 * http://rosalind.info/problems/perm/
 *
 * Problem:
 *  Given - A positive integer n <= 7.
 *  Return - The total number of permutations of length n, followed by a list of all such permutations (in any order).
 *
 * Terms:
 *  Genome rearrangements - A large-scale mutation that affects the makeup of the entire intervals of nucleic acid.
 *  Synteny blocks - A region of DNA that is condensed into a single unit for genome comparison.
 *  Permutation - A permutation of length n is an ordering of the first n positive integers.
 */

var timing = require('../util/timing');
var fs = require('fs');

function fac(n) {
  var f = [];
  f[0] = 1;
  f[1] = 1;

  for(var i = 2; i <= n; i++) {
    f[i] = f[i - 1] * i;
  }

  return f[n];
}

function permutations(n) {
  var perms = [];
  var seq = [];

  for(var i = 1; i <= n; i++) {
    seq.push(i);
  }

  perms.push(seq);

  while(true) {
    seq = seq.slice();

    var k = null;
    for(var i = 0; i < n; i++) {
      if(seq[i] < seq[i + 1]) {
        k = i;
      }
    }

    if(k === null) {
      return perms;
    }

    var l = null;
    for(var i = 0; i < n; i++) {
      if(seq[k] < seq[i]) {
        l = i;
      }
    }

    var tmp = seq[k];
    seq[k] = seq[l];
    seq[l] = tmp;

    seq = seq.slice(0, k + 1).concat(seq.slice(k + 1).reverse());

    perms.push(seq);
  }

  return perms;
}

var data = fs.readFileSync('../datasets/rosalind_perm.txt', 'utf-8');
var n = parseInt(data);
var numPermutations = fac(n);
var perms = permutations(n);
console.log(numPermutations);
perms.forEach(function(perm) {
  console.log(perm.join(' '));
});
timing.printInfo();
