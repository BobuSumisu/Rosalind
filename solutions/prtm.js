
/**
 * Rosalind Problem - Calculating Protein Mass
 * by Øyvind Ingvaldsen <oyvind.ingvaldsen@gmail.com>
 *
 * http://rosalind.info/problems/prtm/
 *
 * Problem:
 *  Given - A protein string P of length at most 1000 aa.
 *  Return - The total weight of P. Consult the monoisotopic mass table.
 *
 * Terms:
 */

var timing = require('../util/timing');
var bio = require('../util/bio');
var discrete = require('../util/discrete');

var fs = require('fs');

var data = fs.readFileSync('../datasets/rosalind_prtm.txt', 'utf-8');
var proteinString = new bio.ProteinString(data);
console.log(proteinString.weight());

timing.printInfo();
