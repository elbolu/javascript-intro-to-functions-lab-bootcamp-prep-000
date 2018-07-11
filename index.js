function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
 console.log('HELLO')
}
function logWhisper(string) {
  console.log('hello')
}
function sayHiToGrandma(string) {
if (string === string.toLowerCase()) {
  return "I can\'t hear you!"
<<<<<<< HEAD
} else if (string === string.toUpperCase()) {
=======
} else if (string === string.toUppercase()) {
>>>>>>> 113d915fd5a6c9c153c1b1f623809c2cdfc8be5b
  return "YES INDEED!"}
  else if (string === "I love you, Grandma.") {
  return "I love you, too."}
}