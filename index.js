$(document).ready(function() {
    $("#charityBtn").click(redirectCharity);
    $("#giverBtn").click(redirectGiver);
});

function redirectCharity() {
  window.location.replace("./charity.html");
  //window.location.replace("./login.html?type=Charity");
}
function redirectGiver() {
  window.location.replace("./giver.html");
}
