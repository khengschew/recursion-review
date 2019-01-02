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
  // Objects
  // Arrays
  // Nesting
};
