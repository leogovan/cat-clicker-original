$( "#kittyClick1, #kittyClick2" ).click(function() {
	var counter = $('#TextBox').val();
            counter++ ;
            $('#TextBox').val(counter);

});

var catName1 = "Dave";
var catName2 = "Steve";

$("#catNameElem1").append(catName1);
$("#catNameElem2").append(catName2);