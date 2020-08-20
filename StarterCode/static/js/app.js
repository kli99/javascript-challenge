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
    // use d3 to grab filter condition column
    var inputElement = d3.select("#datetime");
    // use property from d3 to grab actual value to match input
    var inputValue = inputElement.property("value");
    // use document element to grab table
    var table = document.getElementById("ufo-table");
    // use above calling to get the tag being extracted to show as filtered data
    var tr = table.getElementsByTagName("tr");

    // use For loop to pull data 
    for (i = 0; i < tr.length; i++) {
        // loop through the rows in table data and table rows index 0 column
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            // set data value from the elements to actual text to match the search in all uppercase from all index but bigger than -1
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(inputValue) > -1) {
                // use style property display the result with ""
                tr[i].style.display = "";
            } else {
                // or hide the result with "none"
                tr[i].style.display = "none";
            }
        }
    }
}


// Use D3 to create an event handler
d3.selectAll("body").on("change", updatePage);

function updatePage() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.selectAll("#selectOption").node();
    // Assign the dropdown menu item ID to a variable
    var dropdownMenuID = dropdownMenu.id;
    // Assign the dropdown menu option to a variable
    var selectedOption = dropdownMenu.value;

    console.log(dropdownMenuID);
    console.log(selectedOption);
}