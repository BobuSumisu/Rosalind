'use strict';

var DNAString = exports.DNAString = require('./dna-string');
var RNAString = exports.RNAString = require('./rna-string');
var ProteinString = exports.ProteinString = require('./protein-string');

exports.parseFASTA = function(data) {
  var strings = [];

  data.split('\n').forEach(function(line) {
    if(line[0] === '>') {
      strings.push(new DNAString('', line.slice(1)));
    }
    else {
      strings[strings.length - 1]._string += line.trim();
    }
  });

  return strings;
};

exports.rnaCodonTable = {
  UUU: 'F',      CUU: 'L',      AUU: 'I',      GUU: 'V', 
  UUC: 'F',      CUC: 'L',      AUC: 'I',      GUC: 'V',
  UUA: 'L',      CUA: 'L',      AUA: 'I',      GUA: 'V',
  UUG: 'L',      CUG: 'L',      AUG: 'M',      GUG: 'V',
  UCU: 'S',      CCU: 'P',      ACU: 'T',      GCU: 'A',
  UCC: 'S',      CCC: 'P',      ACC: 'T',      GCC: 'A',
  UCA: 'S',      CCA: 'P',      ACA: 'T',      GCA: 'A',
  UCG: 'S',      CCG: 'P',      ACG: 'T',      GCG: 'A',
  UAU: 'Y',      CAU: 'H',      AAU: 'N',      GAU: 'D',
  UAC: 'Y',      CAC: 'H',      AAC: 'N',      GAC: 'D',
  UAA: 'Stop',   CAA: 'Q',      AAA: 'K',      GAA: 'E',
  UAG: 'Stop',   CAG: 'Q',      AAG: 'K',      GAG: 'E',
  UGU: 'C',      CGU: 'R',      AGU: 'S',      GGU: 'G',
  UGC: 'C',      CGC: 'R',      AGC: 'S',      GGC: 'G',
  UGA: 'Stop',   CGA: 'R',      AGA: 'R',      GGA: 'G',
  UGG: 'W',      CGG: 'R',      AGG: 'R',      GGG: 'G'
};

