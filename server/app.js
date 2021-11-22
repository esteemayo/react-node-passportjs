const express = require('express');
const morgan = require('morgan');
const cookieSession = require('cookie-session');
const passport = require('passport');
const cors = require('cors');
const compression = require('compression');

// passport config
require('./config/passport');

// requiring routes
const authRoute = require('./routes/auth');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })
);

// development loggings
if (app.get('env') === 'development') {
  app.use(morgan('dev'));
}

// cookie session middleware
app.use(
  cookieSession({
    name: 'session',
    keys: [process.env.COOKIE_SESSION_KEY],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

// passport middlewares
app.use(passport.initialize());
app.use(passport.session());

// compression middleware
app.use(compression());

app.use('/auth', authRoute);

module.exports = app;
