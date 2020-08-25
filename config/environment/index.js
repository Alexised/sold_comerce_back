
const all = {
  env: process.env.NODE_ENV,


  port: process.env.PORT || 8080,



  seedDB: false,


  secrets: {
    session: 'full5tack-j4v45cr1pt',
  },

  // MongoDB connection options
  mongo: {
    uri: process.env.MONGODB_URI || "mongodb://alexis:BtWnWUnAN5yyihXk@cluster0-shard-00-00.6nhhn.mongodb.net:27017,cluster0-shard-00-01.6nhhn.mongodb.net:27017,cluster0-shard-00-02.6nhhn.mongodb.net:27017/soldcomerce?ssl=true&replicaSet=atlas-w8txk5-shard-0&authSource=admin&retryWrites=true&w=majority",
    db: 'soldcomerce',
  },
};


module.exports = all;
