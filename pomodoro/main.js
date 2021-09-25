var session_seconds = "00";
var session_minutes = 25;


var click_sound = new Audio("click.mp3");
var bell = new Audio("bell.mp3");

function template() {
    document.getElementById("minutes").innerHTML = session_minutes;
    document.getElementById("seconds").innerHTML = session_seconds;
}

function start_timer(){
    click_sound.play();

    session_minutes = 24;
    session_seconds = 59;

    document.getElementById("minutes").innerHTML = session_minutes;
    document.getElementById("seconds").innerHTML = session_seconds;

    var minutes_interval=setInterval(minutesTimer, 60000);
    var seconds_interval=setInterval(secondsTimer, 1000);

    function minutesTimer() {
        session_minutes = session_minutes - 1;
        document.getElementById("minutes").innerHTML = session_minutes;
    }

    function secondsTimer(){
        session_seconds = session_seconds - 1;
        document.getElementById("seconds").innerHTML = session_seconds;

    if (session_seconds <= 0){
        if (session_seconds <= 0){
            clearInterval(minutes_interval);
        clearInterval(seconds_interval);

        // Add the message to the html
        document.getElementById("done").innerHTML =
          "Session Completed!! Take a Break";

        // Make the html message div visible
        document.getElementById("done").classList.add("show_message");

        // PLay the bell sound to tell the end of session
        bell.play();
      }

      // Reset the session seconds to 60
      session_seconds = 60;
    }
  }
}

