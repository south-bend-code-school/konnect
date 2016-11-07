var user;
var type;
var email;

$(document).ready(function() {
    $("#loginBtn").click(login);
    $("#createBtn").click(createAccount);

    type = decodeURI(location.search.split('type=')[1]);
    $("#type").append(type);
    console.log(type);
});

function login() {
  var user=$("#user").val()
  if(type=="Giver") {
      window.location.replace("./giver.html?type=" + type + "&user="+user);
  } else {
      window.location.replace("./charity.html?type=" + type + "&user="+user);
  }
}

function createAccount() {
  var email=$("#user").val()


}
