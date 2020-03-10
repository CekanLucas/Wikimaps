//helper function that generates new map marker on click event
const placeMarker = function(location, map, mapid) {
  let marker = new google.maps.Marker({
    position: location,
    map: map,
    draggable: true,
    user_id: 1,
    map_id: mapid
  });

  window.maps[mapid].markers.push({
    userid: marker.user_id,
    lat: marker.position.lat(),
    lng: marker.position.lng()
  });
  console.log(marker.position.lat());
  console.log(marker.position.lng());
  console.log(window.maps);

  let infowindow = new google.maps.InfoWindow({
    content: `<form id="marker-form" action="/api/maps/markers" method="POST">
      <p>Create New Marker</p>
      <div>
        <input name="title" placeholder="Title" />
      </div>

      <div>
        <input type="text" name="description" placeholder="Description" />
      </div>

      <div>
        <input type="text" name="address" placeholder="Address" />
      </div>

      <div>
        <input type="text" name="image_url" placeholder="Image Url" />
      </div>
      <div>
        <button type="submit" href="/api/maps/new">Create</button>
        <a id="login-form__cancel" href="/">Cancel</a>
      </div>
    </form>
      `
  });

  marker.addListener("click", function() {
    infowindow.open(map, marker);
  });
};

// let infowindow = new google.maps.InfoWindow({});

// Initialize and add the map
window.initMap = mapid => {
  console.log(mapid);
  console.log(document.getElementById(mapid));
  mapMaker("map");
  // mapMaker("map2");

  // mapMaker("map4");
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
    placeMarker(event.latLng, map, mapid);
  });
};

// google.maps.event.addDomListener(window, "load", initMap);
