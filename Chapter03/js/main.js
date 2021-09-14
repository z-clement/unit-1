//initialize function called when the script loads
function initialize(){
	cities();
    debugAjax();
};

//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
	var cityPop = [
		{ 
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//append the table element to the div
	$("#mydiv").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");
	
	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");
	
	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };

    addColumns(cityPop);
    addEvents();
};

// adds a column categorizing city size for each row in the table
function addColumns(cityPop){
    // looping through the table by row
    $('tr').each(function(i){

    	if (i == 0){
			// the first row will be the headers, so add a new 'City Size' header
    		$(this).append('<th>City Size</th>');
    	} else {

    		var citySize;
			// use citySize to determine if a city is small/med/large based on the population
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};
			// append the city size to the row as a new cell in the table
    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};

function addEvents(){
	// creating a mouseover event for the table
	$('table').mouseover(function(){
		// set a variable for the color
		var color = "rgb(";
		// loop from 1 to 3 and get a randomized value for each rgb value
		for (var i=0; i<3; i++){
			// get a random value between 0 and 255
			var random = Math.round(Math.random() * 255);
			// concatenate the random number to the color string
			color += random;
			// add commas where they're needed
			if (i<2){
				color += ",";
			// add a closing parenthesis at the end
			} else {
				color += ")";
			}
		};
		// set the css color attribute of the table to the randomized rgb value
		$(this).css('color', color);
	});
	// creating a function to be called that will pop up an alert
	function clickme(){
		// create an alert saying "Hey, you clicked me!"
		alert('Hey, you clicked me!');
	};
	// create the click event for the table that calls the clickme function
	$('table').on('click', clickme);
};

//call the initialize function when the document has loaded
$(document).ready(initialize);

// from debug_ajax.js
function debugCallback(response){
	// appending the GeoJSON feature collection to the 'mydiv' section of the page
	$(mydiv).append('<br>GeoJSON data:<br>' + JSON.stringify(response.responseJSON));
};

function debugAjax(){
	
	// mydata will store the data retrieved from the MegaCities.geojson file
	var mydata;
	// logging statements to debug the code
	console.log("ajax");
	console.log(mydata);

	// use .ajax to asynchronously get the data from the geoJSON file, and once it's gotten call the debugCallback function
	mydata = $.ajax("data/MegaCities.geojson", {
		dataType: "json",
		success: function(response){
			
			debugCallback(mydata);
		}
	});
};