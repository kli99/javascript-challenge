//PART I : Table & Form Buidlingvfrom data.js
var tableData = data;

// get a reference to the table body
var tbody = d3.select("#ufo-table");

console.log(tableData);

// Use d3 to append one table row `tr` for each ufo report object & appending the `tr` elements.
tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");

    Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});


// Select the button
var button = d3.select("#filter-btn");
console.log(button);
// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// function to run filter
function runEnter() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // set variable for input value in the box
    var inputValue = inputElement.property("value");
    // take the table 
    var table = document.getElementById("ufo-table");
    var tr = table.getElementsByTagName("tr");

    // for loop through table 
    for (i = 0; i < tr.length; i++) {
        // table data = loop through each table row in index 0
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            // the value match the html and actual text
            txtValue = td.textContent || td.innerText;
            // to auto uppercase all input and search each index from 0 onward to avoid -1 index failed search
            if (txtValue.toUpperCase().indexOf(inputValue) > -1) {
                // display style in property to show/hide results
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            };
        };
    };
};