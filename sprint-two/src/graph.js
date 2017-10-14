

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //add a key of node value to the graph object
  //set the value of key to an object
  //create properties for the object
  // key node: node imput
  // key edge: array
  this[node] = { node: node, edge: [] };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //create array of the node values
  var keys = Object.keys(this);
  //if array include node input return true else false
  return keys.includes(node.toString());
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //iterate through the keys
  for (var key in this) {
    //see if the key is in the graph obj
    //delete object key
    if (key === node.toString()) {
      delete this[key];
    }
  }
  for (var keys in this) {
    if (this[keys].hasOwnProperty('edge')) {

      var edges = this[keys].edge;
      //iterate through edges
      for (var i = 0; i < edges.length; i++) {
        //see if object's key edges are equal to node value & delete if present
        if (edges[i] === node) { edges.splice(i, 1); }
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //iterate through the keys
  for (var key in this) {
    //if key equals fromNode
    if (key === fromNode.toString()) {
      //iterate through respective edge array
      var edges = this[key].edge;
      for (var i = 0; i < edges.length; i++) {
      //if element in edge array equal toNode return true else false
        if (edges[i] === toNode) {
          return true;
        }
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //iterate through the keys
  for (var key in this) {
    //if key equals fromNode - push toNode to edge array
    if (key === fromNode.toString()) {
      this[key].edge.push(toNode);
    }
    //if key equals toNode - push fromNode to edge array
    if (key === toNode.toString()) {
      this[key].edge.push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var key in this) {
    var edgeArr = this[key].edge;
    //if key equals fromNode - push toNode to edge array
    if (key === fromNode.toString()) {
      for (var i = 0; i < edgeArr; i++) {
        if (edgeArr[i] === toNode) {
          edgeArr.splice(i, 1);
        }
      }
    }
    //if key equals toNode - push fromNode to edge array
    if (key === toNode.toString()) {
      for (var i = 0; i < edgeArr; i++) {
        if (edgeArr[i] === fromNode) {
          edgeArr.splice(i, 1);
        }
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //iterate through keys
  for (var keys in this) {
    if (this[keys].hasOwnProperty('node')) {
      //call input function with the node value of key
      cb(this[keys].node);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


