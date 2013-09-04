/**
 * Rosalind Problem - Computing GC Content
 * by Øyvind Ingvaldsen <oyvind.ingvaldsen@gmail.com>
 *
 * http://rosalind.info/problems/gc/
 *
 * Problem:
 *  Given - At most 10 DNA strings in FASTA format (of length at most 1kbp each).
 *  Return - The ID of the string having the highest GC-content, followed by the GC-content of that string (+- 0.001).
 *
 * Terms:
 *  GC-content - The percentage of cytosine and guanine bases in a strand of nucleic acid.
 *  FASTA format - A text format used for naming genetic strings in databases.
 *
 */

var timing = require('../util/timing');
var bio = require('../util/bio');
var fs = require('fs');

function gcContent(stringData) {
  return (stringData.replace(/[^GC]/g, '').length / stringData.length) * 100;
}

var data = fs.readFileSync('../datasets/rosalind_gc.txt', 'utf-8');
var strings = bio.parseFASTA(data);
var highestGC = strings[0];
strings.forEach(function(string) {
  string.gcContent = gcContent(string.data);
  if(string.gcContent > highestGC.gcContent) {
    highestGC = string;
  }
});
console.log(highestGC.name + '\n' + highestGC.gcContent);
timing.printInfo();
