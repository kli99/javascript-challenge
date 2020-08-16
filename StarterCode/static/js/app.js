// from data.js
var tableData = data;

// YOUR CODE HERE!
// get a reference to the table body
var tbody = d3.select("#ufo-table");

//console.log the data from data.js
console.log(tableData);

//step 1: loop thru 'data' and console.log each object
tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
});

// Step 2:  Use d3 to append one table row `tr` for each ufo report object
// Don't worry about adding cells or text yet, just try appending the `tr` elements.
tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
});