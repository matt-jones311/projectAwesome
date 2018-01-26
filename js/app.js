 var backgroundImages = {
     '2': 'images/rainordrizzle.mp4',
     '8': 'images/clear.mp4',
     '9': 'images/extreme.mp4',
     '6': 'images/snow.mp4'
 };
 

 function present(e) {
     var bgVid = $("#bg-video");
     var bgVidLocation = backgroundImages["" + e];
     if (bgVidLocation) {
         bgVid.attr("src", bgVidLocation);
     } else {
         bgVid.attr("src", backgroundImages['8']);
     }


 }

$(document).ready(function(){
   //zomato api key  19075edacaf51024c3d48b11b7d30b97




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
     // We store all of the retrieved data inside of an object called "response"
     .done(function(response) {
         console.log(response);
         $('#currentTemp').html('The Current Temperature is: ' + response.main.temp);
         var condition = "" + response.weather[0].id;
         //<img id="background-holder" />
         var bgVid = $("#bg-video");
         var bgVidLocation = backgroundImages[condition[0]];
         if (bgVidLocation) {
             bgVid.attr("src", bgVidLocation);
         } else {
             bgVid.attr("src", backgroundImages['8']);
         }
     });



 // 2xx => thunderstorm
 // 3xx => drizzle
 // 5xx => rain
 // 6xx => snow
 // 7xx => atmosphere
 // 800 => clear
 // 80x => clouds
 // 90x => extreme
 // 9xx => additional





 // Initialize Firebase
 var authconfig = {
     apiKey: "AIzaSyBOuq1AuSgrLlj-z_WikNzenTu0XZKkNIo",
     authDomain: "allaboutatlanta-b119c.firebaseapp.com",
     databaseURL: "https://allaboutatlanta-b119c.firebaseio.com",
     projectId: "allaboutatlanta-b119c",
     storageBucket: "allaboutatlanta-b119c.appspot.com",
     messagingSenderId: "142298587261"
 };
 firebase.initializeApp(authconfig);


 //setting up the authentication with google

 var provider = new firebase.auth.GoogleAuthProvider();
 provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

 firebase.auth().languageCode = 'en';
 // To apply the default browser preference instead of explicitly setting it.
 // firebase.auth().useDeviceLanguage();

 provider.setCustomParameters({
     'login_hint': 'user@example.com'
 });

 $('#login').on('click', function(e) {
     // e.preventDefault();
     console.log('something');
     firebase.auth().signInWithPopup(provider).then(function(result) {
         console.log(result);
         // This gives you a Google Access Token. You can use it to access the Google API.
         var token = result.credential.accessToken;
         // The signed-in user info.
         var user = result.user;
         // ...
     }).catch(function(error) {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         // The email of the user's account used.
         var email = error.email;
         // The firebase.auth.AuthCredential type that was used.
         var credential = error.credential;
         // ...
         console.error(error);

     });

 });



  
})


 /*var foodData = firebase.database();
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
   */