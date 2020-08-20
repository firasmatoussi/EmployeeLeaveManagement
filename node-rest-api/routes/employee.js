var express = require('express');
var router = express.Router();

var Employee = require('../models/Employee.js');

/* GET ALL  */

router.get('/', function(req, res, next) {
    Employee.find(function (err, employees) {
    if (err) return next(err);
    res.json(employees);
  });
});

/* GET SINGLE  BY ID */
router.get('/employee/:id', function(req, res, next) {
    Employee.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE  */
router.post('/', function(req, res, next) {
    Employee.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

/* UPDATE  */
router.put('/:id', function(req, res, next) {
    Employee.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE  */
router.delete('/:id', function(req, res, next) {
    Employee.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;