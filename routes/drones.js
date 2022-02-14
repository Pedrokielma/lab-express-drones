const express = require('express');
// const { Mongoose } = require('mongoose');
// const { create } = require('../models/Drone.model');
const router = express.Router();
const Drone = require('../models/Drone.model');

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then(allDrones => {
    console.log('Drones list: ', allDrones);
   return res.render('drones/list.hbs', { drones: allDrones })
})  .catch(err => console.log('The error while searching artists occurred: ', err));
 
  // ... your code here
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs")
  // ... your code here
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
    .then((createdDrone) => {
      console.log('Drone created', createdDrone.name);
      res.redirect('/drones')
    })
    .catch((err) => next(err));
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
