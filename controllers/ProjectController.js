var mongoose = require("mongoose");
var Project= require("../models/Project");
var projectcontroller = {};
// Show list of projects.
projectcontroller.list = function(req, res) {
    Project.find({}).exec(function (err, projects) {
      if (err) {
        console.log("Error:", err);
      }
      else {
        res.render("../views/projects/index", {projects: projects});
      }
    });
  };