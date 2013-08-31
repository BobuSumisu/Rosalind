/**
 * Rosalind Challenge - Transcribing DNA into RNA
 * by Øyvind Ingvaldsen <oyvind.Ingvaldsen@gmail.com>
 *
 * http://rosalind.info/problems/rna/
 *
 * Problem:
 *  Given - A DNA string <t> having length at most 1000 nt.
 *  Return - The transcribed RNA string of <t>.
 *
 * Terms:
 *  Ribose - The sugar component of RNA.
 *  Ribose nucleic acid (RNA) - A nucleic acid transcribed from DNA that serves as the template for protein creation.
 *  Uracil (U) - On of the four bases of RNA (but not DNA).
 *  Messenger RNA (mRNA) - An RNA molecule that serves as the blueprint for translation into protein.
 * RNA transcription - The process by which DNA is converted into RNA.
 */

var fs = require('fs');

fs.readFile('rosalind_rna.txt', 'utf-8', function(err, dnaString) {
  console.log(dnaString.replace(/T/g, 'U'));
});
