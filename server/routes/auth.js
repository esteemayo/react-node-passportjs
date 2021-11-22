const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/login/success', authController.loginSuccess);

router.get('/login/failed', authController.loginFailed);

router.get('/google', authController.google);

router.get('/google/callback', authController.googleCallback);

router.get('/github', authController.github);

router.get('/github/callback', authController.githubCallback);

router.get('/facebook', authController.facebook);

router.get('/facebook/callback', authController.facebookCallback);

router.get('/logout', authController.logout);

module.exports = router;
