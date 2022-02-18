"use strict";
// mongo -u "root" -p "$iloveblockchain" --authenticationDatabase  "admin"
const fs = require('fs');

// var ca = [fs.readFileSync("rds-combined-ca-bundle.pem")];
class MongoDatabase {
    constructor() {
       this.mongoose = require('mongoose')
    }
    connectDB() { 
      const {
        MONGO_USERNAME,
        MONGO_PASSWORD,
        MONGO_HOSTNAME,
        MONGO_PORT,
        MONGO_DB
      } = process.env;
    // const db = 'mongodb://root:$iloveblockchain@localhost:27017/blockchain?authSource=admin'  
    // const db = 'mongodb://localhost:27017/blockchain?'  // Docker mongo run -p 27017:27017 mongo:latest
    const db = process.env.MONGODB_URL

    const options = {
        //   sslCA: ca,
          useNewUrlParser: true,
        //   reconnectTries: Number.MAX_VALUE,
        //   reconnectInterval: 500,
          connectTimeoutMS: 10000,
          useUnifiedTopology: true
        };
        this.mongoose.connect(db, options).then( function() {
          console.log("MongoDb Connection succesfull...")
        })
          .catch( function(err) {
          console.error(err);
        });
       const mongoConn = this.mongoose.connection;
        return mongoConn;
    }
}
module.exports = new MongoDatabase().connectDB();
