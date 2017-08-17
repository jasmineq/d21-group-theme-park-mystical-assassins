"use strict";
console.log("Database is working");
let inventory = [];
let database = {};


//This is pulling the data from firebase using an XMLHttpRequest.

//
database.loadAreas = () => {
	return new Promise ( function (resolve, reject){

		let areaLoader = new XMLHttpRequest();
		areaLoader.open('GET', `https://general-firebase.firebaseio.com/areas.json`);
		areaLoader.send();

		areaLoader.addEventListener("load", function (){
			let area = JSON.parse(this.responseText); /*responseText is a buzzword... Use it.*/
			console.log("area", area);
			//"fillInventory(area);"
			resolve(area);
		});
  });
};

database.loadAttractions = (iddizzle) => {
	return new Promise ( function (resolve, reject){

		let attrLoader = new XMLHttpRequest();
		attrLoader.open('GET', `https://general-firebase.firebaseio.com/attractions.json?orderBy="area_id"&equalTo=${iddizzle}`);
		attrLoader.send();

		attrLoader.addEventListener("load", function(){
			let attr = JSON.parse(this.responseText);
			console.log("attr", attr);
			resolve(attr);
		});
	});
};

database.loadAttrType = (typeId) => {
	return new Promise ( function (resolve, reject){

		let attrTypeLoader = new XMLHttpRequest();
		attrTypeLoader.open('GET', `https://general-firebase.firebaseio.com/attractions.json?orderBy="typeId"&equalTo=$"{typeId}"`);
		attrTypeLoader.send();

		attrTypeLoader.addEventListener("load", function(){
			let attrType = JSON.parse(this.responseText);
			console.log("attrType", attrType);
			resolve(attrType);
		});
	});
};


module.exports = database;













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
