
const mongoose = require('mongoose');
const Log = require('../Log');
const uri = "mongodb+srv://dflogs:VmmsUrY8bz9oLPfp@realmcluster.jo8mu.mongodb.net/?retryWrites=true&w=majority";

try {
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
        console.log('db connected') 
  } catch (error) {
    console.log(error)
}

// const db = mongoose.connection;


async function getLogs(){
    // Log.find({}, (err, logs) => {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       console.log(logs[0]);
    //     }
    //   }
    // );
    Log.find({})
    .limit(10)
    .then(logs => {
        console.log(logs)
    })
    .catch(err =>{
        console.log(err)
    })
}
getLogs();

{menuItems.map((Val, id) => {
    return (
      <button
        className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
        key={id}
      >
        {Val}
      </button>
    );
  })}