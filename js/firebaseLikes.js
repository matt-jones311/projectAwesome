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