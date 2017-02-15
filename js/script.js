$( "#kittyClick1" ).click(function() {
	var counter = $('#TextBox1').val();
            counter++ ;
            $('#TextBox1').val(counter);

});

$( "#kittyClick2" ).click(function() {
	var counter = $('#TextBox2').val();
            counter++ ;
            $('#TextBox2').val(counter);

});

var catName1 = "Dave";
var catName2 = "Steve";

$("#catNameElem1").append(catName1);
$("#catNameElem2").append(catName2);