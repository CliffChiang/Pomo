let interval;
let pomo_length;
let original;
function submit(resume) {
    /*
    * Perform the following on the element with id "pomo_length":
    *   - Get the innerHTML of the element
    *   - Alert the user if the innerHTML is a decimal
    *   - Otherwise, for each second, decrement the innerHTML of hrs:min:sec by 1 sec. Also, set min to pomo_length
    */
    pomo_length = Number.parseFloat(document.getElementById("pomo_length").value);
    if (pomo_length % 1 != 0) {
        alert("Please enter a whole number!");
        return;
    }
    else {
        
        // Set the innerHTML of msg to "Timing... Please concentrate!"
        var msg = document.getElementById("msg");
        msg.innerHTML = "Timing... Please concentrate!";
        // Set the class of msg to "text-primary"
        msg.className = "text-primary";
        var hrs = document.getElementById("hrs");
        var min = document.getElementById("min");
        var sec = document.getElementById("sec");
        // Initialize hrs:mins:sec to pomo_length mins
        if (!resume) {
            hrs.innerHTML = (Math.floor(pomo_length / 60)).toString(10);
            min.innerHTML = (pomo_length % 60).toString(10);
            sec.innerHTML = "00";
        }
        var a = Number.parseInt(hrs.innerHTML);
        var b = Number.parseInt(min.innerHTML);
        var c = Number.parseInt(sec.innerHTML);
        // Always let a, b, c be 2 digits long (append "0" at front)
        if (a < 10) {
            hrs.innerHTML = "0" + a.toString(10);
        }
        else {
            hrs.innerHTML = a.toString(10);
        }
        if (b < 10) {
            min.innerHTML = "0" + b.toString(10);
        }
        else {
            min.innerHTML = b.toString(10);
        }
        if (c < 10) {
            sec.innerHTML = "0" + c.toString(10);
        }
        else {
            sec.innerHTML = c.toString(10);
        }
        original = document.body.innerHTML;
        // if interval is already present, tell the user that they are already executing the timer, cannot resume again
        if (interval) {
            alert("You are already executing the timer. Please stop the timer before resuming.");
            return;
        }
        // show pause button
        document.getElementById("pause").style.display = "inline";
        // show resume button
        document.getElementById("resume").style.display = "inline";
        // hide start button
        document.getElementById("start").style.display = "none";
        // Show reset button
        document.getElementById("reset").style.display = "inline";
        interval = setInterval(function () {
            var a = Number.parseInt(hrs.innerHTML);
            var b = Number.parseInt(min.innerHTML);
            var c = Number.parseInt(sec.innerHTML);
            // Always let a, b, c be 2 digits long (append "0" at front)
            if (a < 10) {
                hrs.innerHTML = "0" + a.toString(10);
            }
            else {
                hrs.innerHTML = a.toString(10);
            }
            if (b < 10) {
                min.innerHTML = "0" + b.toString(10);
            }
            else {
                min.innerHTML = b.toString(10);
            }
            if (c < 10) {
                sec.innerHTML = "0" + c.toString(10);
            }
            else {
                sec.innerHTML = c.toString(10);
            }
            if (sec.innerHTML == "0" && min.innerHTML == "0" && hrs.innerHTML == "0") {
                clearInterval(interval);
            }
            else {
                // Decrement hrs:min:sec by 1 sec
                sec.innerHTML -= 1;
                if (sec.innerHTML < 0) {
                    min.innerHTML -= 1;
                    sec.innerHTML = 59;
                }
                if (min.innerHTML < 0) {
                    hrs.innerHTML -= 1;
                    min.innerHTML = 59;
                }
            }

        }, 1000);
    }
}
function pause() {
    /*
    * Clear the interval
    */
    clearInterval(interval);
    interval = null;
}
function reset() {
    pause();
    document.body.innerHTML = original;
    // Set the innerHTML of msg to "Enjoy!"
    var msg = document.getElementById("msg");
    msg.innerHTML = "Enjoy!";
    // Set the class of msg to "text-danger"
    msg.className = "text-danger";
}