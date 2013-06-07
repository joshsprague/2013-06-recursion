// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function (json) {
  // your code goes here
  //need to take in an object and return back without malformed content
  //Takes a JSON string and converts it to a Javascript object


  //Had to reference crockford to figure out solution
  //Crockford's approach is to create a walker function up front
  //This gets called after running the json string through several stages
  var j;
  var result;
  //initial holder and key are '':j} and just ''
  //the j is eval('(' + text + ')')
  // '':(text)}['']
  function walk(holder, key) {
  	var k;
  	var v;
  	var value = holder[key];

  	if (value && typeof value === 'object') {
  		for (k in value) {
  			if (Object.prototype.hasOwnProperty.call(value, k)) {
  				v = walk(value, k);
  				if (v !== undefined) {
  					value[k] = v;
  				} 

  				else {
  					delete value[k];
  				}
  			}
  		}
  	}
  	return result.call(holder, key, value); //do this without his reviver option
  }
  
  var text = String(json);


  //Crockford lays out four stages to solving
  //First stage involves replacing certain Unicode chars with escape sequences
  //This is to fix places where JS handles them incorrectly
  //However, didn't need that level of detail for this pass

  //2nd stage split into 4 regexp operations
  //First, replace backslash pairs with a non-JSON character (@)
  //Second, replace simple value tokens with ']'
  //Third, delete open brackets that come after colons, commas or begin w/ text
  //Fourth, check that only characters are ending bracket, commas, colons or curly braces
  //After all that, it can proceed to the walker

  	if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
  	j = eval('(' + text + ')'); //wrap text in parends to eliminate ambiguity of '{'
  	
  	//walks result through all key value pairs
  	return typeof result === 'function'
                    ? walk({'': j}, '')
                    : j;
	}

	//gives error if text is not parseable

	throw new SyntaxError('JSON.parse');

};
