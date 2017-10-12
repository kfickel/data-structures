var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);

  someInstance.storage = {};
  someInstance.count = 1;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  
  if (this.count in this.storage) { this.count++; }
  this.storage[this.count] = value;
};

stackMethods.pop = function() {
  var keys = Object.keys(this.storage);
  var values = Object.values(this.storage);

  if (keys.length) {
    delete this.storage[keys[keys.length - 1]];
  }

  if (values.length) {
    return values[values.length - 1];
  }
};

stackMethods.size = function() {

  var keys = Object.keys(this.storage);
  return keys.length;
};



