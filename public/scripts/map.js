//helper function that generates new map marker on click event
const placeMarker = function(location, map) {
  let marker = new google.maps.Marker({
    position: location,
    map: map,
    draggable: true
  });
};

// const placeInfowindow = function(map, marker) {
// let infowindow = new google.maps.InfoWindow({
// content:
//   '<div id="content">' +
//   '<div id="siteNotice">' +
//   "</div>" +
//   '<h1 id="firstHeading" class="firstHeading">hello world</h1>' +
//   '<div id="bodyContent">' +
//   "<p><b>Hello World</b>" +
//   "</div>" +
//   "</div>"
// });
// };
// let infowindow = new google.maps.InfoWindow({});

// Initialize and add the map
window.initMap = mapid => {
  console.log(mapid);
  console.log(document.getElementById(mapid));
  mapMaker("map");
  mapMaker("map2");
  mapMaker("map3");
  mapMaker("map4");
};

// helper function that generates user maps.
// needs to be refactored to generate all maps connected to currently logged in user
const mapMaker = function(mapid) {
  const lhl = { lat: 43.6529, lng: -79.3849 };
  let map = new google.maps.Map(document.getElementById(mapid), {
    zoom: 13,
    center: lhl
  });
  // on click map event handler
  google.maps.event.addListener(map, "click", function(event) {
    console.log("click detected");
    placeMarker(event.latLng, map);
  });
  // marker.addListener("click", function() {
  //   infowindow.open(map, marker);
  // });
};

// google.maps.event.addDomListener(window, "load", initMap);
