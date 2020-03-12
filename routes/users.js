/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();

const createMapElement = function(mapsObject) {
  for (let map in mapsObject) {
    $("#map-container").append(`
    <div id="map2" class='map map-item' style='width: 100%; height: 100%;'></div>
    <h3 class=map-name title='view map'> ${map.email}</h3>
    <span class=user-handle title="go to user's maps"> ${map.title} <i class="fas fa-atlas"></i></span><br>
    <a class=map-option href="http://" title='Favourite Map'><i class="fas fa-heart"></i></a>
    <a class=map-option href="http://" title='Delete Map'><i class="fas fa-times"></i></a>
    <a class=map-option href="http://" title='Add pins from Map'><i class="fas fa-map-marked"></i></a>
    <a class=map-option href="http://" title='Remove Pins from Map'><i class="far fa-map"></i></a>
    <a class=map-option href="http://" title='Edit Map'><i class="fas fa-edit"></i></a>
    </article>
  `);
  }
};

module.exports = db => {
  router.get("/", (req, res) => {
    db.query(
      `SELECT * FROM users
    JOIN maps on maps.user_id =users.id
    ORDER BY maps.id DESC
    ;`
    )
      .then(data => {
        const users = data.rows;
        res.send({
          users
        });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
