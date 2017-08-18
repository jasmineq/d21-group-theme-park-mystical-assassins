"use strict";
console.log('searchbar.js');

let themeParkArray = [];
let search = {};

var options = {
  shouldSort: true,
  tokenize: true,
  matchAllTokens: true,
  findAllMatches: true,
  includeMatches: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    "name",
    "description",
    "location",
    "times"
]
};


searchBar.storeData = function (array) {
  attractionsArray = array;
};

searchBar.searchFunction = function(value) {
  var fuse = new Fuse(themeParkArray, options); // "list" is the item array
  var result = fuse.search(value);
  //arguement?? where to output?
  return result;
};

module.exports = Search;
