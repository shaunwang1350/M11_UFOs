const tableData = data;

var tbody = d3.select("tbody");

function buildTable(data) {

  tbody.html("");

  data.forEach((dataRow) => {
    let row = tbody.append("tr");

    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// NOTE: I discovered a more efficient way of filtering through all of the inputs provided by the user. It eliminates the use of additional funciont (filterTable()) and was able to do so without a forEach loop. This meant that the runtime for the app was much faster. I have included a commented out version of what is asked from the criteria. This includes the additional filterTable Function and the forEach loop. This is intend to display that I have done the work. 

// Version w/ function and Foreach loop: var filters = {};

function handleClick() {
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    let state = d3.select("#state").property("value");
    let country = d3.select("#country").property("value");
    let shape = d3.select("#shape").property("value");

    let filteredData = tableData;

    if (date) {
        // The below code would not be here with the version with foreach loop
        filteredData = filteredData.filter(row => row.datetime === date);
        // Version w/ function and Foreach loop: 
        // filters.datetime = date;
    };
    if (city) {
        // The below code would not be here with the version with foreach loop
        filteredData = filteredData.filter(row => row.city === city);
        // Version w/ function and Foreach loop: 
        // filters.city = city;
    };
    if (state) {
        // The below code would not be here with the version with foreach loop
        filteredData = filteredData.filter(row => row.state === state);
        // Version w/ function and Foreach loop: 
        // filters.state = state;
    };
    if (country) {
        // The below code would not be here with the version with foreach loop
        filteredData = filteredData.filter(row => row.country === country);
        // Version w/ function and Foreach loop: 
        // filters.country = country;
    };
    if (shape) {
        // The below code would not be here with the version with foreach loop
        filteredData = filteredData.filter(row => row.shape === shape);
        // Version w/ function and Foreach loop: 
        // filters.shape = shape;
    };
    
    // The below code would not be here with the version with foreach loop
    buildTable(filteredData);
    // Version w/ function and Foreach loop: 
    // filterTable(filters);
};

// Version w/ function and Foreach loop: 
// function filterTable (filterVar) {
    
//     Object.entries(filterVar).forEach((filter) => {
//         var key = filter[0]
//         var value = filter[1]
//         filteredData = filteredData.filter(row => row.key === value);
//     });
    
//     buildTable(filteredData);
// }

function resetClick() {
    location.reload()
}

d3.selectAll("#filter-btn").on("click", handleClick);
d3.selectAll("#reset-btn").on("click", resetClick);

// Build the table when the page loads
buildTable(tableData);