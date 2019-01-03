// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, elements) {
  // your code here
  var tempArr = [];
  // var docBody = document.body;

  // // Inner function
  // var recurseElements = function(element) {

  // };

  // tempElement = [document.body] || elements;
  var tempElement = elements || [document.body];

  // BASE CASE
  // If element is an empty array, return empty array
  if (tempElement.length <= 0) {
    return [];
  }

  // RECURSIVE CASE
  // if tempElement[0] has classList && classList contains(x)
  // Push to temp array
  // return temp array concatenate recursive results from children, and other elements;
  
  // If tempElement.classList contains className
  if (tempElement[0].classList && tempElement[0].classList.contains(className)) {
    tempArr.push(tempElement[0]);
  }

  // If tempElement has children
  if (tempElement[0].children) {
    // Recurse by concatenating first element and children
    return tempArr
      .concat(getElementsByClassName(className, tempElement[0].children))
      .concat(getElementsByClassName(className, Array.from(tempElement).slice(1)));
  } else {
    // tempElement doesn't have children, recurse only on remaining elements
    return tempArr
      .concat(getElementsByClassName(className, Array.from(tempElement).slice(1)));
  }
};
