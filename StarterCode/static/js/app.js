// from data.js
var tableData = data;

// tbody
tbody = d3.select("tbody")
console.log("Welcome")

// Object looping
function displayData(sighting){ 
    tbody.text("")
    sighting.forEach(function(UfoSights){
    new_tr = tbody.append("tr")
    Object.entries(UfoSights).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)

console.log("Welcome2")


// Submit variable
var submit = d3.select("#submit");

submit.on("click", function() {
    console.log("Welcome3")

  // Prevent command to stop refreshing
  d3.event.preventDefault();

  // Setting up select element
  var dateData = d3.select("#datetime");
  var cityData = d3.select("#city");
  var stateData = d3.select("#state");
  var countryData = d3.select("#country");
  var shapeData = d3.select("#shape");

  // Input element value
  console.log(dateData.property("value"));
  console.log(cityData.property("value"));
  console.log(stateData.property("value"));
  console.log(countryData.property("value"));
  console.log(shapeData.property("value"));

  // filter variables to continue working

 var filtered = tableData.filter(UfoSights =>{
  return (UfoSights.datetime===dateData.property("value") || !dateData.property("value") ) && 
            (UfoSights.city===cityData.property("value") || !cityData.property("value")) &&
            (UfoSights.state===stateData.property("value") || !stateData.property("value")) &&
            (UfoSights.country===countryData.property("value") || !countryData.property("value")) &&
            (UfoSights.shape===shapeData.property("value") || !shapeData.property("value"))
 })

 //run filtered entries to display
 displayData(filtered);


});

var filterInputs = d3.selectAll('.form-control');

// Clears input fields and input object
function clearEntries() {
    filters = {};

    // Sets every input field to empty
    filterInputs._groups[0].forEach(entry => {
        if (entry.value != 0) {
            d3.select('#' + entry.id).node().value = "";
        }
    });
};

var clearButton = d3.select("#clear");
// Clear button on click clears fields
clearButton.on('click', function () {

    // Setting to default to keep the page
    d3.event.preventDefault();
        clearEntries()
});