   /*Weather API Code*/

   var APIKey = "166a433c57516f51dfab1f7edaed8413";

   // Here we are building the URL we need to query the database
   var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
       "q=Atlanta,Georgia&units=imperial&appid=" + APIKey;

   // Here we run our AJAX call to the OpenWeatherMap API
   $.ajax({
           url: queryURL,
           method: "GET"
       })
       // We store all of the retrieved data inside of an object called "response"
       .done(function(response) {
       	console.log(response);
       	$('#currentTemp').html('The Current Temperature is: ' + response.main.temp );
       });
