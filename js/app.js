   

 // Initialize Firebase
 var config = {
   apiKey: "AIzaSyDdVcKNzNfmkkcJojS3jYhVm_D8psz3ZGM",
   authDomain: "project-awesome-fcb21.firebaseapp.com",
   databaseURL: "https://project-awesome-fcb21.firebaseio.com",
   projectId: "project-awesome-fcb21",
   storageBucket: "project-awesome-fcb21.appspot.com",
   messagingSenderId: "705424388035"
 };
 firebase.initializeApp(config);




   /*Weather API Code*/

   var APIKey = "166a433c57516f51dfab1f7edaed8413";

   // Here we are building the URL we need to query the database
   var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
     "q=Atlanta,Georgia&units=imperial&appid=" + APIKey;

   // Here we run our AJAX call to the OpenWeatherMap API
   $.ajax({
<<<<<<< HEAD
       url: queryURL,
       method: "GET"
     })
     // We store all of the retrieved data inside of an object called "response"
     .done(function(response) {
       console.log(response);
       $('#currentTemp').html('The Current Temperature is: ' + response.main.temp);
     });
=======
           url: queryURL,
           method: "GET"
       })
       // We store all of the retrieved data inside of an object called "response"
       .done(function(response) {
       	console.log(response);
       	$('#currentTemp').html('The Current Temperature is: ' + response.main.temp );
       });
>>>>>>> a2dbf88b8ca306e90583660d909440a76e24ebbb







