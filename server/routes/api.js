var express = require('express');
var router = express.Router();

let User = require('../controllers/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// User API
router.get('/users', User.read)
router.post('/users', User.create)
router.get('/users/:id', User.getOne)

module.exports = router;
