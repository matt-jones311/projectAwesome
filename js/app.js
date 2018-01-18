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

   /*MARTA API Code*/
   var APIKey2 = '5f43c2ba-8824-4e1f-aece-ab17d3887188';

   var queryURL2 = 'http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=' +APIKey2; 

   $.ajax({
   		url:queryURL2,
   		method: 'GET'

   })
   .done(function(response){
   	console.log(response);
    var results=response;
  for (var i = 0; i < results.length; i++) {
     // console.log(results[i]);
      console.log(results[1])
  }

   })