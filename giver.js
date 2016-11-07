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

  function init(){
    firebase.initializeApp(config);
    $('#submitUserInfo').click(grabData);
  }

  function grabData(){
    var name = $('#givername').val();
    var email = $('#giveremail').val();
    var topics = [];

    $('.topic:checkbox:checked').each(function(i){
      topics.push($(this).val());
    });

    saveData(name, email, topics);
  }

  function saveData(name, email, topics){
    firebase.database().ref('user/' + name).set({
      name: name,
      email: email,
      topics: topics
    });

    firebase.database().ref('user/').once('value').then(function(snapshot){
      window.location.replace('./giver_thankyou.html');
    });

  }

})();
