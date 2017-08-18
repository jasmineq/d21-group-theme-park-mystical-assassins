"use strict";

let Handlebars = require('hbsfy/runtime'),
tpData = require('./database.js'),
tpEventList = require('./eventlistener.js'),
footerData = require('./footer.js'),
searchBar = require('./searchbar.js'),

areaTemplate = require('../templates/area-grid.hbs'),
descriptionTemplate = require('../templates/description.hbs'),
descHeaderTemplate = require('../templates/desc-header.hbs'),

welcomeTemplate = require('../templates/welcome.hbs'),
welcomeData = require('../templates/welcome-data.js');

let currentTarget = null;


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
        // time8Stamperoo();
        // time9Stamperoo();
        // time10Stamperoo();
        // time11Stamperoo();
        // time12Stamperoo();
        // time1Stamperoo();
        // time2Stamperoo();
        // time3Stamperoo();
        // time4Stamperoo();

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
            time8Stamperoo();
            time9Stamperoo();
            time10Stamperoo();
            time11Stamperoo();
            time12Stamperoo();
            time1Stamperoo();
            time2Stamperoo();
            time3Stamperoo();
            time4Stamperoo();
            
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


        
        console.log("currentTarget", currentTarget);

        if (currentTarget === null) {

            //     $(this).siblings().toggleClass('hidden breadcrumb');

            $(this).siblings().toggleClass('hidden breadcrumb');
           
            currentTarget = $(this);
        
            console.log("currentTarget", currentTarget);

        } else {

            console.log("the else statement is working");
            //     console.log('let this work please');
            //     // $(this).siblings().toggleClass('hidden breadcrumb');
            //     $('#togAttrDesc').children().toggleClass('hidden breadcrumb');
            // }
            currentTarget.siblings().toggleClass('hidden breadcrumb');
            console.log("first toggle");
            currentTarget = $(this);
            currentTarget.siblings().toggleClass('hidden breadcrumb');


        // // $(this).siblings().accordion();
        }

    });
}


function time8Stamperoo(){
    $('#8').on('click', function(){
        console.log("#8");



    });
}

function time9Stamperoo(){
    $('#9').on('click', function(){
        console.log("#9");


    });
}

function time10Stamperoo(){
    $('#10').on('click', function(){
        console.log("#10");


    });
}

function time11Stamperoo(){
    $('#11').on('click', function(){
        console.log("#11");
        

    });
}

function time12Stamperoo(){
    $('#12').on('click', function(){
        console.log("#12");

    });
}

function time1Stamperoo(){
    $('#1').on('click', function(){
        console.log("#1");

    });
}

function time2Stamperoo(){
    $('#2').on('click', function(){
        console.log("#2");

    });
}

function time3Stamperoo(){
    $('#3').on('click', function(){
        console.log("#3");

    });
}

function time4Stamperoo(){
    $('#4').on('click', function(){
        console.log("#4");

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



