// ------------- MODEL ---------------

window.addEventListener('load', 
	function() {
  	// Instatiate the obects
  	octopus.init();

}, false);


var model = {
	// Array of cat names
	catNamesList: ["Dave", "Steve", "Tim", "Eustace", "Alan"], 
	// Array of cat photos
	catPhotosList: ["img/kitty-1.jpg", "img/kitty-2.jpg", "img/kitty-3.jpg", "img/kitty-4.jpg", "img/kitty-5.jpg"],
};

// ------------- OCTOPUS ---------------

var octopus = {
	init: function(){
		this.makeKitties(5);
		this.currentCat = this.kittyList[0];
		view.initKittyList();
		view.listClickFunc();
		view.increaseKittyCounter();
	},
	// Place to store list of kitty objects
	kittyList: [],
	// Place to store the current displayed cat
	currentCat: null,
	// Cat object constructor
	kittyObject: function (kittyNumber) {
		var kittyIndex = kittyNumber;
		this.index = kittyIndex;
		this.name = model.catNamesList[kittyIndex];
		this.photo = model.catPhotosList[kittyIndex];
		this.clickScore = 0;
	},
	// Instantiate all the cats
	newCat: function(number){
		return new this.kittyObject(number); // 'this' refers to 'octopus'
	},
	makeKitties: function(number) {
		for (var i = 0; i < number; i++) {
			this.kittyList.push(this.newCat(i));
		}
	}
};

// ------------- VIEW ---------------

var view = {
	// Render cat names within unordered list
	initKittyList: function() {
		octopus.kittyList.forEach(function(i){
			var li = document.createElement("li");
			li.innerHTML = i.name;
			document.querySelector("ul").appendChild(li);
			// sets id attribute value - used for comparison later
			li.setAttribute("id", i.name);
			// sets onclick attribute, also passes through the element's id attribute value
			li.setAttribute("onclick", "view.listClickFunc(this.id)");
		});
		// set the initial cat name and photo to 1st in list
		document.querySelector("#name").innerHTML = octopus.kittyList[0].name;
		document.querySelector("input").setAttribute("src", octopus.kittyList[0].photo);
	},

	// Click cat name to update name, photo and score
	// Has already collected the clicked element id
	listClickFunc: function(clicked_id) {
		// loop through kittyList
		octopus.kittyList.forEach(function(i){
			if (clicked_id === i.name){
				octopus.currentCat = i;
				document.querySelector("#name").innerHTML = i.name;
				document.querySelector("input").setAttribute("src", i.photo);
				document.querySelector("#score").innerHTML = i.clickScore;
			}
		});	
	},

	// Increases the score for clicking a cat
	// Also tracks score for individual cats
	increaseKittyCounter: function(){
		// grabbing image and set initial counter value
		var kittyImage = document.querySelector("input");
		// register the click event against the collected image
		kittyImage.onclick = function (){
			// increase the counter value on each click
			octopus.currentCat.clickScore++;
			// write the value to the page
			document.querySelector("#score").innerHTML = octopus.currentCat.clickScore;
			// Update a given cat's clickScore
		};
	}
};