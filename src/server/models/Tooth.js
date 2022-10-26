const { Schema, model } = require('mongoose');

const Tooth = new Schema({
  diseases: {ref: 'Disease', type: String},
});

model.exports = model('Tooth', Tooth)