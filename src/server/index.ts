import express from 'express';
import mongoose from 'mongoose';
import authRouter from './auth/router';

const app = express();
const port = process.env.PORT ?? 2000;

app.use(express.json());
app.use('/auth', authRouter);


async function start(){
  try {
    await mongoose.connect('mongodb://localhost:27017/mytoothhistory');
    app.listen(port,() => {
      console.log(`App listening on port ${port}`);
    });
  } catch(e) {
    console.log(e);
  }
}

app.get('', (request, response) => {
  try {
    response.send('hello tooth');
  } catch(error){
    console.error(error);
  }
})

start();