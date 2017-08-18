"use strict";

let Handlebars = require('hbsfy/runtime'),
tpData = require('./database.js'),
tpEventList = require('./eventlistener.js'),

areaTemplate = require('../templates/area-grid.hbs'),
descriptionTemplate = require('../templates/description.hbs'),
descHeaderTemplate = require('../templates/desc-header.hbs'),

welcomeTemplate = require('../templates/welcome.hbs'),
welcomeData = require('../templates/welcome-data.js');



// Handlebars.registerPartial('footer', require ('../templates/partials/footer.hbs'));
console.log("welcomedata", welcomeData);
$('#welcome').append(welcomeTemplate(welcomeData));

//Plugging in the AREA template cards for the Area divs
function populateAreas(areaData){
    console.log("poparea is running");
    let newAreaDiv = document.createElement("div");
    newAreaDiv.innerHTML = areaTemplate(areaData);
    $('#areaCont').html(newAreaDiv);
    console.log($('#areaCont'));
}

//Plugging in the information for the Desctription Area
function populateDescription(descData){
    console.log("descData, pop description is running", descData);
    let newDescriptionDiv = document.createElement("div");
    newDescriptionDiv.innerHTML = descriptionTemplate(descData);
    $('#descriptionArea').html(newDescriptionDiv);
    console.log($('#descriptionArea'));
}

function populateHeader(descHeader){
    console.log("descHeader function is running", descHeader);
    let newDescHeaderDiv = document.createElement("div");
    newDescHeaderDiv.innerHTML = descHeaderTemplate(descHeader);
    $('#secondTarget').html(newDescHeaderDiv);

    console.log('descHeader function is complete');

}



//This is us calling the XHR-requests that we set up in our Database.js
tpData.loadAreas()
.then(
    (areaFromDatabase) => {
        console.log("area from database", areaFromDatabase);
        populateAreas(areaFromDatabase);
        highFunc();
        addShowDesc();
        // addHideDesc();
        console.log("tpEventList", tpEventList);
    }
);

// tpData.loadAttractions()
// .then(
//     (attr) => {
//         console.log("hey LOLLLLLLSSSS", attr);
//     });


function highFunc(){
    console.log("I am running");
    $(".area").on('click', function(){
        $('#descriptionArea').slideDown('slow');
        $(this).toggleClass('highlight');
        
        var me = $(this).children();
        console.log("look at me", me.html());
        var you = me.html();


        console.log("this id", $(this).attr("id").slice(6));

        let areaId = parseInt($(this).attr("id").slice(6));

        console.log("areaID", typeof areaId);

        tpData.loadAttractions(areaId)
        .then((attractions) => {
            console.log("this is in TPData.loadattractions", attractions);
            populateHeader(you);
            populateDescription(attractions);
            addShowDesc();
            // addHideDesc();

            
        });

        

        console.log("I ran");

        populateHeader(you);

        // populateDescription($(this).text());
        console.log($(this).text());
    });

}

function addShowDesc(){
    console.log("addShowDesc start");
    $('h4').on('click', function(){
        // if ($(this).children().hasClass('breadcrumb')) {

        //     $(this).siblings().toggleClass('hidden breadcrumb');


            
        // } else {

        //     console.log('let this work please');
        //     // $(this).siblings().toggleClass('hidden breadcrumb');
        //     $('#togAttrDesc').children().toggleClass('hidden breadcrumb');
        // }


        $(this).siblings().toggleClass('hidden breadcrumb');

        // // $(this).siblings().accordion();
        
    });

}


// $( "#clickme" ).click(function() {
//   $( "#book" ).slideToggle( "slow", function() {
//     // Animation complete.
//   });
// });


// function addHideDesc(){
//     console.log("addHideDesc start");
//     $('h4').on('focusout', function(){
//         console.log("woof");

//         $(this).siblings('.breadcrumb').toggleClass('hidden');

//         console.log("bowowoooowoowoowwoo");
        
//     });

// }



