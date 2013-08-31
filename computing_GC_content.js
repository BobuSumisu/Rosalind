/**
 * Rosalind Problem - Computing GC Content
 * by Øyvind Ingvaldsen <oyvind.ingvaldsen@gmail.com>
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

var fs = require('fs');

function parseFASTA(data) {
  var strings = [];
  data.split('\n').forEach(function(line) {
    if(line[0] === '>') {
      strings.push({ name: line.slice(1), data: '' });
    }
    else {
      strings[strings.length - 1].data += line;
    }
  });
  return strings;
}

function gcContent(stringData) {
  return (stringData.replace(/[^GC]/g, '').length / stringData.length) * 100;
}

fs.readFile('test.txt', 'utf-8', function(err, data) {
  var strings = parseFASTA(data);
  var highestGC = strings[0];
  strings.forEach(function(string) {
    string.gcContent = gcContent(string.data);
    if(string.gcContent > highestGC.gcContent) {
      highestGC = string;
    }
  });
  console.log(highestGC.name + '\n' + highestGC.gcContent);
});
