const db = require("./lib/db.js");

/// Users
/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser = function(user) {
  return db
    .query(
      `
  INSERT INTO users (name, email, password)
  VALUES ($1,$2,$3)
  RETURNING *;
  `,
      [user.name, user.email, user.password]
    )
    .then(res => res.rows[0]);
};
exports.addUser = addUser;

/**
 * Add a map to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */

const addMap = function(map) {
  return db
    .query(
      `
    INSERT INTO maps (user_id, title, description, image_url, active) VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    `, [ map.user_id, map.title, map.description, map.image_url, map.active ]
    )
    .then(res => res.rows[0]);
};
exports.addMap = addMap;

/// Maps

/**
 * Get all maps.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */

const getAllMaps = function(options, limit = 10) {
  // 1
  const queryParams = [];
  // 2
  let queryString = `
    SELECT * FROM maps
    `;
  // 4
  queryParams.push(limit);
  //5
  console.log(queryString, queryParams);
  // 6
  return db.query(queryString, queryParams).then(res => res.rows);
};
exports.getAllMaps = getAllMaps;

