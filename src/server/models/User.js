const { Schema, model } = require('mongoose');

const User = new Schema({
  username: {type: String},
  password: {type: String},
  'tooth-count': {type: Number},
  email: {type: String},
  tooths: {ref: 'Tooth'},
});

model.exports = model('User', User);