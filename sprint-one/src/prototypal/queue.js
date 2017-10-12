var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  window.storage = {};
  window.count = 1;  

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = value => {
  if (count in storage) {
    count++;
  }
  storage[count] = value;
};

queueMethods.dequeue = () => {
  var keys = Object.keys(storage);
  var values = Object.values(storage);

  if (keys.length) {
    delete storage[keys[0]];
  }
  if (values.length) {
    return values[0];
  }
};

queueMethods.size = () => {
  var keys = Object.keys(storage);
  
  return keys.length;
};

