/* note:-
The code is not organized and the repeated code
has not been deleted
in order to understand the code in detail,
you can take the code and arrange it
//  the way you want */

// first we will generate the rindom number
var randonNumber = Math.floor(Math.random() * 20) + 1;
var reloadGame = 0;
let counter = 20;
let hightScore = 0;
// now we will get the entered value from user
function getval() {
  var inputnn = document.getElementById("inputNum").value;

  // if the first number greater than seconde then do this code
  if (document.getElementById("inputNum").value == "") {
    document.getElementById("message").innerHTML =
      "You must enter a number😑🤪";
  }

  // if the first number greater than seconde then do this code
  else if (inputnn > randonNumber) {
    // decrese the counter
    counter--;
    var score = (document.getElementById(
      "label-score"
    ).innerHTML = `🏆Score : ${counter}`);
    document.getElementById("message").innerHTML = "You are too far 😥😣";
  } else if (inputnn < randonNumber) {
    counter--;
    var score = (document.getElementById(
      "label-score"
    ).innerHTML = `🏆Score : ${counter}`);
    document.getElementById("message").innerHTML = "You are too closs 😍😱";
  }

  // if the two values are equel then do this code
  else if (inputnn == randonNumber) {
    document.getElementById("message").innerHTML = "you win 🤩🎉🏆";
    document.getElementsByClassName("qMark")[0].innerHTML = randonNumber;
    var score = (document.getElementById(
      "label-score"
    ).innerHTML = `🏆Score : ${randonNumber}`);
    var bodyStyle = document.querySelector("body");
    Object.assign(bodyStyle.style, Styles);

    // highscore function
    if (counter > hightScore) {
      hightScore = counter;
      var highScoreTxt = (document.getElementById(
        "label-highscore"
      ).innerHTML = `🥉 hightScore: ${hightScore}`);
    }

    
  }

  if (counter <= 0) {
    var bodyStyle = document.querySelector("body");
    Object.assign(bodyStyle.style, stylesLoss);
    document.getElementById("message").innerHTML = "😓😈🔥You lost the game";
    counter = 0;
  }
}

var Styles = {
  "background-color": "#19E86E",
  color: "#000",
};

var stylesLoss = {
  "background-color": "red",
  color: "#fff",
};

