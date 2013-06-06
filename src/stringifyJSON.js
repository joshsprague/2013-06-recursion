// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  //Based mostly on git repo of same problem by michaelglenadams
  var results = ""; 
  var type = typeof obj;
  
  //Check type to handle formatting for each key value variation
  if (type === 'string') {
  	results += regExpConversion(obj);
  }

  else if (type === 'number' || type === 'boolean') {
  	results += String(obj);
  }

  else if (obj === null) {
  	results += 'null';
  }

  else if (obj === undefined) {
  	results += undefined;
  }

  else if (Array.isArray(obj)) {
  	var items = [];
  	for (var i = 0; i < obj.length; i++) {
  		items.push(stringifyJSON(obj[i]));
  	}
  	results = results.concat('[', items, ']');
  }

  else if (type === 'object') {
		
	  var pairs = [];
	  //need to take a key and a value and put quotes around them, returning as an object of key/value pairs;
	  //obj["key"] = "value";

	  for (key in obj) {
	  	if (typeof obj[key] === 'function') {
	  		return '{}';
	  	}
	  	pairs.push(regExpConversion(key) + ':' + stringifyJSON(obj[key]));
	  }

	  //can join pairs with .join(',') then concat the curly braces
	  pairs = pairs.join(',');
	  results = results.concat('{' , pairs , '}'); 	
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


