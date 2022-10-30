import { Schema, model } from 'mongoose';

const User = new Schema({
  username: {type: String, unique: true, require: true},
  passwordHash: {type: String, unique: false, require: true},
  toothCount: {type: Number, unique: false, require: false},
  email: {type: String, unique: true, require: true},
  tooths: {ref: 'Tooth', type: String},
});

export default model('User', User);