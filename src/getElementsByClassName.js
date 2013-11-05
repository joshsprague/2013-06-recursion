// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
 /* var node = document;
  var results = [];
  var testClass = new RegExp("(^|\\s)" + className + "(\\s|$)");
  var test;
  var iterateDOMTree = function(node) {
  	for (node = node.firstChild; node !== null; node = node.nextSibling) {
  		test = node;
  		if(testClass.test(test.className)) {
  			results.push(test);
  		}
  	}
  	iterateDOMTree(node);
  };
  iterateDOMTree(node);
  return results;
  //based on Snook-Ryman's Ultimate getElementsByClassName
/*  	var nodes = document.all;
	var results = [];
	var testClass = new RegExp("(^|\\s)" + className + "(\\s|$)");
	var test;
	for(var i = 0; i < nodes.length; i++){
	    test = nodes[i];      
	    if(testClass.test(test.className)){
	        results.push(test);
	    }  
	}
	return results;*/
  
var searchDomTree = function(initialNode, result) {
      var result = result || [];
      initialNode = initialNode || document.body;
     
      _.each(initialNode.childNodes, function(node) {
        
        if (node.childNodes) {
          return searchDomTree(node, result);
        }
      });
  };
 
  searchDomTree();


};

