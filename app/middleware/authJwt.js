const jwt = require('jsonwebtoken');
const config = require('../config/auth.config.js');
const db = require('../models');
const User = db.user;

verifyToken = (req, res, next) => {
  console.log('req-header', req.headers);
  let token = req.headers['x-access-token'];

  if (!token) {
    return res.status(403).send({
      message: 'No token provided!'
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: 'Unauthorized!'
      });
    }
    req.userId = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    console.log(user);
    user.getRoles().then(roles => {
      console.log(roles.length);
      for (let i = 0; i < roles.length; i++) {
        console.log('role', roles[i].name);
        if (roles[i].name === 'admin') {
          next();
          return;
        }
      }

      res.status(403).send({
        message: 'Require Admin Role!'
      });
      return;
    });
  });
};

isScheduler = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'scheduler') {
          next();
          return;
        }
      }

      res.status(403).send({
        message: 'Require Scheduler Role!'
      });
    });
  });
};

isDoctor = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'doctor') {
          next();
          return;
        }
      }

      res.status(403).send({
        message: 'Require Doctor Role!'
      });
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isScheduler: isScheduler,
  isDoctor: isDoctor
};
module.exports = authJwt;