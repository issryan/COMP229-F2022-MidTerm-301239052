//Ryan Arafeh 301239052
// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
const { create } = require("../models/faculties");
const faculties = require("../models/faculties");

// define the faculty model
let faculty = require("../models/faculties");

/* GET faculties List page. READ */
router.get("/", (req, res, next) => {
  // find all faculties in the faculties collection
  faculty.find((err, faculties) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("faculties/index", {
        title: "Faculties",
        faculties: faculties,
      });
    }
  });
});

//  GET the faculty Details page in order to add a new faculty
router.get("/add", (req, res, next) => {});
res.render("views/faculties/add.ejs"); //render

// POST process the faculty  Details page and create a new faculty  - CREATE
router.post("/add", (req, res, next) => {
  faculty.create((this.name, faculties)) //create
 window.location.href = "/faculties"; //redirect to faculties
});


// GET the faculty  Details page in order to edit an existing faculty
router.get("/:id", (req, res, next) => {
  res.render("views/faculties/details.ejs"); //render
});

// POST - process the information passed from the details form and update the document
router.post("/:id", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
});

// GET - process the delete
router.get("/delete", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
});

module.exports = router;
