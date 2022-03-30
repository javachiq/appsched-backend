const { authJwt } = require('../middleware');
const controller = require('../controllers/doctor.controller');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.get(
    '/api/doctor/appointments',
    [authJwt.verifyToken, authJwt.isDoctor],
    controller.getAppointments
  );

  app.post(
    '/api/doctor/approve-appointment',
    [authJwt.verifyToken, authJwt.isDoctor],
    controller.approveAppointment
  );
};
