var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);
  this.value = value;
  this.left = undefined;
  this.right = undefined;
  return tree;
};

var goLeftOrRight = function(value, currentNode) {
  console.log(currentNode);
  //if value is less than current node value
  if (value < currentNode.value) {  
    //if this left equals null
    if (currentNode.left === undefined) {  
      //return current node;
      return currentNode;
    }  
    //return goLeftOrRight(value, current node left property value)
    console.log(goLeftOrRight(value, currentNode.left));
    goLeftOrRight(value, currentNode.left);
  }
  //if value is greater than current node value 
  if (value > currentNode.value) {  
    //if right equals null
    if (currentNode.right === undefined) {
      // return current node
      return currentNode;
    }
    //return goLeftorRight(value, current node right property value)
    console.log(goLeftOrRight(value, currentNode));
    goLeftOrRight(value, currentNode.right);   
  }
};

BinarySearchTree.prototype.insert = function(value) {
  console.log(this);
  //if value doesn't exists
  if (!this.value) {
    //set node value to value
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  } else {
    // //create new node variable calling binary search tree with input value & current node
    var newNode = BinarySearchTree(value);
    //var finalNode to goLeftOrRight function
    var finalNode = goLeftOrRight(value, this);
      //if finalNode value is less than value
    if (finalNode.value < value) {
      //finalNode.right equals newNode
      finalNode.right = newNode;
    } else {
      //else finalNode.left equals newNode
      finalNode.left = newNode;
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {

};

BinarySearchTree.prototype.depthFirstLog = function(cb) {

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
