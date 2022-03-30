exports.allAccess = (req, res) => {
  res.status(200).send('Welcome to Appointment Scheduler!');
};

exports.userBoard = (req, res) => {
  res.status(200).send('OK');
};

exports.adminBoard = (req, res) => {
  res.status(200).send('Admin Content.');
};

exports.schedulerBoard = (req, res) => {
  res.status(200).send('Scheduler Content.');
};

exports.doctorBoard = (req, res) => {
  res.status(200).send('Doctor Content');
};
