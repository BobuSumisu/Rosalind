'use strict';

var RNA = require('./RNA');

function DNA(dnaString) {
  this._string = dnaString;
}

DNA.prototype.toString = function() {
  return this._string;
};

DNA.prototype.inspect = function() {
  if(this.bp > 20) {
    return '<DNA ' + this._string.slice(0, 20) + '...>';
  }
  else {
    return '<DNA ' + this._string + '>';
  }
};

DNA.prototype.bp = function() {
  return this._string.length;
}

DNA.prototype.kbp = function() {
  return this.bp() / 1000;
}

DNA.prototype.baseCount = function() {
  return {
    'A': this._string.match(/A/g).length,
    'T': this._string.match(/T/g).length,
    'C': this._string.match(/C/g).length,
    'G': this._string.match(/G/g).length
  };
};

DNA.prototype.reverseComplement = function() {
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
  return new DNA(rc);
};

DNA.prototype.openReadingFrames = function() {
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

      if(codon === DNA.START_CODON) {
        start.push(j);
      }
      else if(DNA.CODON_TABLE[codon] === 'Stop') {
        if(start.length > 0) {
          start.forEach(function(s) {
            orfs.push(new DNA(codons.slice(s, j + 1).join('')));
          });
        }
        start = [];
      }

      if(codonRC === DNA.START_CODON) {
        startRC.push(j);
      }
      else if(DNA.CODON_TABLE[codonRC] === 'Stop') {
        if(startRC.length > 0) {
          startRC.forEach(function(s) {
            orfs.push(new DNA(codonsRC.slice(s, j + 1).join('')));
          });
        }
        startRC = [];
      }
    }
  }

  return orfs;
};

DNA.prototype.codons = function(offset) {
  offset = offset || 0;
  var codons = [];
  for(var i = offset; i < this.bp() - 3; i += 3) {
    codons.push(this._string.slice(i, i + 3));
  }
  return codons;
};

DNA.prototype.toRNA = function() {
  return new RNA(this._string.replace(/T/g, 'U'));
};

DNA.prototype.toProtein = function() {
  var proteinString = '';
  this.codons().forEach(function(codon) {
    proteinString += DNA.codonToProtein(codon);
  });
  return proteinString;
};

/** Static Stuff **/
DNA.START_CODON = 'ATG';
DNA.CODON_TABLE = {
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

DNA.codonToProtein = function(codon) {
  return this.CODON_TABLE[codon];
};


module.exports = DNA;
