'use strict';

function RNAString(rnaString, name) {
  this._string = rnaString.trim();
  this._name = name;
}

RNAString.prototype.toString = function() {
  return this._string;
}

RNAString.prototype.inspect = function() {
  if(this._name) {
    return '<RNAString ' + this._name + '>';
  }
  else {
    return '<RNAString ' + this._string.slice(0, 20) + '...>';
  }
};

RNAString.prototype.getName = function() {
  return this._name;
};

RNAString.prototype.bp = function() {
  return this._string.length;
};

RNAString.prototype.kbp = function() {
  return this.bp() / 1000;
}

module.exports = RNAString;
