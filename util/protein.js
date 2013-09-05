'use strict';

/** This should probably be ProteinString **/

function Protein(string) {
  this._string = string;
}

Protein.prototype.toString = function() {
  return this._string;
};

Protein.prototype.inspect = function() {
  return '<Protein ' + this._string + '>';
}


module.exports = Protein;
