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
    $('#areaCont').append(newAreaDiv);
    console.log($('#areaCont'));
}

//Plugging in the information for the Desctription Area
function populateDescription(descData){
    let newDescriptionDiv = document.createElement("div");
    newDescriptionDiv.innerHTML = descriptionTemplate(descData);
    $('#descriptionArea').append(newDescriptionDiv);
    console.log($('#descriptionArea'));
}

//This is us calling the XHR-requests that we set up in our Database.js
tpData.loadAreas()
.then(
    (areaFromDatabase) => {
        console.log("area from database", areaFromDatabase);
        populateAreas(areaFromDatabase);
        tpEventList.highFunc();
        console.log(tpEventList);        
    }
);



