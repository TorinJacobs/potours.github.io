// make an alert so i know this page is connected
// alert ("this page is connected")  

// creating a function that takes in <td> (location)
// and it turns that <td>'s inner HTML into an emomji
var blueberry = Math.floor(Math.random() * 9)
var coconut = Math.floor(Math.random() * 9)
var camel = Math.floor(Math.random() * 9)
const emojiMaker = (id) => {
  if(blueberry === id){
      document.getElementById(id).innerHTML = "🫐"
      alert("You won")
  } else if (coconut === id){
      document.getElementById(id).innerHTML = "🥥"
      alert("Better luck next time")
  } else {
      document.getElementById(id).innerHTML = "🐫"
  }
}