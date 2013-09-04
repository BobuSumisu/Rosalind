/**
 * Rosalind Problem - Transitions and Transversions
 * by Øyvind Ingvaldsen <oyvind.ingvaldsen@gmail.com>
 *
 * http://rosalind.info/problems/tran/
 *
 * Problem:
 *  Given - Two DNA strings s1 and s2 of equal length (at most 1 kbp).
 *  Return - The transition/transversion ratio R(s1, s2).
 *
 * Terms:
 *  Purine - A double-ring nucleobase (adenine and guanine in DNA).
 *  Pyrimidine - A single-ring nucleobase (cytosine and thymine in DNA).
 *  Transition - A point mutation that changes a purine to another purine or pyrimidine to another pyrimidine.
 *  Transversion - The substitution of a purine for a pyrimidine, or vice-versa.
 *  Silent substitution - A point mutation applied to an exon that does not change the translated protein.
 *  Transition/tranversion ratio - The ratio of transitions to transversions in two DNA/RNA strings of the same length.
 */

var timing = require('../util/timing');
var bio = require('../util/bio');

var fs = require('fs');

function R(s1, s2) {
  var transitions = 0;
  var transversions = 0;

  for(var i = 0; i < s1.length; i++) {
    var tmp = s1[i] + s2[i];
    switch(tmp) {
      case 'AG':
      case 'GA':
      case 'CT':
      case 'TC':
        transitions += 1;
        break;
      case 'AC':
      case 'CA':
      case 'AT':
      case 'TA':
      case 'GC':
      case 'CG':
      case 'GT':
      case 'TG':
        transversions += 1;
        break;
    }
  }

  return transitions / transversions;
}

var data = fs.readFileSync('../datasets/rosalind_tran.txt', 'utf-8');
var strings = bio.parseFASTA(data);
console.log(R(strings[0].data, strings[1].data));
timing.printInfo();
