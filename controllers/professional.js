const mongodb = require('../db/connect');

const getData = async (req, res, next) => {
  const db = mongodb.getDb().db('Test');
  const result = await db.collection('TeamAssignment').find().toArray();
  res.status(200).json(result[0]);
};

module.exports = { getData };