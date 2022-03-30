const db = require('../models');
const Appointment = db.appointments;
const Users = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;

exports.editAppointment = (req, res) => {
  const data = req.body.data;
  Appointment.update(
    {
      doctorId: data.doctorId,
      slot: data.slot
    },
    {
      where: {
        id: {
          [Op.eq]: data.id
        }
      }
    }
  )
    .then(appointment => {
      res.send({ message: 'Update Appointment Success!' });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.createAppointment = (req, res) => {
  const data = req.body.data;
  Appointment.create({
    patient: data.patient,
    doctorId: data.doctorId,
    slot: data.slot,
    status: 'PENDING'
  })
    .then(appointment => {
      res.send({ message: 'Create Appointment Success!' });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.getAppointments = (req, res) => {
  Appointment.findAll({
    attributes: ['id', 'patient', 'doctorId', 'slot', 'status']
  })
    .then(appointments => {
      res.status(200).send(appointments);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.getAppointment = (req, res) => {
  const appId = req.query.appId;
  Appointment.findAll({
    where: {
      id: appId
    }
  })
    .then(appointment => {
      res.status(200).send(appointment);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.deleteAppointment = (req, res) => {
  const data = req.body.data;
  Appointment.destroy({
    where: {
      id: data
    }
  })
    .then(appointments => {
      res.status(200).send({ message: 'Delete Appointment Success!' });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.getDoctors = (req, res) => {
  Users.findAll({
    include: {
      model: Role,
      where: {
        id: {
          [Op.eq]: 3
        }
      }
    }
  })
    .then(users => {
      res.status(200).send(users);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
