var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    list.tail = value;
    var newNode = new Node(value);
    var checkNode = list.head;
    
    if (!checkNode) {
      list.head = newNode;
      return newNode;
    } 

    while (checkNode.next) {
      checkNode = checkNode.next;
    }

    checkNode.next = newNode;
    return newNode;
  };

  list.removeHead = function() {
    //remove the value of list.head
    //set list.head to the next node
    var values = Object.values(list);

    if (list.head) {
      list.head = list.head.next;
    }

    return values[0];
  };

  list.contains = function(target) {
    //returns true or false if target in node
    
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
