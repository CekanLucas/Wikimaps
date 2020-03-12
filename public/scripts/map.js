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
  // console.log(window.maps);

  let infowindow = new google.maps.InfoWindow({
    content: `<form id="marker-form" action="/api/maps/markers" method = "POST">
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

      <input type="hidden" name="user_id" value="1" />
      <input type="hidden" name="mapid" value="${mapid}" />
      <input type="hidden" name="lat" value="${marker.position.lat()}" />
      <input type="hidden" name="lng" value="${marker.position.lng()}" />
      <div>
        <button type="submit" href="/api/maps/markers">Create</button>
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

  //put this in object
  let markerData = {
    title: $(this.title).val(),
    description: $(this.description).val(),
    address: $(this.address).val(),
    image_url: $(this.image_url).val(),
    user_id: $(this.user_id).val(),
    map_id: $(this.mapid).val(),
    latitude: $(this.lat).val(),
    longitude: $(this.lng).val()
  };

  $.ajax({
    url: "/api/maps/markers",
    method: "POST",
    data: markerData
  }).then(data => {
    console.log(data);
  });
  // TODO: make api call to store marker info in databasr
  // TODO: find marker in window.maps, by using the mapid and the lat and long,
  // and then update with the information remove form
});

// let infowindow = new google.maps.InfoWindow({});

// Initialize and add the map
window.initMap = mapid => {
  console.log(mapid);
  console.log(document.getElementById(mapid));
  mapMaker("map");
  // mapMaker("map2");
};

// helper function that generates user maps.
// needs to be refactored to generate all maps connected to currently logged in user
const mapMaker = function(mapid, mapmarkers) {
  const lhl = { lat: 43.78432041175625, lng: -79.60479333058197 };
  let map = new google.maps.Map(document.getElementById(mapid), {
    zoom: 9,
    center: lhl
  });

  if (mapmarkers) {
    for (let key in mapmarkers) {
      // console.log(key);
      // console.log(mapid);
      if (key == mapid) {
        for (let marker of mapmarkers[key]) {
          console.log(marker);
          let lat = Number(marker.latitude);
          let lng = Number(marker.longitude);
          placeMarker({ lat, lng }, map, mapid);
        }
      }
    }
  }

  // return Object.keys(mapmarkers).forEach(map => {
  //   console.log("map: ", map);

  //   //cloops through object will all markers and enters if loop when mapid matches the mapiid in the mapmarkers object
  //   if (map === mapid) {
  //     //after selecting the write mapid we can loop through the array of markers
  //     for (let marker of mapmarkers.map) {
  //       // for each long
  //       placeMarker(
  //         { lat: marker.latitude, lng: marker.longitude },
  //         map,
  //         mapid
  //       );
  //     }
  //   }
  // });

  // create a loop using all the markers and place marker
  placeMarker(lhl, map, mapid);
  // on click map event handler
  google.maps.event.addListener(map, "click", function(event) {
    console.log("click detected");
    //console.log(event.latLng);
    placeMarker(event.latLng, map, mapid);
  });
};

// google.maps.event.addDomListener(window, "load", initMap);
