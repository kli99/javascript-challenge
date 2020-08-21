//PART II : Multiple Filter Options
var tableData = data;
// get a reference to the table body
var tbody = d3.select("#tbody_id");
// Use d3 to append one table row `tr` for each ufo report object & appending the `tr` elements.
tableData.forEach(function(ufoReport) {
    var row = tbody.append("tr");

    Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});


var button = d3.select("#filter-btn").on("click", runEnter);

function runEnter() {

    // prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node   
    var filters = {};

    filters['datetime'] = d3.select("#datetime").property("value");
    filters['city'] = d3.select("#city").property("value");
    filters['state'] = d3.select("#state").property("value");
    filters['country'] = d3.select("#country").property("value");
    filters['shape'] = d3.select("#shape").property("value");

    // check which keys have values
    for (var key in filters) {
        //filter out null, undefined and empty string values and delete the them
        if (filters[key] === null || filters[key] === undefined || filters[key] === "") {
            delete filters[key];
        };
    };

    //console.log to see the result
    console.log(filters);

    // define variable
    var filteredData = tableData;
    // filter multiple values 
    Object.entries(filters).forEach(function([key, value]) {

        //loop value from by each key then after previous key then onto next key which = value
        filteredData = filteredData.filter(row => row[key] === value);

    });

    // select the table body
    var tbody = d3.select("#tbody_id");

    tbody.html("");

    // filtered data appended into new table as input value changes
    filteredData.forEach(function(ufoReport) {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });

};