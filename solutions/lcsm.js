/**
 * Rosalind Problem - Finding a Shared Motif
 * by Øyvind Ingvaldsen <oyvind.ingvaldsen@gmail.com>
 *
 * http://rosalind.info/problems/lcsm/
 *
 * Problem:
 *  Given - A collection of k <= 100 DNA strings of length at most 1 kbp each in FASTA format.
 *  Return - A longest common substring of the collection. (If multiple solutions exists, you may return any single solution.)
 *
 * Terms:
 *  Common substring - A substring contained in all strings from a collection.
 *  Longest common substring - A common substring of a collection of maximum length.
 */

var timing = require('../util/timing');
var bio = require('../util/bio');
var fs = require('fs');

var data = fs.readFileSync('../datasets/rosalind_lcsm.txt', 'utf-8');
var strings = bio.parseFASTA(data).map(function(x) { return x.data; });

/** Sort by length (asc). **/
strings = strings.sort(function(a, b) {
  return a.length - b.length;
});

function longestCommonSubstring(strings) {
  for(var i = strings[0].length; i > 0; i--) {
    for(var j = 0; j < strings[0].length - i; j++) {
      var substring = strings[0].slice(j, j + i);
      var common = true;

      for(var k = 1; k < strings.length; k++) {
        if(strings[k].length < i || strings[k].search(substring) === -1) {
          common = false;
          break;
        }
      }

      if(common) {
        return substring;
      }
    }
  }
  return null;
}

console.log(longestCommonSubstring(strings));
timing.printInfo();
