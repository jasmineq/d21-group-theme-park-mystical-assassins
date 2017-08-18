"use strict";
console.log("Database is working");
let inventory = [];
let database = {};


//This is pulling the data from firebase using an XMLHttpRequest.

//
database.loadAreas = () => {
	return new Promise ( function (resolve, reject){

		let areaLoader = new XMLHttpRequest();
		areaLoader.open('GET', `https://testing-firebase-e4781.firebaseio.com/areas.json`);
		areaLoader.send();

		areaLoader.addEventListener("load", function (){
			let area = JSON.parse(this.responseText); /*responseText is a buzzword... Use it.*/
			console.log("area has loaded", area);
			//"fillInventory(area);"
			resolve(area);
		});
  });
};

database.loadAttractions = (iddizzle) => {
	return new Promise ( function (resolve, reject){

		let attrLoader = new XMLHttpRequest();

		attrLoader.open('GET', `https://testing-firebase-e4781.firebaseio.com/attractions.json?orderBy="area_id"&equalTo=${iddizzle}`);

		attrLoader.send();

		attrLoader.addEventListener("load", function(){
			let attr = JSON.parse(this.responseText);

			console.log("attractions have loaded", attr);

			resolve(attr);

		});
	});
};

database.loadAttrType = (typeId) => {
	return new Promise ( function (resolve, reject){

		let attrTypeLoader = new XMLHttpRequest();
		attrTypeLoader.open('GET', `https://testing-firebase-e4781.firebaseio.com/attractions.json?orderBy="typeId"&equalTo=$"{typeId}"`);
		attrTypeLoader.send();

		attrTypeLoader.addEventListener("load", function(){
			let attrType = JSON.parse(this.responseText);
			console.log("Attraction types have loaded", attrType);
			resolve(attrType);
		});
	});
};
database.searchNames = (searchValue) => {
	return new Promise (function(resolve, reject){
		let searchDataLoader = new XMLHttpRequest();
		searchDataLoader.open('GET', `https://testing-firebase-e4781.firebaseio.com/attractions.json` )
	})
}


module.exports = database;










// let xml = new XMLHttpRequest();
// xml.open('GET', `https://testing-firebase-e4781.firebaseio.com/areas.json`);
// console.log("data reslt", `https://testing-firebase-e4781.firebaseio.com/attractions.json`);
// xml.send();
// xml.addEventListener("load", function(){
// 			let data = JSON.parse(this.responseText);
// 			console.log("data", data);
//       pullData(data);
// });

// //This should pull the specific data.
// function pullData(data){
//   let keys = Object.keys(data);
//   keys.forEach((item) => {
//     // console.log("keys", keys);
//     data[item].firebaseid = item;
//     inventory.push( `${data[item].name}, ${data[item].description}`);

// 	});

// }

// console.log("inventory:", inventory);

// //this is getting the value of the search bar.
// let searchBar = document.getElementById("form-control");


// //promise to load all the areas
// attractions.








/* This will hoply do a couple of things
(1). Add an event listener to the search bar.
(2). When the user clicks the enter button in the search bar, the function it points to will send that value to FireBase and return its "area_id"
(3). It will console log that id
(4). If the name the user typed doesn't equal a name of an attraction, the window will display that "That is not a name"
*/
// searchBar.addEventListener("keyup", function(event){
//   console.log(event);
// });
