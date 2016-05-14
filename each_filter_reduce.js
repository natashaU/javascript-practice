// Exercise: Build your own each function to replace .forEach. Here's some code to get you started:

var arrayEach = function(collection, callback){
  for (var i = 0; i < collection.length; i++){
  	callback(collection[i])
  }
};



//Exercise 2: Adjust your each function to work with objects as well as arrays! Note, you'll want to use a for in loop for objects, and only pass along the value to the callback function.

var each = function(collection, callback){
	if (Array.isArray(collection) === true){
  for (var i = 0; i < collection.length; i++){
  	callback(collection[i])
  }
	} else {
		for (var key in collection) {
			callback(collection[key])
		}
	}
};

// Exercise 3: Call your each function to print out each of these:



var mySea = ["What's", "a", "pirate's", "favorite", "letter?"];

var myObj = {
  name: "object",
  shape: "squircle",
  color: "coquelicot",
  heightInCM: 20.4,
  exists: true
};

each(myObj, function(arg) { console.log(arg) });

arrayEach(mySea, function(arg) { console.log(arg) });

// Exercise: Build your own map function to replace .map. Try using your each function inside of your map function.

var map = function(collection, callback){
	var newArr = [];
  for (var i = 0; i < collection.length; i++){
  	newArr.push(callback(collection[i]))
  }
  return newArr
};

//Exercise 2: Call your map function along with a callback that divides each value in half:

var scores = [100, 200, 300];
map(scores, function(num){return num / 2} );

// Exercise: Build your own filter function to replace .filter. Try using your each function inside of your filter function.

var filter = function(collection, predicate){
	var newArr = [];
	for (var i = 0; i < collection.length; i++){
	if (predicate(collection[i]) === true) {
		newArr.push(collection[i])
	}
  }
  return newArr
};

// Exercise 2: Call your filter function along with a predicate that checks for names longer than 5 characters:


var names = ["Monica", "Erica", "Rita", "Tina", "Sandra", "Mary", "Jessica"];

filter(names, function(str) {
	return str.length > 5
})


// Exercise: Build your own reduce function to replace .reduce. Try using your each function inside of your reduce function

var reduce = function(collection, callback, startValue) {
    var y = startValue || 0
    for (var i = 0; i < collection.length; i++){
  	y = callback(y, collection[i])
  	}
  return y
};

var deposits = [200,400,100,300];
var balance = 1000;

reduce(deposits, function(num, num2){
	return num += num2}, balance)
