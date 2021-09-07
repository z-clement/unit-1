// Add all scripts to the JS folder
//initialize function called when the script loads
function initialize(){
    cities();
    // $('#mydiv').html('Hello World');
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

    //create the table element
    // var table = document.createElement("table");

    //append the table element to the div
    $("#mydiv").append("<table>");

    //create a header row
    // var headerRow = document.createElement("tr");

    //append a header row to the table
    $("table").append("<tr>");

    //add the "City" column
    // var cityHeader = document.createElement("th");
    // cityHeader.innerHTML = "City";
    // headerRow.appendChild(cityHeader);

    //add the "Population" column
    // var popHeader = document.createElement("th");
    // popHeader.innerHTML = "Population";
    // headerRow.appendChild(popHeader);

    //add the "City" and "Population" columns to the header row
    $("tr").append("<th>City</th><th>Population</th>");

    //add the row to the table
    // table.appendChild(headerRow);

    //loop to add a new row for each city
    // for (var i = 0; i < cities.length; i++){
    //     var tr = document.createElement("tr");

    //     var city = document.createElement("td");
    //     if (cities[i] === 'Madison') {
    //         city.innerHTML = 'Badgerville';
    //     } else if (cities[i] === 'Green Bay') {
    //         city.innerHTML = 'Packerville';
    //     } else {
    //         city.innerHTML = cities[i];
    //     }
    //     tr.appendChild(city);

    //     var pop = document.createElement("td");
    //     pop.innerHTML = population[i] < 500000 ? population[i] : 'Too big!';
    //     tr.appendChild(pop);

    //     table.appendChild(tr);
    // };

    //loop to add a new row for each city
    for (let i = 0; i < cityPop.length; i++) {
        // assign longer html strings to a variable
        let rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        // add the row's html string to the table
        $("table").append(rowHtml);
    }

    //add the table to the div in index.html
    // var mydiv = document.getElementById("mydiv");
    // mydiv.appendChild(table);
};

//call the initialize function when the window has loaded
// window.onload = initialize();
$(document).ready(initialize);