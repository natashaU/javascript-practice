//Exercise 9: Magic 8-ball
// //Create a Magic 8-ball that prompts the user to ask a question.
//When the user enters a request, randomly select a reply from an array of appropriately vague stock phrases, and alert it to the user.


var words = ["It is quite possible", "that doesn't seem likely", "It might happen", "Ask Again"]

while (!user_choice) {
var user_choice = prompt("Ask A Question")

var rand = Math.floor(Math.random() * words.length)

  if (rand === 0) {
  	console.log(words[0])
  } else if (rand === 1) {
  	console.log(words[1])
  } else if (rand === 2 ) {
  	console.log(words[2])
  } else if (rand === 3) {
  	console.log(words[3])
  }
}
