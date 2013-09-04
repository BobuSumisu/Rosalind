/** Modules **/
var bignum = require('bignum');

/** Some Shortcuts **/
var pow = Math.pow;
var floor = Math.floor;

/** Lookup Tables **/
var _facTable = _facTable || [];


/** Functions **/

function fac(n) {
  if(n < 2) {
    return bignum(1);
  }
  
  if(_facTable[n]) {
    return _facTable[n];
  }
  else {
    return (_facTable[n] = fac(n - 1).mul(n));
  }
}

function binomCoef(n, k) {
  return fac(n).div(fac(k).mul(fac(n - k)));
}

/**
 * The propability mass function f(k;n,p) = Pr(X = x)
 *
 * The probability of exactly k successes in n (statistically independent) Bernoulli trials,
 * each with a propability of success p.
 */
function binomPMF(k, n, p) {
  return binomCoef(n, k).toNumber() * pow(p, k) * pow(1 - p, n - k);
}

/**
 * The binomial cumulative distribution function F(x;n,p) = Pr(X <= x)
 */
function binomCDF(x, n, p) {
  var sum = 0;
  for(var i = 0; i <= floor(x); i++) {
    sum += binomPMF(i, n, p); 
  }
  return sum;
}


/** Exports **/
exports.fac = fac;
exports.binomCoef = binomCoef;
exports.binomPMF = binomPMF;
exports.binomCDF = binomCDF;
