module.exports = (sequelize, Sequelize) => {
  const Doctors = sequelize.define('doctors', {
    userId: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.STRING
    }
  });

  return Doctors;
};
