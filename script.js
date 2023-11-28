// Name: Ransford Addai
// Training ID: 32524
// Web Development Individual Project





function convertTemperature() {
  // Getingt input values
  var inputTemp = document.getElementById("inputTemp").value;
  var unitFrom = document.getElementById("unitFrom").value;
  var unitTo = document.getElementById("unitTo").value;

  // Performing temperature conversion
  if (unitFrom === "Celsius" && unitTo === "Fahrenheit") {
    var result = (inputTemp * 9/5) + 32;
  } else if (unitFrom === "Fahrenheit" && unitTo === "Celsius") {
    var result = (inputTemp - 32) * 5/9;
  } else {
    var result = inputTemp; // If the units are the same, no conversion needed
  }

  // Displaying the result
  document.getElementById("result").innerHTML = result.toFixed(2) + " " + unitTo;
}
