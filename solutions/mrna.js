/**
 * Rosalind Problem - Inferring mRNA from Protein
 * by Øyvind Ingvaldsen <oyvind.ingvaldsen@gmail.com>
 *
 * http://rosalind.info/problems/mrna/
 *
 * Problem:
 *  Given - A protein string of length at most 1000 aa.
 *  Return - The total number of RNA strings from which the protein could have been translated, modulo 1.000.000. (Don't neglect the importance of the stop codon in protein translation.)
 *
 * Terms:
 */

var timing = require('../util/timing');
var bio = require('../util/bio');
var fs = require('fs');
var bignum = require('bignum');

var rnaCodonTableReverse = {};
for(var codon in bio.rnaCodonTable) {
  var protein = bio.rnaCodonTable[codon];
  rnaCodonTableReverse[protein] = rnaCodonTableReverse[protein] || [];
  rnaCodonTableReverse[protein].push(codon);
}

var proteinString = fs.readFileSync('../datasets/rosalind_mrna.txt', 'utf-8');
proteinString = proteinString.trim();
var sum = bignum('1');

for(var i = 0; i < proteinString.length; i++) {
  sum = sum.mul(rnaCodonTableReverse[proteinString[i]].length);
}

sum = sum.mul(rnaCodonTableReverse['Stop'].length);
sum = sum.mod(1000000);

console.log(sum.toString());
timing.printInfo();
