const { authJwt } = require('../middleware');
const controller = require('../controllers/scheduler.controller');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.get(
    '/api/scheduler/appointments',
    [authJwt.verifyToken, authJwt.isScheduler],
    controller.getAppointments
  );

  app.get(
    '/api/scheduler/appointment',
    [authJwt.verifyToken, authJwt.isScheduler],
    controller.getAppointment
  );

  app.post(
    '/api/scheduler/delete-appointment',
    [authJwt.verifyToken, authJwt.isScheduler],
    controller.deleteAppointment
  );
  app.post(
    '/api/scheduler/update-appointment',
    [authJwt.verifyToken, authJwt.isScheduler],
    controller.editAppointment
  );

  app.post(
    '/api/scheduler/appointment',
    [authJwt.verifyToken, authJwt.isScheduler],
    controller.createAppointment
  );

  app.get(
    '/api/scheduler/getDoctors',
    [authJwt.verifyToken, authJwt.isScheduler],
    controller.getDoctors
  );
};
