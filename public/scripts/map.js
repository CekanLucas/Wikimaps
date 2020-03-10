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
    content: `<form id="marker-form">
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

$(document).on("submit", "#marker-form", function(evt) {
  evt.preventDefault();
  let title = $(this.title).serialize();
  let description = $(this.description).serialize();
  let address = $(this.address).serialize();
  let image_url = $(this.image_url).serialize();
  let map_id = $(this.mapid).serialize();
  let latitude = $(this.lat).serialize();
  let longitude = $(this.lng).serialize();

  // TODO: make api call to store marker info in databasr

  // TODO: find marker in window.maps, by using the mapid and the lat and long,
  // and then update with the information remove form
  console.log(
    "pointer data: ",
    title,
    "\n",
    description,
    "\n",
    address,
    "\n",
    image_url,
    "\n",
    map_id,
    "\n",
    latitude,
    "\n",
    longitude
  );
});

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
