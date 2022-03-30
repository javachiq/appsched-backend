module.exports = (sequelize, Sequelize) => {
  const Appointment = sequelize.define('appointments', {
    patient: {
      type: Sequelize.STRING
    },
    doctorId: {
      type: Sequelize.INTEGER
    },
    slot: {
      type: Sequelize.DATE
    },
    status: {
      type: Sequelize.STRING
    }
  });

  return Appointment;
};
