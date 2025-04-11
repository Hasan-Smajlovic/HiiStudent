const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers.js')

router.get('/jobsBih', controller.getJobsBih);

router.get('/jobsEurope', controller.getJobsEurope);

router.get('/internshipsBih', controller.getInternshipsBih);

router.get('/internshipsEurope', controller.getInternshipsEurope);


module.exports = router;