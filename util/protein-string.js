'use strict';

function ProteinString(proteinString, name) {
  this._string = proteinString.trim();
  this._name = name;
}

ProteinString.prototype.toString = function() {
  return this._string;
};

ProteinString.prototype.inspect = function() {
  if(this._name) {
    return '<ProteinString ' + this._name + '>';
  }
  else {
    return '<ProteinString ' + this._string + '>';
  }
};

ProteinString.prototype.getName = function() {
  return this._name;
};

ProteinString.prototype.aa = function() {
  return this._string.length;
};

ProteinString.prototype.weight = function() {
  var weight = 0;
  for(var i = 0; i < this.aa(); i++) {
    weight += ProteinString.MONOISOTOPIC_WEIGHT_TABLE[this._string[i]];
  }
  return weight;
};

ProteinString.MONOISOTOPIC_WEIGHT_TABLE = {
  A:   71.03711,
  C:   103.00919,
  D:   115.02694,
  E:   129.04259,
  F:   147.06841,
  G:   57.02146,
  H:   137.05891,
  I:   113.08406,
  K:   128.09496,
  L:   113.08406,
  M:   131.04049,
  N:   114.04293,
  P:   97.05276,
  Q:   128.05858,
  R:   156.10111,
  S:   87.03203,
  T:   101.04768,
  V:   99.06841,
  W:   186.07931,
  Y:   163.06333 
};


module.exports = ProteinString;
