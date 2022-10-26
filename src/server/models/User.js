const { Schema, model } = require('mongoose');

const User = new Schema({
  username: {type: String, unique: true, require: true},
  password: {type: String, unique: true, require: true},
  'tooth-count': {type: Number, unique: false, require: true},
  email: {type: String, unique: true, require: false},
  tooths: {ref: 'Tooth', type: String},
});

model.exports = model('User', User);