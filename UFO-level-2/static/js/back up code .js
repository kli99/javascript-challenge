for (i = 0; i < tr.length; i++) {
    date = tr[i].getElementsByTagName("td")[0];

    if (date) {
        dateValue = date.textContent || date.innerText;
        if (dateValue.toUpperCase().indexOf(inputValue) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}


var inputCity = d3.select("#city");
var cityV = inputCity.property("value");
var table = document.getElementById("ufo-table");
var tr = table.getElementsByTagName("tr");


for (i = 0; i < tr.length; i++) {
    city = tr[i].getElementsByTagName("td")[0];

    if (city) {
        cityValue = city.textContent || city.innerText;
        if (cityValue.toUpperCase().indexOf(cityV) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}

var inputState = d3.select("#state");
var stateV = inputState.property("value");
var table = document.getElementById("ufo-table");
var tr = table.getElementsByTagName("tr");


for (i = 0; i < tr.length; i++) {
    state = tr[i].getElementsByTagName("td")[0];

    if (state) {
        stateValue = state.textContent || state.innerText;
        if (stateValue.toUpperCase().indexOf(stateV) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}

var inputCoun = d3.select("#country");
var counV = inputCoun.property("value");
var table = document.getElementById("ufo-table");
var tr = table.getElementsByTagName("tr");


for (i = 0; i < tr.length; i++) {
    country = tr[i].getElementsByTagName("td")[0];

    if (country) {
        counValue = country.textContent || country.innerText;
        if (counValue.toUpperCase().indexOf(counV) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}
};