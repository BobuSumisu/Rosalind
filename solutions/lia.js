/**
 * Rosalind Problem - Independent Alleles
 * by Øyvind Ingvaldsen <oyvind.ingvaldsen@gmail.com>
 *
 * http://rosalind.info/problems/lia/
 *
 * [IN PROGRESS]
 *
 * Problem:
 *  Given - Two positive integers k <= 7 and N <= 2^k. In this problem, we begin with Tom, who in the 0th generation has genotype Aa Bb. Tom has two children in the 1st generation, each of whom has two children, and so on. Each organism always mates with an organism having genotype Aa Bb.
 *  Return - The probability that at least N Aa Bb organisms will belong to the k-th generation of Tom's family tree (don't count the Aa Bb mates at each level). Assume that Mendel's second law holds for the factors
 *
 * Terms:
 *  Mendel's second law - Mendel's maxim that traits are inherited independently of each other.
 *  Independent (events) - Events whose probabilities of occuring do not influence one another.
 *  Independent (variables) - Two random variables whose outcomes occur with no dependence on the other random variable.
 */

var timing = require('../util/timing');
var fs = require('fs');

var data = fs.readFileSync('../datasets/rosalind_lia.txt', 'utf-8');
var k = parseInt(data.split(' ')[0]);
var n = parseInt(data.split(' ')[1]);
var N = Math.pow(2, k);

var _facTable = [1, 1];
function fac(n) {
  if(_facTable[n]) {
    return _facTable[n];
  }
  else {
    _facTable[n] = fac(n - 1) * n;
    return _facTable[n];
  }
}

function binomCoef(n, k) {
  return fac(n) / (fac(k) * fac(n - k));
}

function binomPdf(n, p, r) {
  return binomCoef(n, r) * Math.pow(p, r) * Math.pow(1 - p, n - r);
}

/** Some binomial distribution function here? **/

timing.printInfo();
