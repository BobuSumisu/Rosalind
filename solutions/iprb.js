/**
 * Rosalind Problem - Mendel's First Law
 * by Øyvind Ingvaldsen <oyvind.ingvaldsen@gmail.com>
 *
 * http://rosalind.info/problems/iprb/
 *
 * Problem:
 *  Given - Three positive integers k, m, and n, representing a population containing k + m + n organisms: k invidiuals are homozyogous dominant for a factor, m are heterozygous, and n are homozygous recessive.
 *  Return - The probability that two randomly selected mating organisms will produce an individual possessing a dominant allele (and thus displaying the dominant phenotype). Assume that any two organisms can mate.
 *
 * Terms:
 *  Blending inheritance - The faulty hereditary theory that stated an individual would exhibit a blend of its parents' traits.
 *  Factors - The Mendelian unit of heredity.
 *  Alleles - One of two possible form of a Mendelian factor (i.e., gene).
 *  First Law (Mendel) - Mendel's maxim that every gene has two alleles, one of which derives from each parent.
 *  Homozygous - Having two copies of the same allele for a Mendelian factor.
 *  Heterozygous - Having different alleles for a Mendelian factor.
 *  Dominant (allele) - The allele for a Mendelian factor that supercedes the recessive allele and determines the orgnaism's phenotype.
 *  Recessive (allele) - The allele for a Mendelian trait that is superceded by the dominant allele when determining the organism's phenotype.
 *  Genotype - An organism's precise genetic makeup.
 *  Phenotype - The physical manifestation of an organism's genetic makeup.
 *  Punnett square - A square representing the different posibilities for alleles of offspring given the alleles of both parents.
 *  Random variable - A variable that can take different values based on a randomized process.
 *  Outcomes - A possible value taken by a random variable.
 *  Event - A collection of outcomes of a random variable.
 *  
 */

var timing = require('../util/timing');
var fs = require('fs');
var clone = require('clone');

var data = fs.readFileSync('../datasets/rosalind_iprb.txt', 'utf-8');
var outcomes = ['k', 'm', 'n'];
var dataSplitted = data.split(' ');

var population = {
  k: parseInt(dataSplitted[0]),
  m: parseInt(dataSplitted[1]),
  n: parseInt(dataSplitted[2]),
  size: function() {
    return this.k + this.m + this.n;
  },
  outcomeProb: function(outcome) {
    return this[outcome] / this.size();
  },
  eventProb: function(oc1, oc2) {
    var prob = this.outcomeProb(oc1);
    this[oc1] -= 1;
    prob *= this.outcomeProb(oc2);
    return prob;
  }
};

var punnett = {
  k: { k: 1.0, m: 1.0, n: 1.0 },
  m: { k: 1.0, m: 0.75, n: 0.5 },
  n: { k: 1.0, m: 0.5, n: 0.0 }
};

var sum = 0;

outcomes.forEach(function(i) {
  outcomes.forEach(function(j) {
    var pop = clone(population);
    sum += pop.eventProb(i, j) * punnett[i][j];
  });
});

console.log(sum);
timing.printInfo();
