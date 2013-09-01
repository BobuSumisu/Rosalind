/**
 * Rosalind Problem - Calculating Expected Offspring
 * by Øyvind Ingvaldsen <oyvind.ingvaldsen@gmail.com>
 *
 * http://rosalind.info/problems/iev/
 *
 * Problem:
 *  Given - Six positive integers, each of which does not exceed 20,000. The integers correspond to the number of couples in a population possessing each genotype pairing for a giving factor. In order, the six given integers represent the number of couples having the following genotypes:
 *    1. AA-AA
 *    2. AA-Aa
 *    3. AA-aa
 *    4. Aa-Aa
 *    5. Aa-aa
 *    6. aa-aa
 *  Return - The expected number of offspring displaying the dominant phenotype in the next generation, under the assumption that every couple has exactly two offspring.
 *
 * Terms:
 */

var timing = require('../util/timing');
var fs = require('fs');

var data = fs.readFileSync('../datasets/rosalind_iev.txt', 'utf-8');

timing.printInfo();
