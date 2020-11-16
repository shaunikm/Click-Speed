var stopped = false;
var playing = false;
var clickCount = 0;
// "if statement" variables (used in if statements and display)

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, 1000));
}

async function start() {
  if (playing === true) {
    return
  }

  var strCheck = document.getElementById("custom_second").value;
  var timeGiven = parseInt(document.getElementById("custom_second").value, 10);
  var isTimeGiven = (strCheck.length > 0)
  // input validation & updating text

  playing = true;
  stopped = false;

  if (timeGiven == 0 || document.getElementById("custom_second").value == "") {
    return 
    // end function if input is not "countable"
  }

  document.getElementById("clicker").innerHTML = "Click";
  document.getElementById("clicker").style = "font-size: 75px; padding: 40px 50px";
  document.getElementById("custom_second").value = "";
  document.getElementById("clickcounter").innerHTML = "0 clicks";

  for (current=0; current<=parseInt(timeGiven)-1; current=current+1) {
    if (stopped === true) {
      stopped = false; // reset the stop button so it doesn't stop forever
      clickCount = 0;

      document.getElementById("time").innerHTML = "Stopped";
      document.getElementById("clicker").innerHTML = "";
      document.getElementById("clicker").style = "font-size: 75px; padding: 0px 0px";
      return 
      // happens if the stop button has been pressed
    }
    document.getElementById("time").innerHTML = timeGiven - (current);
    await sleep(1000);
    // wait one second (1000 milliseconds) and show countdown
  }
  
  if (isTimeGiven === true) {
    document.getElementById("time").innerHTML = "Time's up!";
  }

  document.getElementById("clickcounter").innerHTML = clickCount + " clicks/" + timeGiven + " seconds";
  document.getElementById("clicker").innerHTML = "";
  document.getElementById("clicker").style = "font-size: 75px; padding: 0px 0px";
  
  clickCount = 0;
  playing = false;
}

function stop() {
  stopped = true;
  playing = false;
  // set "if statement" variables to false and stop counting
}

function addClick() {
  if (playing === true) {
    clickCount = clickCount + 1;

    document.getElementById("clickcounter").innerHTML = clickCount + " clicks";
  }
}