// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // BASE CASE 
  
  // if typof of 'obj' is 'string' or 'boolean' 
  // return '"' + obj + '"'
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }

  // of 'obj' === 'null'
  // return 'null'
  if (obj === null) {
    return 'null';
  }

  // Primitives
  // Numbers
  // Strings
  // Booleans
  // Undefined
  // Null 
  // Special (NaN, -Infinity, Infinity)

  // RECURSIVE CASE 
  // Arrays
  // If array is array
  // return recursive call on element
  if (Array.isArray(obj)) {
    var tempArr = [];

    obj.forEach(function(value) {
      tempArr.push(stringifyJSON(value));
    });

    return '[' + tempArr.toString() + ']';
  }

  // Objects
  if (typeof obj === 'object') {
    var tempArr = [];
    // Retrieve object keys
    var keys = Object.keys(obj);

    // Loop through each object key
    // For each key, retrieve value
    // Generate key-value string, separated by ':'
    // Push string into temp array
    for (var i = 0; i < keys.length; i++) {
      var tempVal = obj[keys[i]];
      tempArr.push(stringifyJSON(keys[i]) + ':' + stringifyJSON(tempVal));
    }

    // Return stringified temp array, with '{', '}' at end
    return '{' + tempArr.toString() + '}';
  }

  return undefined;
};
