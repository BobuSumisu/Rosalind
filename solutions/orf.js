
/**
 * Rosalind Problem - Open Reading Frames
 * by Øyvind Ingvaldsen <oyvind.ingvaldsen@gmail.com>
 *
 * http://rosalind.info/problems/orf/
 *
 * Problem:
 *  Given - A DNA string s of length at most 1 kbp in FASTA format.
 *  Return - Every distinct candidate protein string that can be translated from ORFs of s. Strings can be returned in any order.
 *
 * Terms:
 *  Junk DNA - DNA that apparently serves no practical purpose to the cell.
 *  Reading frame - One of three possible ways to read a given strand of DNA, depending upon the starting position.
 *  Open reading frame (ORF) - A sequence in DNA or RNA potentially able to encode the protein.
 */

var timing = require('../util/timing');
var bio = require('../util/bio');
var fs = require('fs');

var data = fs.readFileSync('../datasets/rosalind_orf.txt', 'utf-8');
var dnaString = bio.parseFASTA(data)[0].data;
var dna = new bio.DNA(dnaString);

var orfs = dna.openReadingFrames();
var proteins = orfs.map(function(x) { return x.toProtein(); });

/** Select distinct protein strings **/
proteins = proteins.filter(function(el, i, self) { return self.indexOf(el) === i; });
proteins.forEach(function(protein) { console.log(protein); });


timing.printInfo();
