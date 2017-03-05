
var uutinen = 0;
var paused = false; 


function display() {
   'use strict';
    $.getJSON("https://vesinum1.firebaseio.com/uutiset.json", function (data) {
        $('#elem1').html(data[uutinen].otsikko);
        $('#elem2').html(data[uutinen].sisältö);
        $('#elem3').html(data[uutinen].päivämäärä);
    }); 
}

function nextSlide() {
    'use strict';
    if(uutinen === 0||uutinen == 1) {
        uutinen += 1;
    } else {
        uutinen = 0;
    }
    $(".elementit").slideUp("fast");
    $(".elementit").slideDown();
    localStorage.setItem('indeksi',uutinen);
    display();
}

function previousSlide() {
    'use strict';
    if(uutinen == 2||uutinen == 1) {
        uutinen -= 1;
    } else {
        uutinen = 2;
    }
    $(".elementit").slideUp("fast");
    $(".elementit").slideDown();
    localStorage.setItem('indeksi',uutinen);
    display();
}

function pauseSlide() {
    if(!paused) {
    clearInterval(switchAt);
    $("#pause").text("Play");
    paused = true;
    } else {
        switchAt = window.setInterval(function() {
            nextSlide()},4000);
        $("#pause").text("Pause");
        paused = false;
    }
}

var switchAt = window.setInterval(function() {
    nextSlide()},4000);

window.onload = function () {
    if(!(localStorage.getItem('indeksi') === null)) {
        uutinen = parseInt(localStorage.getItem('indeksi'));
    }
    display();
    switchAt();
};

