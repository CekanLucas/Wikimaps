/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
module.exports = db => {
  router.get("/", (req, res) => {
    const getAllMaps = function(limit) {
      // 1
      console.log("called");
      const queryParams = [];
      // 2
      let queryString = `
          SELECT * FROM maps
          `;

      // if (options.user_id) {
      //   queryParams.push(options.user_id);
      //   queryString += `AND user_id = $${queryParams.length} `;
      // }

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

    getAllMaps(10)
      .then(maps => {
        res.send({ maps }).catch(err => {
          res.status(500).json({ error: err.message });
        });
      })
      .catch(e => {
        console.error(e);
        res.send(e);
      });

    const getMapsByEmail = function(email, limit) {
      const queryParams = [];
      // 2
      let queryString = `
          SELECT * FROM maps
          WHERE true
          `;

      if (email) {
        queryParams.push(email);
        queryString += `AND user_id = $${queryParams.length} `;
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
  });

  router.get("/new", (req, res) => {
    res.render("map_form", { foo: "test" });
  });

  const createNewMap = function(
    user_id,
    title,
    description,
    image_url,
    active
  ) {
    // 1
    const queryParams = [user_id, title, description, image_url, active];
    // 2
    let queryString = ` INSERT INTO maps (user_id, title, description, image_url, active) VALUES ($1,$2,$3,$4,$5) `;
    //5
    console.log(queryString, queryParams);
    // 6
    return db.query(queryString, queryParams).then(res => res.rows[0]);
  };

  router.post("/", (req, res) => {
    console.log("GOT HERE");
    let data = req.body;
    console.log(data);
    let user_id = 1;
    let active = true;
    createNewMap(user_id, data.title, data.description, data.image_url, active);
    res.send(`<h1> OK</h1>`);
  });
  return router;
};
