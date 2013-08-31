/**
 * Rosalind Problem - Enumerating k-mers Lexicographically
 * by Øyvind Ingvaldsen <oyvind.ingvaldsen@gmail.com>
 *
 * http://rosalind.info/problems/lexf/
 *
 * Problem:
 *  Given - A collection of at most 10 symbols defining an ordered alphabet, and a positive integer n <= 10
 *  Return - All strings of length n that can be formed from the alphabet, ordered lexicographically.
 *
 * Terms:
 *  Lexicographic order - A "dictionary" ordering of strings constructed from the same ordered alphabet.
 */

var fs = require('fs');

function combine(alphabet, n, word, list) {
  word = word || '';
  list = list || [];

  if(n === 0) {
    list.push(word);
  }
  else {
    for(var i = 0; i < alphabet.length; i++) {
      combine(alphabet, n - 1, word + alphabet[i], list);
    }
  }

  return list;
}

fs.readFile('test.txt', 'utf-8', function(err, data) {
  var alphabet = data.split('\n')[0].split(' ');
  var n = parseInt(data.split('\n')[1]);

  combine(alphabet, n).forEach(function(c) {
    console.log(c);
  });

});
