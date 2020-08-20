var mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
  lastName: String,
  firstName: String,
  num_cnr: Number,
  grade: String,
  jours_dispo: Number,
  
});

module.exports = mongoose.model('Employee', EmployeeSchema);