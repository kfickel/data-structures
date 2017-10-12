var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 1;
  
};

Stack.prototype.push = function(value) {
  
  if (this.count in this.storage) { this.count++; }
  this.storage[this.count] = value;
};

Stack.prototype.pop = function() {
  var keys = Object.keys(this.storage);
  var values = Object.values(this.storage);

  if (keys.length) {
    delete this.storage[keys[keys.length - 1]];
  }

  if (values.length) {
    return values[values.length - 1];
  }

};

Stack.prototype.size = function() {
  var keys = Object.keys(this.storage);
  return keys.length;
};
