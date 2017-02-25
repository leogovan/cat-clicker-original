// ----- JS version ------------

// onload in body tag should make it available once doc is loaded
// worth noting that onload needs entire doc loaded
// better approach later it to make it available when the DOM is loaded
// as this typically happens earlier (think jquery equivalent of .ready())
function increaseKittyCounter(){
	// grabbing image and set initial counter value
	var kittyImage = document.querySelector("#kittyClick1");
	var counter = 0;
	
	// register the click event against the collected image
	kittyImage.onclick = function (){
		// increase the counter value on each click
		counter++;
		// write the value to the page
		document.querySelector("#countValue1").innerHTML = counter;
		
	};
};


// ----- JQuery version ------------

$( "#kittyClick2" ).click(function() {
	var counter = $('#TextBox2').val();
            counter++ ;
            $('#TextBox2').val(counter);

});

// ----- Cat names ------------

var catName1 = "Dave. I am controlled by Javascript.";
var catName2 = "Steve. I am controlled by JQuery.";

$("#catNameElem1").append(catName1);
$("#catNameElem2").append(catName2);