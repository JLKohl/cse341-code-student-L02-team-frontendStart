const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;


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
    const contact = await db.collection('Contacts').findOne({ _id: new ObjectId(id) });
    if (!contact) return res.status(404).json({ error: 'Contact not found' });
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

const newContact = async (req, res) => {

  const contactData = {

    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  }

  const response = await mongodb.getDb().db().collection('Contacts').insertOne(contactData);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }

}

const editContact = async (req, res) => {

  const contactId = req.params.id;
  const updates = req.body;

  const response = await mongodb.getDb().db().collection('Contacts').updateOne({ _id: new ObjectId(contactId) },
  { $set: updates });

  if (response.acknowledged) {
    res.status(204).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }
}

const deleteContact = async (req, res) => {
  
  const contactId = req.params.id;

  const response = await mongodb.getDb().db().collection('Contacts').deleteOne({ _id: new ObjectId(contactId) });

  if (response.acknowledged) {
    res.status(200).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }
}


module.exports = { getAllContacts, getContactById, 
  newContact, editContact, deleteContact
 };