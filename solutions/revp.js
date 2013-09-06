
/**
 * Rosalind Problem - Locating Restriction Sites
 * by Øyvind Ingvaldsen <oyvind.ingvaldsen@gmail.com>
 *
 * http://rosalind.info/problems/revp/
 *
 * Problem:
 *  Given - A DNA string of length at most 1 kbp in FASTA format.
 *  Return - The position and length of every reverse palindrome in the string having length between 4 and 12. You may return these pairs in any order.
 *
 * Terms:
 */

var timing = require('../util/timing');
var bio = require('../util/bio');
var discrete = require('../util/discrete');

var fs = require('fs');

var data = fs.readFileSync('../datasets/rosalind_revp.txt', 'utf-8');
var dnaString = bio.parseFASTA(data)[0];

var pairs = [];
for(var i = 4; i <= 12; i++) {
  for(var j = 0; j <= dnaString.length() - i; j++) {
    var substring = dnaString.substring(j, j + i);
    if(substring.isReversePalindrome()) {
      pairs.push([(j + 1),  i]);
    }
  }
}

pairs.sort(function(a, b) { return a[0] - b[0]; });
pairs.forEach(function(x) { console.log(x.join(' ')); });

timing.printInfo();
