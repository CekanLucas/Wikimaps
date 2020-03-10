//helper function that generates new map marker on click event
const placeMarker = function(location, map) {
  let marker = new google.maps.Marker({
    position: location,
    map: map,
    draggable: true
  });
};

// Initialize and add the map
window.initMap = mapid => {
  console.log(mapid);
  console.log(document.getElementById(mapid));
  mapMaker("map");
  mapMaker("map2");
};

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
};

// google.maps.event.addDomListener(window, "load", initMap);
