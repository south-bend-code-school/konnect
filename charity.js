(function() {

$(document).ready(init);
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA1wHJxl-Dmj3-1R6ifHTDSWPoF5XCQ0mg",
    authDomain: "konnect-a8e3d.firebaseapp.com",
    databaseURL: "https://konnect-a8e3d.firebaseio.com",
    storageBucket: "konnect-a8e3d.appspot.com",
    messagingSenderId: "786099659161"
  };

  var myDataRef;

  function init(){
    firebase.initializeApp(config);
    $('#emailBtn').click(grabDataAndEmail);
    myDataRef = firebase.database().ref('user')
  }

  function grabDataAndEmail(){
    //query firebase and get all of the users.
    myDataRef.once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var charityName = $('#charityname').val();
        var charityEmail = $('#charityemail').val();
        var desc = $('#desc').val();
        var topicsSelect = document.getElementById("topic");
        var charityTopic = topicsSelect.options[topicsSelect.selectedIndex].text;

        var giverName = childSnapshot.child("name").val();
        var giverEmail = childSnapshot.child("email").val();
        console.log(giverName +","+ giverEmail +","+ desc +","+ charityName +","+ charityTopic +","+ charityEmail);

        //we have a fixed number of potential topics.
        for(i=0; i < 5; i++) {
          var topic = childSnapshot.child("topics/"+i);
          if(topic.val() == charityTopic) {
            console.log("email sent to:" + giverEmail);
            emailjs.send("sendgrid", "konnect",
            { "charity_name":charityName,
              "charity_email":charityEmail,
              "giver_name":giverName,
              "giver_email":giverEmail,
              "desc":desc,
              "topic":charityTopic
            });
          }
        }
      }
      );
    }).then(function(result) {
        alert("Your emails have been sent");
        window.location.replace('./giver_thankyou.html');
      });
  }
})();
