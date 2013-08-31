/**
 * Rosalind Problem - Enumerating k-mers Lexicographically
 * by Øyvind Ingvaldsen <oyvind.ingvaldsen@gmail.com>
 *
 * [IN PROGRESS]
 *
 * Problem:
 *  Given - A collection of at most 10 symbols defining an ordered alphabet, and a positive integer n <= 10
 *  Return - All strings of length n that can be formed from the alphabet, ordered lexicographically.
 *
 * Terms:
 *  Lexicographic order - A "dictionary" ordering of strings constructed from the same ordered alphabet.
 */

var fs = require('fs');

function form(alphabet, n) {
  var strings = [];

  
  for(var i = 0; i < alphabet.length; i++) {
    for(var k = 0; k < alphabet.length; k++) {
      console.log(alphabet[i] + alphabet[k]); 
    }
  }

  return strings;
}

fs.readFile('test.txt', 'utf-8', function(err, data) {
  var alphabet = data.split('\n')[0].split(' ');
  var n = parseInt(data.split('\n')[1]);

  var strings = form(alphabet);
  console.log(strings);
});
