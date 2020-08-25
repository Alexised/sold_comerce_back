

const compression = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const errorHandler = require('errorhandler');
const logger = require('morgan');
// New Lines
const connectMongo = require('connect-mongo');
const session = require('express-session');
const passport = require('passport');

const config = require('./environment');

const MongoStore = connectMongo(session);

module.exports = (app) => {
  const env = app.get('env');

  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(methodOverride());
  app.use(logger('dev'));
  // New line
  app.use(passport.initialize());
  // New line
  app.use(session({
    secret: config.secrets.session,
    saveUninitialized: true,
    resave: false,
    store: new MongoStore({
      url: config.mongo.uri,
    }),
  }));


  if (env === 'development' || env === 'test') {
    app.use(errorHandler()); // Error handler - has to be last
  }
};
