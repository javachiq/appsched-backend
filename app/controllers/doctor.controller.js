const db = require('../models');
const Appointment = db.appointments;
const Op = db.Sequelize.Op;

exports.getAppointments = (req, res) => {
  console.log(req.userId);
  Appointment.findAll({
    where: {
      doctorId: req.userId
    }
  })
    .then(appointments => {
      res.status(200).send(appointments);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
exports.approveAppointment = (req, res) => {
  const appId = req.body.params.id;
  Appointment.update(
    {
      status: 'APPROVED'
    },
    {
      where: {
        id: {
          [Op.eq]: appId
        }
      }
    }
  )
    .then(appointment => {
      res.send({ message: 'Approve Appointment Success!' });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
