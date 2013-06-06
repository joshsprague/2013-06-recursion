// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  //Based mostly on git repo of same problem by michaelglenadams
  var results = ""; 
  var type = typeof obj;
  
  //Check type to handle formatting for each key value variation
  if (type == 'number' || type == 'boolean') {
  	results += String(obj);
  }

  else if (type == 'string') {
  	results += regExpConversion(obj);
  }

  else if (type == undefined) {
  	results += undefined;
  }

  else if (type == null) {
  	results += 'null';
  }

  else if (Array.isArray(obj)) {
  	var items = [];
  	for (var i = 0; i < obj.length; i++) {
  		items.push(stringifyJSON(obj[i]));
  	}
  	results = results.concat('[', items, ']');
  }

  else if (type == 'object') {
		
	  var pairs = [];
	  //need to take a key and a value and put quotes around them, returning as an object of key/value pairs;

	  //how to get obj key:
	  //obj[1] = value of first pair
	  //obj["key"] = "value";
	  //make the key variable equal a string
	  //probably have to do this as a regExp like the last one

	  for (key in obj) {
	  	pairs.push(regExpConversion(key) + ':' + regExpConversion(obj[key]));
	  }

	  //can join pairs with .join(',') then concat the curly braces
	  pairs = pairs.join(',');
	  results = results.concat('{' , pairs , '}');

	  //var key = new RegExp("(^|\\s)" + obj[1] + "(\\s|$)");  	
  }
 
  return results;
};

//create a function to format key value pairs via regular expression
var regExpConversion = function(item) {
	var escapeOne = item.replace(/\\/g, '\\\\');
	//find quotes and escape them
	var escapeTwo = '"' + escapeOne.replace(/\"/g, '\\"') + '"';

	return escapeTwo;
}
