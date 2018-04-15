var control_forward = function() {
    var r = new XMLHttpRequest();
    r.open("GET", "/api/control/forward");
    r.send();
    reset_color();
    document.getElementById("forward-button").style.backgroundColor = "rgb(234, 250, 241)";
};

var control_reverse = function() {
    var r = new XMLHttpRequest();
    r.open("GET", "/api/control/reverse");
    r.send();
    reset_color();
    document.getElementById("reverse-button").style.backgroundColor = "rgb(234, 250, 241)";
};


var control_left = function() {
    var r = new XMLHttpRequest();
    r.open("GET", "/api/control/left");
    r.send();
    reset_color();
    document.getElementById("left-button").style.backgroundColor = "rgb(254, 249, 231)";
};

var control_right = function() {
    var r = new XMLHttpRequest();
    r.open("GET", "/api/control/right");
    r.send();
    reset_color();
    document.getElementById("right-button").style.backgroundColor = "rgb(254, 249, 231)";
};

var control_stop = function() {
    var r = new XMLHttpRequest();
    r.open("GET", "/api/control/stop");
    r.send();
    reset_color();
    document.getElementById("stop-button").style.backgroundColor = "rgb(242, 243, 244)";
};

var reset_color = function() {
    document.getElementById("forward-button").style.backgroundColor = "white";
    document.getElementById("left-button").style.backgroundColor = "white";
    document.getElementById("right-button").style.backgroundColor = "white";
    document.getElementById("stop-button").style.backgroundColor = "white";
    document.getElementById("reverse-button").style.backgroundColor = "white";
};

var forward = false;
var left = false;
var right = false;
var reverse = false;

document.getElementById("forward-button").onmousedown = function() {
    if (!forward) {
        control_forward();
        forward = true;
    }
};

document.getElementById("reverse-button").onmousedown = function() {
    if (!forward) {
        control_forward();
        reverse = true;
    }
};

document.getElementById("left-button").onmousedown = function() {
    if (!left) {
        control_left();
        left = true;
    }
};

document.getElementById("right-button").onmousedown = function() {
    if (!right) {
        control_right();
        right = true;
    }
};

document.onmouseup = function() {
    forward = false;
    left = false;
    right = false;
    reverse = false;
    control_stop();
};

document.getElementById("forward-button").ontouchstart = function() {
    if (!forward) {
        control_forward();
        forward = true;
    }
};

document.getElementById("left-button").ontouchstart = function() {
    if (!left) {
        control_left();
        left = true;
    }
};

document.getElementById("right-button").ontouchstart = function() {
    if (!right) {
        control_right();
        right = true;
    }
};

document.getElementById("reverse-button").ontouchstart = function() {
    if (!right) {
        control_reverse();
        reverse = true;
    }
};

document.ontouchend = function() {
    forward = false;
    left = false;
    right = false;
    reverse = false;
    control_stop();
};

document.onkeydown = function(e) {
    if (e.keyCode == '37') {
        // left arrow
        if (!left) {
            control_left();
            left = true;
        }
    }
    else if (e.keyCode == '38') {
        // up arrow
        if (!forward) {
            control_forward();
            forward = true;
        }
    }
    else if (e.keyCode == '39') {
        // right arrow
        if (!right) {
            control_right();
            right = true;
        }
    }
        else if (e.keyCode == '40') {
        // down arrow
        if (!right) {
            control_reverse();
            reverse = true;
        }
    }
};

document.onkeyup = function(e) {
    if (e.keyCode == '37') {
        // left arrow
        left = false;
    }
    else if (e.keyCode == '38') {
        // up arrow
        forward = false;
    }
    else if (e.keyCode == '39') {
        // right arrow
        right = false;
    }
    
        else if (e.keyCode == '40') {
        // right arrow
        reverse = false;
    }
    
    if (!left && !forward && !right) {
        control_stop();
    }
};
