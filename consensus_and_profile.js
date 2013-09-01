/**
 * Rosalind Problem - Consensus and Profile
 * by Øyvind Ingvaldsen <oyvind.ingvaldsen@gmail.com>
 *
 * http://rosalind.info/problems/cons/
 *
 * Problem:
 *  Given - A collection of at most 10 DNA strings of equal length (at most 1 kbp) in FASTA format.
 *  Return - A consensus string and profile matrix for the collection. (If several possible consensus strings exists, then you may return any of them.)
 *
 * Terms:
 *  Matrix - A rectangular table of values arranged in rows and columns.
 *  Profile matrix - A matrix encoding the number of times that each symbol of an alphabet occures in each position from a collection of strings.
 *  Consensus string - A string formed from a collection of equal-length strings by taking the most common symbol at each position.
 */

var fs = require('fs');
var parseFASTA = require('./util/parseFASTA');

fs.readFile('test.txt', 'utf-8', function(err, data) {
  var dnaStrings = parseFASTA(data);
  var length = dnaStrings[0].data.length;
  var matrix = [];

  for(var i = 0; i < 4; i++) {
    for(var j = 0; j < length; j++) {
      matrix[i] = matrix[i] || [];
      matrix[i][j] = 0;
    }
  }

  function getColumn(matrix, j) {
    return [
      matrix[0][j], matrix[1][j], matrix[2][j], matrix[3][j]
    ];
  }

  function biggestIndex(arr) {
    var b = 0;

    for(var i = 1; i < arr.length; i++) {
      if(arr[i] > arr[b]) {
        b = i;
      }
    }

    return b;
  }

  function indexToLetter(i) {
    switch(i) {
      case 0: return 'A'; 
      case 1: return 'C'; 
      case 2: return 'G';
      case 3: return 'T';
    }
  }

  dnaStrings.forEach(function(dnaString) {
    for(var i = 0; i < length; i++) {
      switch(dnaString.data[i]) {
        case 'A': 
          matrix[0][i] += 1;
          break;
        case 'C':
          matrix[1][i] += 1;
          break;
        case 'G':
          matrix[2][i] += 1;
          break;
        case 'T':
          matrix[3][i] += 1;
          break;
      }
    }
  });

  var consensus = '';
  for(var i = 0; i < length; i++) {
    var col = getColumn(matrix, i);
    consensus += indexToLetter(biggestIndex(col));
  }

  console.log(consensus);
  matrix.forEach(function(row, i) {
    console.log(indexToLetter(i) + ': ' + row.join(' '));
  });

});

