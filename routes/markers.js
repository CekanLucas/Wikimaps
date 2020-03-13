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
    db.query(
      `SELECT * FROM maps
    JOIN pointers on pointers.map_id =maps.id
    ORDER BY maps.user_id;`
    )
      .then(data => {
        const markers = data.rows;
        res.send({
          markers
        });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
    router.post("/delete/:id", (req, res) => {
      console.log("server check ", req.params.id);
      return db.query(`DELETE FROM pointers WHERE id = $1`, [req.params.id]);
    });

    // router.post("/edit/:id", (req, res) => {
    //   console.log("server check ", req.params.id);
    //   return db.query(
    //     `
    //   DELETE FROM pointers WHERE id = $1
    //   INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES ($2,$3,$4,$5,$6,$7,$8)
    //   `,
    //     [req.params.id,]
    //   );
    // });
  });
  return router;
};
