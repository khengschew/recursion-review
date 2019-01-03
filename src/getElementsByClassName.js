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

  // If tempElement.classList contains className
  if (tempElement[0].classList && tempElement[0].classList.contains(className)) {
    tempArr.push(tempElement[0]);
  }

  // If element has no children, and 'tempElement' is of length 1
  if (tempElement.length <= 1 && tempElement[0].childNodes.length === 0) {
    return tempArr;
  }

  // RECURSIVE CASE
  // Push to temp array
  // return temp array concatenate recursive results from children, and other elements;
  return tempArr
    .concat(getElementsByClassName(className, tempElement[0].childNodes))
    .concat(getElementsByClassName(className, tempElement.slice(1)));

  // return tempArr;
};
