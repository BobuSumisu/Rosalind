'use strict';

function RNA(rnaString) {
  this._string = rnaString;
}

RNA.prototype.string = function() {
  return this._string;
};

RNA.prototype.bp = function() {
  return this._string.length;
};

RNA.prototype.kbp = function() {
  return this.bp() / 1000;
}

RNA.prototype.toString = RNA.prototype.inspect = function() {
  if(this.bp() > 20) {
    return '<RNA ' + this._string.slice(0, 20) + '...>';
  }
  else {
    return '<RNA ' + this._string + '>';
  }
};

module.exports = RNA;
