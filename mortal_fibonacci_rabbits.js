/**
 * Rosalind Challenge - Mortal Fibonacci Rabbits
 * by Øyvind Ingvaldsen <oyvind.ingvaldsen@gmail.com>
 *
 * [IN PROGRESS]
 *
 * Problem: 
 *  Given - Positive integers n <= 100 and m <= 20
 *  Return - The total number of pairs of rabbits that will remain after the n-th month if all rabbits live for m months.
 */

var fs = require('fs');

function mortalRabbitPairs(months, lifespan) {
  if(months === 0) {
    return 0;
  }

  var pairs = [1, 1];

  for(var i = 2; i < months; i++) {
    if(i >= lifespan) {
      pairs[i] = pairs[i - 1] + pairs[i - 2] - pairs[i - lifespan];  
    }
    else {
      pairs[i] = pairs[i - 1] + pairs[i - 2];
    }
  }

  return pairs[months - 1];
}


for(var i = 0; i < 10; i++) {
  console.log(i + ': ' + mortalRabbitPairs(i, 3));
}

fs.readFile('test.txt', 'utf-8', function(err, data) {
  var months = data.split(' ')[0];
  var lifespan = data.split(' ')[1];
  console.log(mortalRabbitPairs(months, lifespan));
});
