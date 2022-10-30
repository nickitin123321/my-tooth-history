import { Schema, model } from 'mongoose'


const Tooth = new Schema({
  diseases: {ref: 'Disease', type: String},
});

export default model('Tooth', Tooth)