//var apiKey ="3FqoViKNfCAqsZIghsnb4bmwoyyEYG2mhvIxZU8zZZc4A1UBBT5vwItuhSINBZPb"

//function currentZip {
   // var queryUrl = ``
//}
//$("searchBtn").on("click", function(event) {
  //  event.preventDefault();

    //var zip
//})

var lng = 0;
var lat = 0;

$('document').ready(function() {

    
}
// function for current position
showPosition = function (position) {
    lng = position.coords.longitude;
    lat = position.coords.longitude;

    console.log(lng)
    console.log(lat)

    document.querySelector("#lng_id").innerHTML = lng;
    document.querySelector("#lat_id").innerHTML = lat;

    localStorage.setItem("geo-lng", lng)
    localStorage.setItem("geo_lat", lat)
}

navigator.geolocation.getCurrentPosition(showPosition)

create_user_data = function (lon, lat, cuisine, radius) {
    var userData = {
        lon: lon,
        lat: lat,
        cuisine: cuisine,
        radius: radius,
    }
    var saved_locations = localStorage.getItem("saved-locations")
    save_data = []
}