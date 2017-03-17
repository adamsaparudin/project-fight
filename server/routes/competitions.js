var express = require('express');
var router = express.Router();

let Competition = require('../controllers/competition')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// User API
router.get('/competitions', Competition.read)
router.post('/competitions', Competition.create)
router.delete('/competitions/:id', Competition.deleteCompetition)
router.put('/competitions/:id', Competition.update)
router.get('/competitions/:id', Competition.findOneList)

module.exports = router;
