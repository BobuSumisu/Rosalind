/**
 * Rosalind Problem - Translating RNA into Protein
 * by Øyvind Ingvaldsen <oyvind.ingvaldsen@gmail.com>
 *
 * http://rosalind.info/problems/prot/
 *
 * Problem:
 *  Given - An RNA string s corresponding to a strand of mRNA (of length at most 10 kbp).
 *  Return - The protein string encoded by s.
 *
 * Terms:
 *  Proteins - The functional unit of the cell.
 *  Amino acids - The monomer unit for proteins; the same 20 amino acids commonly occur in most species.
 *  Primary structure (of proteins) - The order of amino acids on a protein.
 *  Polypeptides - A long chain of amino acids.
 *  Proteomics - The study of proteins and their properties.
 *  Genetic code - The exact specifications for translating nucleic acid codons into amino acids.
 *  Translation (of RNA) - The process by which mRNA is converted into a peptide chain for the creation of protein.
 *  Messenger RNA (mRNA) - An RNA molecule that serves as the blueprint for translation into protein.
 *  Codons - A triplet of contiguous nucleotides.
 *  Start codon (AUG) - The RNA codon AUG, which codes for the amino acid methionine and indicates the beginning of translation into protein.
 *  Stop codons (UAA, UAG, UGA) - One of three possible RNA codons that indicate the termination of protein translation.
 *  Central dogma of molecular biology - A postulate dictating that protein is always translated from RNA, which in turn is always transcribed from DNA.
 *  Ribosome - An organelle that carries out the assembly of peptides from mRNA during translation.
 *  Transfer RNA (tRNA) - The helper molecule used by ribosomes for physically translating codons into amino acids.
 *  Anticodon - A string of length 3 whose symbol are complementary to those of a given RNA codon.
 *  Gene - An interval of DNA whose nucleotides are translated into a polypeptide for protein creation.
 *  Protein string - A string composed of symbols taken from the English alphabet less B, J, O, U, X and Z; representing a peptide chain formed from amino acids.
 *  Genetic string - DNA, RNA or amino acid string.
 *  RNA codon table - A table indicating the translation of individual RNA codons into amino acids for the purpose of protein creation.
 */

var timing = require('../util/timing');
var fs = require('fs');

var rnaCodonTable = require('../util/rnaCodonTable');

var rnaString = fs.readFileSync('../datasets/rosalind_prot.txt', 'utf-8');
var proteinString = '';
for(var i = 0; i < rnaString.length; i += 3) {
  var protein = rnaCodonTable[rnaString.slice(i, i + 3)];
  if(protein === 'Stop') {
    break;
  }
  proteinString += protein;
}
console.log(proteinString);
timing.printInfo();

