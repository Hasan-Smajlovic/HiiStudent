const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllers.js");
const { route } = require("./auth.js");

router.get("/jobsBih", controller.getJobsBih);

router.get("/jobsEurope", controller.getJobsEurope);

router.get("/internshipsBih", controller.getInternshipsBih);

router.get("/internshipsEurope", controller.getInternshipsEurope);

router.get("/announcements", controller.getAnnouncements);

module.exports = router;
