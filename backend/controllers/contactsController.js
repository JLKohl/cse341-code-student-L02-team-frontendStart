const mongodb = require('../db/connect');

const getAllContacts = async (req, res, next) => {
  const db = mongodb.getDb().db('Test');
  const result = await db.collection('Contacts').find().toArray();
  res.status(200).json(result);
};

module.exports = { getAllContacts };