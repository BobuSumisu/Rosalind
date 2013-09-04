
/**
 * Rosalind Problem - Finding a Protein Motif
 * by Øyvind Ingvaldsen <oyvind.ingvaldsen@gmail.com>
 *
 * http://rosalind.info/problems/mprt/
 *
 * Problem:
 *  Given - At most 15 UniProt Protein Database access IDs.
 *  Return - For each protein possessing the N-glycosylation motif, output its given access ID followed by a list of locations in the protein string where the motif can be found.
 *
 * Terms:
 *  Domain (protein) - A structural and functional unit of the protein. An interval of amino acids that can evolve and function independently.
 *  Chimeric protein - A protein artificially constructed from serveral known domains.
 *  Protein family - A group of homologous proteins.
 *  UniProt - A central repository for protein data.
 */

var timing = require('../util/timing');
var bio = require('../util/bio');
var fs = require('fs');
var request = require('request');
var async = require('async');

var data = fs.readFileSync('../datasets/rosalind_mprt.txt', 'utf-8');
var proteinStrings = [];

async.eachSeries(data.trim().split('\n'), function(uniprotId, callback) {
  request('http://uniprot.org/uniprot/' + uniprotId.trim() + '.fasta', function(err, response, body) {
    var proteinString = bio.parseFASTA(body)[0];
    proteinString.uniprotId = uniprotId;
    proteinStrings.push(proteinString);
    console.log(uniprotId + ' downloaded and parsed.');
    callback(null);
  });
}, function(err) { 

  /**
   * N-glycosylation motif = N{P}[ST]{P}
   * {X} any except X.
   * [XY] either X or Y.
   */

  console.log('\n');
  
  var nGlycosylationMotifRegexp = /N[^P][ST][^P]/g;

  proteinStrings.forEach(function(proteinString) {
    var string = proteinString.data;
    var indices = [];
    var match = null;
    while(match = nGlycosylationMotifRegexp.exec(string)) {
      indices.push(match.index + 1);
      /** For overlapping matches **/
      nGlycosylationMotifRegexp.lastIndex = match.index + 1;
    }

    if(indices.length > 0) {
      console.log(proteinString.uniprotId);
      console.log(indices.join(' '));
    }
  });


  timing.printInfo();
});


