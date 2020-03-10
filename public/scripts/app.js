// const db = require("../routes/maps");

$(document).ready(function() {
  console.log("ready!");

  const createMapElement = function(users) {
    let count = 3;
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
      count++;
    }
  };

  $.ajax({
    method: "GET",
    url: "/api/users"
  }).then(users => {
    createMapElement(users.users);
    //global object
    window.maps = {};
    for (let map of users.users) {
      window.maps[map.id] = {
        user_id: map.user_id,
        markers: []
      };
      mapMaker(map.id);
    }
  });
});
