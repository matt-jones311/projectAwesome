<script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBOuq1AuSgrLlj-z_WikNzenTu0XZKkNIo",
    authDomain: "allaboutatlanta-b119c.firebaseapp.com",
    databaseURL: "https://allaboutatlanta-b119c.firebaseio.com",
    projectId: "allaboutatlanta-b119c",
    storageBucket: "allaboutatlanta-b119c.appspot.com",
    messagingSenderId: "142298587261"
  };
  firebase.initializeApp(config);

  
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
