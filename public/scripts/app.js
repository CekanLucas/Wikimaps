$(document).ready(function() {
  console.log("ready!");

  const createMapElement = function(users) {
    for (let map of users) {
      $("#map-container").append(`
      <article class=map-grid>
      <div id="${map.id}" class='map map-item' style='width: 100%; height: 100%;'></div>
      <h3 class=map-name title='view map'>${map.title}</h3>
            <span class=user-handle title="go to user's maps"> ${map.email} <i class="fas fa-atlas"></i></span><br>
            <a class=map-option href="http://" title='Favourite Map'><i class="fas fa-heart"></i></a>
            <a class=map-option href="http://" title='Delete Map'><i class="fas fa-times"></i></a>
            <a class=map-option href="http://" title='Add pins from Map'><i class="fas fa-map-marked"></i></a>
            <a class=map-option href="http://" title='Remove Pins from Map'><i class="far fa-map"></i></a>
            <a class=map-option href="http://" title='Edit Map'><i class="fas fa-edit"></i></a>
          </article>
    `);
    }
  };

        $.ajax({
    method: "GET",
    url: "/api/users"
  }).then(users => {
    createMapElement(users.users);
    window.maps = {};
    window.mapmarkers = {};
    $.ajax({
      method: "GET",
      url: "/api/markers"
    }).then(response => {
      for (let marker of response.markers) {
        // console.log(marker);
        if (mapmarkers[marker.map_id]) mapmarkers[marker.map_id].push(marker);
        else mapmarkers[marker.map_id] = [marker];
      }
      console.log(mapmarkers);
    });

    for (let map of users.users) {
      window.maps[map.id] = {
        user_id: map.user_id,
        markers: []
      };
      let randHue = Math.random() * 360;
      mapMaker(map.id);
      //alter mapMaker function to renderpointers for each map
      $(`#${map.id}`).css('filter', `invert(1) sepia(0.8) hue-rotate(${randHue}deg)`);
    }
  });
});
