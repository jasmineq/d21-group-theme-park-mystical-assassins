"use strict";

let Handlebars = require('hbsfy/runtime'),
tpData = require('./database.js'),
tpEventList = require('./eventlistener.js'),
welcomeTemplate = require('../templates/welcome.hbs'),
welcomeData = require('../templates/welcome-data.js');

// Handlebars.registerPartial('footer', require ('../templates/partials/footer.hbs'));
console.log("welcomedata", welcomeData);
$('#welcome').append(welcomeTemplate(welcomeData));
