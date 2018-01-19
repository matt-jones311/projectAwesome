// This is our API key. Add your own API key between the ""
var APIKey = "3c4d7a4e578c8bd02aa5aaea088688b1";

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + APIKey;

// We then created an AJAX call
$.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {

      // Create CODE HERE to Log the queryURL
      console.log(queryURL);
      // Create CODE HERE to log the resulting object
      console.log(response);
      // Create CODE HERE to transfer content to HTML
      $(".city").html("<h1>" + response.name + "</h1>")
      // Create CODE HERE to calculate the temperature (converted from Kelvin)
      // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
      var temp = response.main.temp;
      console.log(temp);
      temp = (temp - 273.15) * 1.80 + 32;
      console.log(temp);

      // Create CODE HERE to dump the temperature content into HTML
      $(".temp").text("Tempature is : " + Math.round(temp));