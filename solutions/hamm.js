/**
 * Rosalind Problem - Counting Point Mutations
 * by Øyvind Ingvaldsen <oyvind.ingvaldsen@gmail.com>
 *
 * http://rosalind.info/problems/hamm/
 *
 * Problem:
 *  Given - Two DNA strings s and t of equal length (not exceeding 1kbp).
 *  Return - The Hamming distance dH(s,t).
 *
 * Terms:
 *  Mutation - A mistake that occurs during the creation or copying of a nucleic acid.
 *  Point mutation - A mutation that only effects a single nucleotide of nucleic acid.
 *  Homologous - Descending from the same ancestor.
 *  Parsimony - The biological principle that nature tends to take the shortest path in evolution.
 *  Hamming distance - The minimum number of symbol substitutions required to change one string into another of equal length.
 */

var timing = require('../util/timing');
var fs = require('fs');

var data = fs.readFileSync('../datasets/rosalind_hamm.txt', 'utf-8');
var s = data.split('\n')[0];
var t = data.split('\n')[1];

var hammingDistance = 0;

for(var i = 0; i < s.length; i++) {
  if(s[i] !== t[i]) {
    hammingDistance += 1;
  }
}

console.log(hammingDistance);
timing.printInfo();
