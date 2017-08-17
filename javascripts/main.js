"use strict";

let Handlebars = require('hbsfy/runtime'),
tpData = require('./database.js'),
tpEventList = require('./eventlistener.js'),

areaTemplate = require('../templates/area-grid.hbs'),
descriptionTemplate = require('../templates/description.hbs'),

welcomeTemplate = require('../templates/welcome.hbs'),
welcomeData = require('../templates/welcome-data.js');

// Handlebars.registerPartial('footer', require ('../templates/partials/footer.hbs'));
console.log("welcomedata", welcomeData);
$('#welcome').append(welcomeTemplate(welcomeData));

//Plugging in the AREA template cards for the Area divs
function populateAreas(areaData){
    let newAreaDiv = document.createElement("div");
    newAreaDiv.innerHTML = areaTemplate(areaData);
    $('#areaCont').html(newAreaDiv);
    console.log($('#areaCont'));
}

//Plugging in the information for the Desctription Area
function populateDescription(descData){
    console.log(descData);
    let newDescriptionDiv = document.createElement("div");
    newDescriptionDiv.innerHTML = descriptionTemplate(descData);
    $('#descriptionArea').html(newDescriptionDiv);
    console.log($('#descriptionArea'));
}

//This is us calling the XHR-requests that we set up in our Database.js
tpData.loadAreas()
.then(
    (areaFromDatabase) => {
        console.log("area from database", areaFromDatabase);
        populateAreas(areaFromDatabase);
        highFunc();
        console.log(tpEventList);
    }
);

// tpData.loadAttractions()
// .then(
//     (attr) => {
//         console.log("hey LOLLLLLLSSSS", attr);
//     });


function highFunc(){
    $(".area").on('click', function(){
        $(this).toggleClass('highlight');

        console.log("this id", $(this).attr("id").slice(6));

        let areaId = parseInt($(this).attr("id").slice(6));

        console.log("areaID", typeof areaId);

        tpData.loadAttractions(areaId)
        .then((attractions) => {
            console.log("this is in TPData.loadattractions", attractions);
            populateDescription(attractions);
        });


        populateDescription($(this).text());
        console.log($(this).text());
    });

}
