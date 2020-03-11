// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const app = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const { formHandling } = require("./formHandling");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(cookieParser());
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  "/styles",
  sass({
    src: __dirname + "/styles",
    dest: __dirname + "/public/styles",
    debug: true,
    outputStyle: "expanded"
  })
);
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const mapsRoutes = require("./routes/maps");
const widgetsRoutes = require("./routes/widgets");
const markersRoutes = require("./routes/markers");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/maps", mapsRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
app.use("/api/markers", markersRoutes(db));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {});

app.post("/login", (req, res) => {
  // check if user and password field is filled in
  const loginEmail = req.body.loginEmail;
  const loginPass = req.body.loginPass;
  if (loginEmail === "" && loginPass === undefined) {
    res.status(403).send("Please fill out email field");
    return;
  }
  if (loginEmail === undefined && loginPass === "") {
    res.status(403).send("Please fill out password field");
    return;
  }

  let query = `SELECT * FROM users;`;
  db.query(query)
    .then(data => {
      formHandling(req, res, data.rows);
      return;
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

app.post("/register", (req, res) => {
  // check if user and password field is filled when registering
  const loginEmail = req.body.loginEmail;
  const loginPass = req.body.loginPass;
  if (loginEmail === "" && loginPass === undefined) {
    res.status(403).send("Please fill out email field");
    return;
  }
  if (loginEmail === undefined && loginPass === "") {
    res.status(403).send("Please fill out password field");
    return;
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
