/**
 * Rosalind Challenge - Counting DNA Nucleotides
 * by Øyvind Ingvaldsen <oyvind.ingvaldsen@gmail.com>
 *
 * http://rosalind.info/problems/dna/
 *
 * Problem:
 *  Given - A DNA strint <s> of length at most 1000 nt.
 *  Return - Four integers (separated by spaces) counting the respective number of times the symbols 'A', 'C', 'G' and 'T' occurs in <s>.
 *
 * Terms:
 *  Cell - The building block of life.
 *  Nucleus - The central "brain" of a eukaryotic cell, which contains the cell's DNA
 *  Eukaryotic - Eukaryotes form the most complex domain of life, which includes all multicellular organisms. 
 *  Chromatin - The dense collection of nucleid acids and proteins found in the nucleus.
 *  Mitosis - The process of eukaryotic cell division.
 *  Chromosomes - A tightly coiled structure of DNA formed in advance of mitosis to facilitate DNA's duplication.
 *  Nucleid acids - A polymer of nucleotides, constituting either RNA or DNA.
 *  Polymers - A molecule formed by a repeating chain of subunits.
 *  Monomers - The structural unit making up a macromolecule (specifically, a polymer).
 *  Strands - A nucleic acid polymer.
 *  Nucleotide - The monomer making up a nucleic acid. (Used as a unit of strand length: nt).
 *  Sugar - One of three components of a nucleotide.
 *  Ion - An electrically charged atom or molecule.
 *  Phosphate - An ion that forms one of the three components of a nucleotide.
 *  Nucleobase - The differentiating component of nucleotides ("base" for short).
 *  Sugar-phosphate backbone - The alternating chain of sugar and phosphate molecules in a nucleic acid.
 *  Primary structure - The order of bases on a strand of nucleic acid.
 *  Deoxyribose nucleic acid (DNA) - The molecule encoding heredity and underlying the cellular processes of all life forms.
 *  Deoxyribose - The monosaccharide (sugar) appearing in each nucleotide of DNA.
 *  Adenine (A) - One of the nucleobases of both RNA and DNA; complementary to thymine in DNA.
 *  Cytosine (C) - One of the nucleobases of both RNA and DNA; complementary to guanine.
 *  Guanine (G) - One of the nucleobases of both RNA and DNA; complementary to cytosine in DNA.
 *  Thymine (T) - On of the four bases of DNA; complementary to adenine.
 *  Genome - The collection of all of an organism's DNA taken from all its chromosomes.
 */

var fs = require('fs');

fs.readFile('rosalind_dna.txt', 'utf-8', function(err, dnaString) {
  var adenineCount = dnaString.match(/A/g).length;
  var cytosineCount = dnaString.match(/C/g).length;
  var guanineCount = dnaString.match(/G/g).length;
  var thymineCount = dnaString.match(/T/g).length;
  console.log(adenineCount + ' ' + cytosineCount + ' ' + guanineCount + ' ' + thymineCount);  
});

