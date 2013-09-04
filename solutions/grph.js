/**
 * Rosalind Problem - Overlap Graphs
 * by Øyvind Ingvaldsen <oyvind.ingvaldsen@gmail.com>
 *
 * http://rosalind.info/problems/grph/
 *
 * Problem:
 *  Given - A collection of DNA strings in FASTA format having total length at most 10 kbp.
 *  Return - The adjacency list corresponding to O3. You may return edges in any order.
 *
 * Terms:
 *  Graph - A network containing a collection of nodes, pairs of which are joined by edges.
 *  Node - A point forming the hubs the network represented by a graph.
 *  Edge - A segment or curve connection two nodes in a graph.
 *  Incident - An edge is incident to a node if it connects it to another node.
 *  Adjacent - Nodes in a graph that are connected by an edge.
 *  Degree - The number of edjes incident to a node.
 *  Walk - An ordered collection of adjacent edges in a graph.
 *  Path - A collection of nodes and edges in which each node is connected to the next via an edge.
 *  Path length - The length of a path is its number of edges.
 *  Cycle - A path in a graph that begins and ends with the same node.
 *  Distance - The minimum weight (or length) of any path connecting two nodes.
 *  Adjacency list - A list containing the edges of a graph.
 *  Directed graph (digraph) - A graph whose edges are oriented as arrows.
 *  Directed edge - The oriented edge of a directed graph.
 *  Tail - The starting node of a directed edge.
 *  Head - The ending node of a directed edge.
 *  Directed loop - A directed edge (v, v).
 *  Overlap graph - A directed graph representing overlap relationships in a collection of strings.
 *  Suffix - A substring of a given string that includes its final symbol.
 *  Prefix - A substring of a given string that includes its first symbol.
 */

var timing = require('../util/timing');
var bio = require('../util/bio');
var fs = require('fs');
var graphviz = require('graphviz');

var data = fs.readFileSync('../datasets/rosalind_grph.txt', 'utf-8');
var nodes = bio.parseFASTA(data);
var edges = [];
var k = 3;

nodes.forEach(function(v) {
  var s = v.data;
  nodes.forEach(function(w) {
    var t = w.data;

    if(s !== t && s.slice(s.length - k) === t.slice(0, k)) {
      edges.push({ tail: v, head: w });       
    }

  });
});

edges.forEach(function(edge) {
  console.log(edge.tail.name + ' ' + edge.head.name);
});

/** Graphing
var graph = graphviz.digraph('G');
nodes.forEach(function(node) {
  graph.addNode(node.name, { color: 'green', shape: 'box', style: 'filled' });
});
edges.forEach(function(edge) {
  graph.addEdge(edge.tail.name, edge.head.name, { color: 'blue' });
});
graph.output('png', '../graphs/grph.png');
**/


timing.printInfo();
