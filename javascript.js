var halfInput = document.getElementById("half-input");
var halfButton = document.getElementById("half-button");


halfButton.addEventListener("click", halfNumber);

function halfNumber() {

  var inputNum = halfInput.value;
  var outputNum = inputNum/2;

    function restyle2 () {
      document.getElementById("title2").style.fontSize = "3vmin";
      document.getElementById("title2").style.color = "white";
      document.getElementById("title2").style.textShadow = "0 0 2vmin white";

      // fortuneButton.style.width = "20vmin";
      fortuneButton.style.fontSize= "2.5vmin";
      fortuneButton.style.color= "white";
      fortuneButton.style.boxShadow= " 0 0 2vmin white";
    }
  if (inputNum == "") {
    alert("Please enter the number.")
  } else {

    alert("Half of "+ inputNum + " "+ "is "+ outputNum);
    console.log("Half of "+ inputNum + " "+ "is "+ outputNum);
    restyle2();
    // document.getElementById("title2").style.fontSize = "3vmin";
    // document.getElementById("title2").style.color = "white";
    // document.getElementById("title2").style.textShadow = "0 0 2vmin white";
    //
    // // fortuneButton.style.width = "20vmin";
    // fortuneButton.style.fontSize= "2.5vmin";
    // fortuneButton.style.color= "white";
    // fortuneButton.style.boxShadow= " 0 0 2vmin white";
  }
}

/////////////////////////////
var fortuneButton = document.getElementById("fortune-button");

var fortuneText = ["Don’t be afraid to take the plunge.",
                  "No one can make you feel inferior without your consent.",
                  "He who laughs last is laughing at you.",
                  "We don't know the future, but here's a cookie.",
                  "The world may be your oyster, but it doesn't mean you'll get its pearl."]

 var randomFortuneText= Math.floor (Math.random()*fortuneText.length);


 fortuneButton.addEventListener("click", fortune);

function fortune () {

  var fortuneInput = document.getElementById("fortune-input").value;

  function restyle() {
    document.getElementById("title2").style.fontSize = "1em";
    document.getElementById("title2").style.color = "#bbb1e3";
    document.getElementById("title2").style.textShadow = "none";

    // fortuneButton.style.width = "20vmin";
    fortuneButton.style.fontSize= "2vmin";
    fortuneButton.style.color= "#211940";
    fortuneButton.style.boxShadow= " none";
  }

  if (fortuneInput == "") {
    alert("Please enter you name.")
  } else {
    alert("Dear "+ fortuneInput +", "+ fortuneText[randomFortuneText]);
    restyle();
    // document.getElementById("title2").style.fontSize = "1em";
    // document.getElementById("title2").style.color = "#bbb1e3";
    // document.getElementById("title2").style.textShadow = "none";
    //
    // // fortuneButton.style.width = "20vmin";
    // fortuneButton.style.fontSize= "2vmin";
    // fortuneButton.style.color= "#211940";
    // fortuneButton.style.boxShadow= " none";

  }
}
//////////////////////////////

// halfButton.addEventListener("click", changeToFortune);
//
//
// function changeToFortune() {
//   document.getElementById("title2").style.fontSize = "3vmin";
//   document.getElementById("title2").style.color = "white";
//   document.getElementById("title2").style.textShadow = "0 0 2vmin white";
//
//   // fortuneButton.style.width = "20vmin";
//   fortuneButton.style.fontSize= "2.5vmin";
//   fortuneButton.style.color= "white";
//   fortuneButton.style.boxShadow= " 0 0 2vmin white";
//
// }

// fortuneButton.addEventListener("click", changeToHalf);
//
// function changeToHalf () {
//   document.getElementById("title").style.fontSize = "3vmin";
//   document.getElementById("title").style.color = "white";
//   document.getElementById("title").style.textShadow = "0 0 2vmin white";
//
//   // fortuneButton.style.width = "20vmin";
//   halfButton.style.fontSize= "2.5vmin";
//   halfButton.style.color= "white";
//   halfButton.style.boxShadow= " 0 0 2vmin white";
