"use strict";

let Handlebars = require('hbsfy/runtime');
welcomeTemplate = require('../templates/welcome.hbs'),
welcomeData = require('../templates/welcome-data.js');

// Handlebars.registerPartial('footer', require ('../templates/partials/footer.hbs'));

$('#welcome').append(welcomeTemplate(welcomeData));
