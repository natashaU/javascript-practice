// eloquent javascript chapter III exercises

// Write a function min that takes two arguments and returns their minimum.
function min (x,y) {
	return Math.min(x,y)
}
console.log(min(0, 10))

// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string

function countBs (string) {
  var sum = 0
for (var i = 0; i < string.length; i++) {
  if (i == "B") {
    return sum += 1
  }
}
}
console.log(countBs("BBC"))
