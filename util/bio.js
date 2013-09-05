'use strict';

exports.DNA = require('./DNA');
exports.RNA = require('./RNA');

exports.parseFASTA = function(data) {
  var strings = [];

  data.split('\n').forEach(function(line) {
    if(line[0] === '>') {
      strings.push({
        name: line.slice(1),
        data: ''
      });
    }
    else {
      strings[strings.length - 1].data += line;
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

