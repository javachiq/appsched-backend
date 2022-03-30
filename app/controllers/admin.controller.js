const db = require('../models');
const Users = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;

exports.getUsers = (req, res) => {
  Users.findAll({
    include: {
      model: Role,
      where: {
        id: {
          [Op.ne]: 1
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
