// import the data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {

    //Clears out any existing data
    tbody.html("");

    //Looping through each object in the data
    data.forEach((dataRow) => {
        //appends a new row to the table body
        let row = tbody.append("tr");
        // loop through the datarow and ad each value as a table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
};

function handleClick(){
    // Grabs the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Checks to see if a date was entered and filter the data suing that date.
    if (date) {
        // applies filter to the table data to only keep the rows where the datetime value matches the filter value.
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    //Rebuilds the table using the filtered data, will default to original if no data is entered
    buildTable(filteredData);
};

//Attach an event to listen for the form button
d3.selectAll('#filter-btn').on('click',handleClick);

//Builds the table when the page loads
buildTable(tableData);