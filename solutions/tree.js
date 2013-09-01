/**
 * Rosalind Problem - Completing a Tree
 * by Øyvind Ingvaldsen <oyvind.ingvaldsen@gmail.com>
 *
 * http://rosalind.info/problems/tree/
 *
 * [SLOW SOLUTION!]
 *
 * Problem:
 *  Given - A positive integer n <= 1000 and an adjencency list corresponding to a graph on n nodes that contains no cycles. 
 *  Return - The minimum number of edges that can be added to the graph to produce a tree.
 *
 * Terms:
 *  Tree of Life - The abstract notion that all life forms in Earth have branched out from a single common ancestor as a result of the differentiating power of evolution.
 *  Taxon - A collection of organisms formed into a unit for the purpose of phylogenetic analysis.
 *  Phylogeny - A tree modeling the evolutionary scenario deriving a collection of taxa from the proposed ancestor.
 *  Connected - A graph in which there exists a path between any two nodes.
 *  Tree - A connected graph containing no cycles.
 *  Leaf - A node in a tree having degree equal to 1.
 *  Internal node - A node of a tree having degree at least 2.
 */

var timing = require('../util/timing');
var fs = require('fs');
var graphviz = require('graphviz');

var data = fs.readFileSync('../datasets/rosalind_tree.txt', 'utf-8');
var dataSplitted = data.trim().split('\n');
var n = dataSplitted.shift();

var nodes = [];
var edges = [];

for(var i = 1; i <= n; i++) {
  nodes.push({ name: i.toString(), data: i, adjacent: [] }); 
}

for(var i = 0; i < dataSplitted.length; i++) {
  var edge = { 
    v: getNode(dataSplitted[i].split(' ')[0]), 
    w: getNode(dataSplitted[i].split(' ')[1])
  };
  edge.v.adjacent.push(edge.w);
  edge.w.adjacent.push(edge.v);
  edges.push(edge);
}

function getNode(name) {
  var n = null;
  nodes.forEach(function(node) {
    if(node.name == name) {
      n = node;
    }
  });
  return n;
}

function connect(v, w) {
  edges.push({ v: v, w: w });
  v.adjacent.push(w);
  w.adjacent.push(v);
}

function traverse(node, cb, visited) {
  visited = visited || [];
  visited.push(node);
  cb(node);
  node.adjacent.forEach(function(n1) {
    var isVisited = false;
    visited.forEach(function(n2) {
      if(n1 === n2) {
        isVisited = true;
      }
    });

    if(!isVisited) {
      traverse(n1, cb, visited);
    }
  });
}

function isConnected(v, w) {
  var connected = false;
  traverse(v, function(node) {
    if(node === w) {
      connected = true; 
    }
  });
  return connected;
}

var requiredConnections = 0;
for(var i = 0; i < nodes.length - 1; i++) {
  if(!isConnected(nodes[i], nodes[i + 1])) {
    requiredConnections += 1;
    connect(nodes[i], nodes[i + 1]);
  }
}
console.log(requiredConnections);

/** Graphing
var graph = graphviz.graph('G');
nodes.forEach(function(node) {
  graph.addNode(node.name, { shape: 'circle', height: 1 });
});
edges.forEach(function(edge) {
  graph.addEdge(edge.v.name, edge.w.name);
});
graph.output('png', '../graphs/tree.png');
**/

timing.printInfo();
