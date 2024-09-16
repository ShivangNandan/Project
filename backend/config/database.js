const mongoose = require('mongoose');

const connectDatabase=()=>{
  mongoose.connect(process.env.db_url, { useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  serverSelectionTimeoutMS: 30000, // Example: Extend timeout to 30 seconds
  socketTimeoutMS: 45000 
  }).then((data)=>{
    console.log(`Database Connected to server:${data.connection.host}`);
  }).catch((error)=>{
    console.log( error);
  })
}
module.exports=connectDatabase;