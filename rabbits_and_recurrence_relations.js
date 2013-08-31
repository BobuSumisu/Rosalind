/**
 * Rosalind Challenge - Rabbits and Recurrence Relations
 * by Øyvind Ingvaldsen <oyvind.ingvaldsen@gmail.com>
 *
 * Problem:
 *  Given - Positive integers n <= 40 and k <= 5.
 *  Return - The total number of rabbit pairs that will be present after n months if we begin with 1 pair and in each generation, every pair of reproduction-age rabbits produce a litter of k rabbit pairs (instead of only 1 pair).
 *
 * Terms:
 *  Sequence - An ordered collection of possibly repeating objects, typically numbers.
 *  Recurrence relation - An equation defining the terms of a sequence with respect to previous terms.
 *  Fibonacci sequence - A sequence of numbers formed by adding the two previous members of the sequence.
 *  Dynamic programming - The algorithmic notion of building up a solution to a problem by solving it on progressively larger cases.
 *
 */

var fs = require('fs');

function rabbitPairs(months, pairsProduced) {
  if(months === 0) {
    return 0;
  }

  var pairs = [1, 1];
  for(var i = 2; i < months; i++) {
    pairs[i] = pairs[i - 1] + pairs[i - 2] * pairsProduced;
  }

  return pairs[months - 1];
}

fs.readFile('test.txt', 'utf-8', function(err, data) {
  var months = data.split(' ')[0];
  var pairsProduced = data.split(' ')[1];
  console.log(rabbitPairs(months, pairsProduced));
});

