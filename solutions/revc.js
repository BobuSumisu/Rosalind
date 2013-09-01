/**
 * Rosalind Challenge - Complementing a Strand of DNA
 *
 * http://rosalind.info/problems/revc/
 *
 * Problem:
 *  Given - A DNA string <s> of length at most 1000 bp.
 *  Return - The reverse complement <s^c> of <s>.
 *
 * Terms:
 *  Complement - The base to which a given base bonds in DNA. 
 *    - A and T
 *    - C and G
 *  Double helix - A shape composed of two twisted chains, which serves as a model for the structure of DNA.
 *  Secondary structure (of DNA) - The base pairing interactions of nucleic acid bases.
 *  Tertiary structure (of DNA) - The 3-dimensjonal shape of a nucleic acid, which in case of DNA is the double helix.
 *  Base pair (bp) - The combination of two bonded complementary bases.
 *  Reverse complement - The DNA string formed by reversing and complementing each symbol.
 */

var timing = require('../util/timing');
var fs = require('fs');

var dnaString = fs.readFileSync('../datasets/rosalind_revc.txt', 'utf-8');
var reverseComplement = '';   
var i = dnaString.length;
while(i--) {
  switch(dnaString[i]) {
    case 'A': 
      reverseComplement += 'T';
      break;
    case 'T':
      reverseComplement += 'A';
      break;
    case 'C':
      reverseComplement += 'G';
      break;
    case 'G':
      reverseComplement += 'C';
      break;
  }
}
console.log(reverseComplement);
timing.printInfo();
