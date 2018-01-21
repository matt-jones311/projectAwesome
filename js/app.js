   

/*Weather API Code*/

   /*var APIKey = "166a433c57516f51dfab1f7edaed8413";

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
>>>>>>> a2dbf88b8ca306e90583660d909440a76e24ebbb */ 

$(document).ready(function(){

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




   

var foodData = firebase.database();
  // 2. Button for adding Restaurants
  $("#addRestaurantBtn").on("click", function(){

    // Grabs user input and assign to variables
    var restaurantName = $("#restaurantInput").val().trim();
    var foodName = $("#foodInput").val().trim();
    var priceInput = $("#priceInput").val().trim();
    
    var ratingInput = $("#ratingInput").val().trim();

    // Test for variables entered
    console.log(restaurantName);
    console.log(foodName);
    console.log(priceInput);
   
    console.log(ratingInput);

    // Creates local "temporary" object for holding food data
    // Will push this to firebase
    var newRestaurant = {
      name:  restaurantName,
      food: foodName,
      price: priceInput,
      rating: ratingInput,
      
    }

    // pushing foodInfo to Firebase
    foodData.ref().push(newRestaurant);
    

    // clear text-boxes
    $("#restaurantInput").val("");
    $("#foodInput").val("");
    $("#priceInput").val("");
    $("#ratingInput").val("");
    

    // Prevents page from refreshing
    return false;
  });

  foodData.ref().on("child_added", function(childSnapshot, prevChildKey){

    console.log(childSnapshot.val());

    // assign firebase variables to snapshots.
    var firebaseName = childSnapshot.val().name;
    var firebaseFood = childSnapshot.val().food;
    var firebasePrice = childSnapshot.val().price;
    var firebaseRating = childSnapshot.val().rating;
    
    
    
    // Append food info to table on page
    $("#foodTable > tbody").append("<tr><td>" + firebaseName + "</td><td>" + firebaseFood + "</td><td>"+ firebasePrice + "</td><td>" + firebaseRating + "</td></tr>");

  });
});




