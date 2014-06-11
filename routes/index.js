var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/BuzzerTest');
var User = require('../models/User');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


/*POST register. */
router.post('/register', function(req, res) {
  var user = new User({
    name: req.body.name,
    email: req.body.email
    
  });
  user.save(function(err){
    if(err) {console.log("Error inserting user", err);}
    res.render('members', {title:'Members Home'});
});    
                     
});