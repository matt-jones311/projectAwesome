<script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>
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
  // VARIABLES
    // --------------------------------------------------------------------------------
    var database = firebase.database();
    var likeCounter = 0;

    
$(".fi-like").on("click", function() {
      likeCounter++;
      database.ref().set({
        likeCount: likeCounter
      });
    });
