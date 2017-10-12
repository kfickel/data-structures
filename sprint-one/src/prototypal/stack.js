var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);

  window.storage = {};
  window.count = 1;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = value => {
  
  if (count in storage) { count++; }
  storage[count] = value;
};

stackMethods.pop = () => {
  var keys = Object.keys(storage);
  var values = Object.values(storage);

  if (keys.length) {
    delete storage[keys[keys.length - 1]];
  }

  if (values.length) {
    return values[values.length - 1];
  }
};

stackMethods.size = () => {

  var keys = Object.keys(storage);
  return keys.length;
};



