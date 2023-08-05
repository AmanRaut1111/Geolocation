const express= require('express');
const { addlocation, getNearestLocation } = require('../controller/locationController');


const locationRouter= express.Router();

locationRouter.post('/',addlocation);

locationRouter.get('/nearbylocations',getNearestLocation);

module.exports=locationRouter;