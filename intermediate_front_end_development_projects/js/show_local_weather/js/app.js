var css = require("../css/app.scss");

function geoFindMe() {
  console.log('geo is finding me');
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
  }

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}

var loaded=0;
var loaded1min=0;
document.addEventListener("DOMContentLoaded", event => {
  loaded =1;
  setTimeout(() => { loaded1min=1;}, 60000);
  // document.getElementById('geofiy').addEventListener('click', alert('click track' + click_count), false);
});



var click_count = 0;

// Function to change the content of t2
function modifyText(new_text) {
  var t2 = document.getElementById("geofiy");
  t2.firstChild.nodeValue = new_text;  
  click_count += 1;
}
 
// Function to add event listener to table
var el = document.getElementById("outside");
el.addEventListener("click", function(){getWeatherFrom(click_count)}, false);

function getWeatherFrom() {
  console.log('getWeather again');
  fetch('http://api.icndb.com/jokes/random')
    .then(response => {
      if (response.status !== 200) {
        console.log("looks like there was a problem. Status Code: " + response.status);
        return;
      }

      response.json().then(data => {
        console.log(data);
      });
    })
    .catch(err => {
      console.log('Fetch Error :-S', err);
    });
}
