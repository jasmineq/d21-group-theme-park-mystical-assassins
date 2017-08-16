"use strict";

console.log("evenlistener.js");

/*****Nav Bar*****/

$(document).ready(function() {

    var time = new Date();
    console.log(time);

    
    //Search Bar Enter Event Listener
    let inputAreaFunc = $('#inputArea').keypress(function(event){

        if (event.which == 13) {
            var input = $("#inputArea").val();
            console.log("this is my input", input); 
        }
    });
    


    // $('#A').bind('hover', function(){
    //     $(this).text('The Shire', 5000);
    // });

    // $('.col-sm-4').on


});

function highFunc(){    
    $('h3').on('click', function(){
        $(this).toggleClass('highlight');
        console.log("this", $(this));
        console.log("HEY Friends");
    });
}

module.exports = {highFunc};



//Current time
    //What's open at that current hour 



/*****Time Stamp*****/

//
//11-1
//1-4
//4-7

/******Attraction Description*******/

//Attraction Description 1
//Attraction Description 2
//Attraction Description 3

/*****Map Areas*****/

//Area Div A

//Area Div B

//Area Div C

//Area Div D

//Area Div X

//Area Div E

//Area Div F

//Area Div G

//Area Div H

