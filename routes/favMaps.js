const express = require("express");
const router = express.Router();
module.exports = db => {
  router.get("/", (req, res) => {
    const getFavourites = function(email, limit) {
      const queryParams = [];
      // 2
      let queryString = `
          SELECT * FROM users
          JOIN user_maps ON user_maps.user_id = users.id
          JOIN maps ON maps.id = user_maps.map_id
          WHERE true
          `;

      if (email) {
        queryParams.push(email);
        queryString += `AND users.id = $${queryParams.length} `;
      }

      // 4
      queryParams.push(limit);
      queryString += `
        LIMIT $${queryParams.length};
        `;
      //5
      console.log(queryString, queryParams);
      // 6
      return db.query(queryString, queryParams).then(res => res.rows);
    };
    console.log("cookie is: ", req.cookies["user_id"]);
    getFavourites(Number(req.cookies["user_id"]), 10)
      .then(maps => {
        res.send({ maps });
      })
      .catch(e => {
        console.error(e);
        res.status(500).send(e);
      });
  });

  router.post("/", (req, res) => {
    let user_id = Number(req.cookies["user_id"]);
    let map_id = req.body.mapid;

    //only push if mapid doesn't exist
    const queryParams = [user_id, map_id];
    // 2
    let queryString = ` INSERT INTO user_maps (user_id, map_id) VALUES ($1,$2) returning * `;
    //5
    console.log(queryString, queryParams);
    // 6
    db.query(queryString, queryParams)
      .then(data => res.json(data.rows[0]))
      .catch(e => res.status(500).send(e));
  });
  return router;
};
