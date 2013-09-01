/**
 * Rosalind Problem - Finding a Motif in DNA
 * by Øyvind Ingvaldsen <oyvind.ingvaldsen@gmail.com>
 *
 * http://rosalind.info/problems/subs/
 *
 * Problem:
 *  Given - Two DNA strings s and t (each of length at most 1 kbp).
 *  Return - All locations of t as a substring of s.
 *
 * Terms:
 *  Motif - A nucleotide or amino acid pattern of biological significance.
 *  Repeats - An interval of DNA in the genome that occurs often, possibly with minor changes.
 *  Alu repeat - A repeat of about 300 base pairs that occurs a million time on the human genome.
 */

var timing = require('../util/timing');
var fs = require('fs');

var data = fs.readFileSync('../datasets/rosalind_subs.txt', 'utf-8');
var s = data.split('\n')[0];
var t = data.split('\n')[1];

var indices = [];

for(var i = 0; i < s.length - t.length; i++) {
  if(s.slice(i, i + t.length) === t) {
    indices.push(i + 1);
  }
}

console.log(indices.join(' '));
timing.printInfo();
