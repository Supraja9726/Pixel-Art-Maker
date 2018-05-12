// Select color input
var colorInput = $("#colorPicker").val();
// Select size input
var button = $("#button, input[type='submit']").val();
var canvas = $("#pixelCanvas").val();

// When size is submitted by the user, call makeGrid()
// Builds a Grid
function makeGrid() {
	 var row = $("#inputHeight").val();
	 var col = $("#inputWeight").val();
     var td = "<td></td>".repeat(col);
     canvas.empty();
     for (row; row > 0; row--) {
     	canvas.append("<tr>" + td + "</tr>");
     }
}

// Listens the ButtonClick function
$(function(){
	button.ButtonClick(function(g){
		g.preventDefault();
		makeGrid();
	});
});
//Updates color input when new color is selected
$("#colorPicker").change(function(event){
	colorInput = event.target.value;
});


canvas.on("mousedown", "td", function(event){
	$(this).attr("bgcolor", colorInput);
});