// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
 /* var node = document.all;
  var result = [];
  var searchClass = " " + className + " ";
  var j = 0;
  var iterateDOMTree = function(node) {
  	for (node = node.firstChild; node !== null; node = node.nextSibling) {
  		if (node.getAttribute(className)) {
  			result.push(node);
  		}
  		var test = " " + node.className + " ";
  		if (test.indexOf(searchClass) != -1) {
  			result[j] = node;
  			j++;
  		}
  		iterateDOMTree(node);
  	}
  };
  return document;*/
  	var nodes = document.all;
	var results = [];
	var testClass = new RegExp("(^|\\s)" + className + "(\\s|$)");
	var test;
	for(var i = 0; i < nodes.length; i++){
	    test = nodes[i];      
	    if(testClass.test(test.className)){
	        results.push(test);
	    }  
	}
	return results;
};

