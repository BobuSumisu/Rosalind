
/**
 * Rosalind Problem - Open Reading Frames
 * by Øyvind Ingvaldsen <oyvind.ingvaldsen@gmail.com>
 *
 * http://rosalind.info/problems/orf/
 *
 * Problem:
 *  Given - 
 *  Return - 
 *
 * Terms:
 */

var timing = require('../util/timing');
var bio = require('../util/bio');
var fs = require('fs');

var data = fs.readFileSync('../datasets/rosalind_orf.txt', 'utf-8');
var dnaString = bio.parseFASTA(data)[0];

timing.printInfo();
