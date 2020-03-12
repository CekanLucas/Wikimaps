$(document).ready(function() {
  console.log("ready!");
  $.ajax({
    method: "GET",
    url: "/api/maps/user"
  }).then(users => {
    console.log(users);
    createMapElement(users.users);
    window.maps = {};
    mapmarkers = {};

    $.ajax({
      method: "GET",
      url: "/api/markers"
    }).then(response => {
      for (let marker of response.markers) {
        let map_id = marker.map_id;
        if (mapmarkers[map_id]) {
          mapmarkers[map_id].push(marker);
        } else {
          mapmarkers[map_id] = [marker];
        }
      }
      for (let map of users.users) {
        window.maps[map.id] = {
          user_id: map.user_id,
          markers: []
        };
        mapMaker(map.id, mapmarkers);
      }
    });

    for (let map of users.users) {
      window.maps[map.id] = {
        user_id: map.user_id,
        markers: []
      };
      let randHue = Math.random() * 360;
      mapMaker(map.id);
      //alter mapMaker function to renderpointers for each map
      $(`#${map.id}`).css(
        "filter",
        `invert(1) sepia(0.8) hue-rotate(${randHue}deg)`
      );
    }
  });
});
