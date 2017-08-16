"use strict";

let Handlebars = require('hbsfy/runtime'),
tpData = require('./javascripts/database.js'),
tpEventList = require('./javascripts/eventlisteners.js'),
welcomeTemplate = require('../templates/welcome.hbs'),
welcomeData = require('../templates/welcome-data.js');

// Handlebars.registerPartial('footer', require ('../templates/partials/footer.hbs'));
console.log("welcomedata", welcomeData);
$('#welcome').append(welcomeTemplate(welcomeData));
