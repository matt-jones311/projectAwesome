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
           $('#currentTemp').html('The Current Temperature is: ' + response.main.temp);
       });


   var backgroundImages = {
       '2': '/url/to/thunderstorms.png',
       '8': '/url/to/clear.mp4'
   };

   var data = {
       "coord": {
           "lon": -84.39,
           "lat": 33.75
       },   
       "weather": [{
           "id": 800,
           "main": "Clear",
           "description": "clear sky",
           "icon": "01n"
       }],
       "base": "stations",
       "main": {
           "temp": 33.6,
           "pressure": 1027,
           "humidity": 47,
           "temp_min": 30.2,
           "temp_max": 35.6
       },
       "visibility": 16093,
       "wind": {
           "speed": 6.4,
           "deg": 303.505
       },
       "clouds": {
           "all": 1
       },
       "dt": 1516325700,
       "sys": {
           "type": 1,
           "id": 749,
           "message": 0.0045,
           "country": "US",
           "sunrise": 1516365661,
           "sunset": 1516402560
       },
       "id": 4180439,
       "name": "Atlanta",
       "cod": 200
   }

   var condition = "" + data.weather[0].id;
//<img id="background-holder" />
var bgVid = $("#bg-video");
bgVid.attr("src", backgroundImages[condition[0]]);
