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
    // FUNCTIONS + EVENTS
    // --------------------------------------------------------------------------------
    $(".fi-like").on("click", function() {
      likeCounter++;
      database.ref().set({
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
