var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  //add methods to the Tree class
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //if "newTree".value does not exist
  if (!this.value) {
    //set value to addChild value
    this.value = value;
  }
  //create new tree object
  var newTree = new Tree(value);
  //push an object containing a value and children property
  this.children.push(newTree);

  return this;
};

treeMethods.contains = function(target) {
  //if parent value exists
  if (this.value) {
    //check if value of parent node equal target
    if (this.value === target) { return true; }
    //create varaible for child
    var child = this.children;
    //save boolean from searchAllChild function
    var boolean = false;
    var searchAllChild = function(input) {
       //iterate through each child
      for (var i = 0; i < input.length; i++) {
        //check if value equal target
        if (input[i].value === target) {
          boolean = true;
        }
        //while child.length exists
        if (input[i].children.length) {
          searchAllChild(input[i].children);
        }
      }
    };
    searchAllChild(child);
    return boolean;
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
