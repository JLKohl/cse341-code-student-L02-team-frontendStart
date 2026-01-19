const mongodb = require('../db/connect');

const getAllContacts = async (req, res, next) => {
  const db = mongodb.getDb().db('Test');
  const result = await db.collection('Contacts').find().toArray();
  res.status(200).json(result);
};

// contactsController.js
const getContactById = async (req, res) => {
  try {
    const db = require('../db/connect').getDb().db('Test');
    const id = req.params.id; // gets the value from the URL
    const ObjectId = require('mongodb').ObjectId;
    const contact = await db.collection('Contacts').findOne({ _id: new ObjectId(id) });
    if (!contact) return res.status(404).json({ error: 'Contact not found' });
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};


module.exports = { getAllContacts, getContactById };