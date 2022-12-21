import mongo from 'mongodb';
import mongoose from 'mongoose';
const uri = "mongodb+srv://dflogs:VmmsUrY8bz9oLPfp@realmcluster.jo8mu.mongodb.net/?retryWrites=true&w=majority";
import Log from './Log.js';
try {
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
        console.log('db connected') 
  } catch (error) {
    console.log(error)
  }

  setTimeout(async() => {
    await Log.create({LastIteration: 'test'})
  }, 4000);