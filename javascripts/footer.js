"use strict";

var foo = new Date();
let currentDate = foo.getMonth() + 1 + '/' + foo.getDay() + '/' + foo.getFullYear();
document.getElementById('copyrightYear').innerHTML = currentDate;
console.log('currentDate', currentDate);

// console.log('time', foo);

console.log('footer.js');
// $("#footer").html("© Mystical Ninjas" + time);
