const passport = require('passport');
const { StatusCodes } = require('http-status-codes');

const CLIENT_URL = 'http://localhost:3000/';

exports.loginSuccess = (req, res) => {
  if (req.user) {
    res.status(StatusCodes.OK).json({
      status: 'success',
      success: true,
      message: 'Successful',
      user: req.user,
      //   cookies: req.cookies,
    });
  }
};

exports.loginFailed = (req, res) => {
  res.status(StatusCodes.UNAUTHORIZED).json({
    status: 'fail',
    success: false,
    message: 'Failure',
  });
};

exports.google = passport.authenticate('google', { scope: ['profile'] });

exports.googleCallback = passport.authenticate('google', {
  successRedirect: CLIENT_URL,
  failureRedirect: '/login/failed',
});

exports.github = passport.authenticate('github', { scope: ['user:email'] });

exports.githubCallback = passport.authenticate('github', {
  successRedirect: CLIENT_URL,
  failureRedirect: '/login/failed',
});

exports.facebook = passport.authenticate('facebook');

exports.facebookCallback = passport.authenticate('facebook', {
  successRedirect: CLIENT_URL,
  failureRedirect: '/login/failed',
});

exports.logout = (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
};
