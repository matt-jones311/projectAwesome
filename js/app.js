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







  var database = firebase.database();
  
  var likeCounter = 0;
  var likeCounterR1 = 0;
  var likeCounterR2 = 0;
  var likeCounterR3 = 0;
    // FUNCTIONS + EVENTS
    // --------------------------------------------------------------------------------
    $(".fi-like").on("click", function() {
      likeCounter++;
      database.ref().update({
        likeCount: likeCounter
      });
    });
    // MAIN PROCESS + INITIAL CODE
    // --------------------------------------------------------------------------------
    database.ref().on("value", function(snapshot) {
      
      console.log(snapshot.val());
      
      $("#numberOfLikes").text(snapshot.val().likeCount);
      
      likeCounter = snapshot.val().likeCount;
    
    }, function(errorObject) {
      
      console.log("The read failed: " + errorObject.code);
    
    });

   

    $("#restaurantLikes1").on("click", function(){
      likeCounterR1++;
      database.ref().update({
        likeCountR1: likeCounterR1
      });
    });
    database.ref().on("value", function(snapshot) {
      
      console.log(snapshot.val());
      
      $("#numberOfLikesR1").text(snapshot.val().likeCountR1);
      
      likeCounterR1 = snapshot.val().likeCountR1;
    
    }, function(errorObject) {
      
      console.log("The read failed: " + errorObject.code);
    
    });

  
    
    $("#restaurantLikes2"). on("click", function(){
      likeCounterR2++;
      database.ref().update({
        likeCountR2: likeCounterR2
      });
    });
    database.ref().on("value", function(snapshot) {
      
      console.log(snapshot.val());
      
      $("#numberOfLikesR2").text(snapshot.val().likeCountR2);
      
      likeCounterR2 = snapshot.val().likeCountR2;
    
    }, function(errorObject) {
      
      console.log("The read failed: " + errorObject.code);
    
    });

   

    $("#restaurantLikes3"). on("click", function(){
      likeCounterR3++;
      database.ref().update({
        likeCountR3: likeCounterR3
      });
    });
    database.ref().on("value", function(snapshot) {
      
      console.log(snapshot.val());
      
      $("#numberOfLikesR3").text(snapshot.val().likeCountR3);
      
      likeCounterR3 = snapshot.val().likeCountR3;
    
    }, function(errorObject) {
      
      console.log("The read failed: " + errorObject.code);
    
    });


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



  
});
