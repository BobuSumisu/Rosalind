
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

exports.dnaCodonTable = {
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


