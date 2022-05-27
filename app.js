let interval;
let pomo_length;
let original;
function submit(resume) {
    pomo_length = Number.parseFloat(document.getElementById("pomo_length").value);
    if (pomo_length % 1 != 0) {
        alert("Please enter a whole number!");
        return;
    }
    else {
        var msg = document.getElementById("msg");
        msg.innerHTML = "Timing... Please concentrate!";
        msg.className = "text-primary";
        var hrs = document.getElementById("hrs");
        var min = document.getElementById("min");
        var sec = document.getElementById("sec");
        if (!resume) {
            hrs.innerHTML = (Math.floor(pomo_length / 60)).toString(10);
            min.innerHTML = (pomo_length % 60).toString(10);
            sec.innerHTML = "00";
        }
        var a = Number.parseInt(hrs.innerHTML);
        var b = Number.parseInt(min.innerHTML);
        var c = Number.parseInt(sec.innerHTML);

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

        if (interval) {
            alert("You are already executing the timer. Please stop the timer before resuming.");
            return;
        }

        document.getElementById("pause").style.display = "inline";
        document.getElementById("resume").style.display = "inline";
        document.getElementById("start").style.display = "none";
        document.getElementById("reset").style.display = "inline";
        interval = setInterval(function () {
            var a = Number.parseInt(hrs.innerHTML);
            var b = Number.parseInt(min.innerHTML);
            var c = Number.parseInt(sec.innerHTML);

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
    clearInterval(interval);
    interval = null;
}
function reset() {
    pause();
    document.body.innerHTML = original;
    var msg = document.getElementById("msg");
    msg.innerHTML = "Enjoy!";
    msg.className = "text-danger";
}