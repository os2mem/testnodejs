'use strict';

const Authcontroller = require('../controllers/auth-controller'),
  express = require('express'),
  router = express.Router(),
  ac = new Authcontroller();

router
  .get('/', ac.index)
  .get('/login', ac.logInGet)
  .post('/login', ac.logInPost)
  .get('/signin' , ac.signInGet)
  .post('/signin' , ac.signInPost)
  .get('/logout', ac.logOut);


module.exports = router;