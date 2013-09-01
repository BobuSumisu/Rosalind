/**
 * Rosalind Problem - RNA Splicing
 * by Øyvind Ingvaldsen <oyvind.ingvaldsen@gmail.com>
 *
 * http://rosalind.info/problems/splc/
 *
 * Problem:
 *  Given - A DNA string s (of length at most 1 kbp) and a collection of substrings of s action as introns. All strings are given in FASTA format.
 *  Return - A protein string resulting from transcribing and translating the exons of s. (Note: Only one solution will exist for the dataset provided.)
 *
 * Terms:
 *  RNA polymerase (RNAP) - An enzyme transcribing a double-stranded molecule of DNA in the nucleus into a strand of RNA.
 *  Precursor mRNA (pre-mRNA) - The raw result of DNA transcription, which is then spliced to form a mature strand of mRNA for the purpose of protein translation.
 *  Template strand - The strand of a DNA molecule that is used as a template for DNA replication or RNA transcription.
 *  Coding strand - The strand of a double-stranded DNA molecule that is copied of transcribed into RNA.
 *  Intron - A segment of a gene not used for translation into protein.
 *  Exon - A contiguous segment of RNA converted into mRNA for protein translation.
 *  Splicing - The process by which the coding region of a gene is excised into an mRNA for protein translation.
 *  Spliceosome - A macromolecule of RNA and proteins that facilitates RNA splicing.
 *  Coding region - The collection of a gene's exons.
 */

var timing = require('../util/timing');
var fs = require('fs');
var parseFASTA = require('../util/parseFASTA');
var rnaCodonTable = require('../util/rnaCodonTable');

var data = fs.readFileSync('../datasets/rosalind_splc.txt', 'utf-8');
var strings = parseFASTA(data);
var s = strings[0].data;

/** Throw away "introns" **/
for(var i = 1; i < strings.length; i++) {
  s = s.replace(strings[i].data, '');
}

var mRNA = s.replace(/T/g, 'U');

var proteinString = '';

for(var i = 0; i < mRNA.length; i += 3) {
  var protein = rnaCodonTable[mRNA.slice(i, i + 3)]; 
  if(protein === 'Stop') {
    break;
  }
  proteinString += protein;
}

console.log(proteinString);
timing.printInfo();

