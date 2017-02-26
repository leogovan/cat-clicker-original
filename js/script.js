// Array of cat names

var catNamesList = [
	"Dave",
	"Steve",
	"Tim",
	"Eustace",
	"Alan"

];

// Array of cat photos

var catPhotosList = [
	"img/kitty-1.jpg",
	"img/kitty-2.jpg",
	"img/kitty-3.jpg",
	"img/kitty-4.jpg",
	"img/kitty-5.jpg"
];

// Cat object constructor

var kittyObject = function (kittyNumber) {
	var kittyIndex = kittyNumber - 1;
	this.index = kittyIndex;
	this.position = kittyIndex + 1;
	this.name = catNamesList[kittyIndex];
	this.photo = catPhotosList[kittyIndex];
	this.clickScore = 0;
};

// Instantiate all the cats

var kittyOne = new kittyObject(1);
var kittyTwo = new kittyObject(2);
var kittyThree = new kittyObject(3);
var kittyFour = new kittyObject(4);
var kittyFive = new kittyObject(5);


// Place to store list of kitty objects
var kittyList = [kittyOne, kittyTwo, kittyThree, kittyFour, kittyFive];

// Render cat names within unordered list
function initKittyList() {
	kittyList.forEach(function(i){
		var li = document.createElement("li");
		li.innerHTML = i.name;
		document.querySelector("ul").appendChild(li);
		// sets id attribute value - used for comparison later
		li.setAttribute("id", i.name);
		// sets onclick attribute, also passes through the element's id attribute value
		li.setAttribute("onclick", "listClickFunc(this.id)");
	});
};

// Execute the list
initKittyList();

// Click cat name to update name, photo and score
// Has already collected the clicked element id
function listClickFunc(clicked_id) {
	// loop through kittyList
	kittyList.forEach(function(i){
		if (clicked_id === i.name){
			document.querySelector("#name").innerHTML = i.name;
			document.querySelector("input").setAttribute("src", i.photo);
			document.querySelector("#score").innerHTML = i.clickScore;
		}
	});	
};

var counter = 0;

// Increases the score for clicking a cat

function increaseKittyCounter(i){
	// grabbing image and set initial counter value
	var kittyImage = document.querySelector("input");
	// register the click event against the collected image
	kittyImage.onclick = function (){
		// increase the counter value on each click
		counter++;
		// write the value to the page
		document.querySelector("#score").innerHTML = counter;
		i.clickScore = counter;
	};
};