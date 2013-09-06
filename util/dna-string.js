'use strict';

var RNAString = require('./rna-string');

function DNAString(dnaString, name) {
  this._string = dnaString.trim();
  this._name = name;
}

DNAString.prototype.toString = function() {
  return this._string;
};

DNAString.prototype.inspect = function() {
  if(this._name) {
    return '<DNAString ' + this._name + '>';
  }
  else {
    return '<DNAString ' + this._string.slice(0, 20) + '...>';
  }
};

DNAString.prototype.getName = function() {
  return this._name;
};

DNAString.prototype.bp = DNAString.prototype.length = function() {
  return this._string.length;
};

DNAString.prototype.kbp = function() {
  return this.bp() / 1000;
};

DNAString.prototype.substring = function(start, end, name) {
  return new DNAString(this._string.slice(start, end), name);
};

DNAString.prototype.baseCount = function() {
  return {
    'A': this._string.match(/A/g).length,
    'T': this._string.match(/T/g).length,
    'C': this._string.match(/C/g).length,
    'G': this._string.match(/G/g).length
  };
};

DNAString.prototype.reverseComplement = function() {
  var i = this.bp();
  var rc = '';
  while(i--) {
    switch(this._string[i]) {
      case 'A': rc += 'T'; break;
      case 'T': rc += 'A'; break;
      case 'G': rc += 'C'; break;
      case 'C': rc += 'G'; break;
    }
  }
  return new DNAString(rc);
};

DNAString.prototype.isReversePalindrome = function() {
  return this._string === this.reverseComplement()._string;
};

DNAString.prototype.openReadingFrames = function() {
  var orfs = [];
  var rc = this.reverseComplement();

  for(var i = 0; i < 3; i++) {
    var codons = this.codons(i);
    var codonsRC = rc.codons(i);
    var start = [];
    var startRC = [];

    for(var j = 0; j < codons.length; j++) {
      var codon = codons[j];
      var codonRC = codonsRC[j];

      if(codon === DNAString.START_CODON) {
        start.push(j);
      }
      else if(DNAString.CODON_TABLE[codon] === 'Stop') {
        if(start.length > 0) {
          start.forEach(function(s) {
            orfs.push(new DNAString(codons.slice(s, j + 1).join('')));
          });
        }
        start = [];
      }

      if(codonRC === DNAString.START_CODON) {
        startRC.push(j);
      }
      else if(DNAString.CODON_TABLE[codonRC] === 'Stop') {
        if(startRC.length > 0) {
          startRC.forEach(function(s) {
            orfs.push(new DNAString(codonsRC.slice(s, j + 1).join('')));
          });
        }
        startRC = [];
      }
    }
  }

  return orfs;
};

DNAString.prototype.codons = function(offset) {
  offset = offset || 0;
  var codons = [];
  for(var i = offset; i < this.bp() - 3; i += 3) {
    codons.push(this._string.slice(i, i + 3));
  }
  return codons;
};

DNAString.prototype.toRNA = function() {
  return new RNAString(this._string.replace(/T/g, 'U'));
};

DNAString.prototype.toProtein = function() {
  var proteinString = '';
  this.codons().forEach(function(codon) {
    proteinString += DNAString.codonToProtein(codon);
  });
  return proteinString;
};

/** Static Stuff **/
DNAString.START_CODON = 'ATG';
DNAString.CODON_TABLE = {
  TTT: 'F',      CTT: 'L',      ATT: 'I',      GTT: 'V', 
  TTC: 'F',      CTC: 'L',      ATC: 'I',      GTC: 'V',
  TTA: 'L',      CTA: 'L',      ATA: 'I',      GTA: 'V',
  TTG: 'L',      CTG: 'L',      ATG: 'M',      GTG: 'V',
  TCT: 'S',      CCT: 'P',      ACT: 'T',      GCT: 'A',
  TCC: 'S',      CCC: 'P',      ACC: 'T',      GCC: 'A',
  TCA: 'S',      CCA: 'P',      ACA: 'T',      GCA: 'A',
  TCG: 'S',      CCG: 'P',      ACG: 'T',      GCG: 'A',
  TAT: 'Y',      CAT: 'H',      AAT: 'N',      GAT: 'D',
  TAC: 'Y',      CAC: 'H',      AAC: 'N',      GAC: 'D',
  TAA: 'Stop',   CAA: 'Q',      AAA: 'K',      GAA: 'E',
  TAG: 'Stop',   CAG: 'Q',      AAG: 'K',      GAG: 'E',
  TGT: 'C',      CGT: 'R',      AGT: 'S',      GGT: 'G',
  TGC: 'C',      CGC: 'R',      AGC: 'S',      GGC: 'G',
  TGA: 'Stop',   CGA: 'R',      AGA: 'R',      GGA: 'G',
  TGG: 'W',      CGG: 'R',      AGG: 'R',      GGG: 'G'
};

DNAString.codonToProtein = function(codon) {
  return this.CODON_TABLE[codon];
};

module.exports = DNAString;
