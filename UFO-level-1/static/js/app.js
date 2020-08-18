//PART I : Table & Form Buidlingvfrom data.js
var tableData = data;

// get a reference to the table body
var tbody = d3.select("#ufo-table");

console.log(tableData);

// loop thru 'data' and console.log each object
tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
});

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

function runEnter() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var table = document.getElementById("ufo-table");
    var tr = table.getElementsByTagName("tr");


    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(inputValue) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}