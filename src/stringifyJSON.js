// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  var results = [];
  var pairs = [];
  //need to take a key and a value and put quotes around them, returning as an object of key/value pairs;

  //how to get obj key:
  //obj[1] = value of first pair
  //obj["key"] = "value";
  //make the key variable equal a string
  //probably have to do this as a regExp like the last one

  for (key in obj) {
  	pairs.push('"' + key + ":" + obj[key]);
  }

  //can join pairs with .join(',') then concat the curly braces
  pairs = pairs.join(',');
  results = results.concat('{' , pairs , '}');

  //var key = new RegExp("(^|\\s)" + obj[1] + "(\\s|$)");

  
  return obj;
};
