const express = require('express');

const contactsController = require('../controllers/contactsController');

const router = express.Router();

router.get('/', contactsController.getAllContacts);

router.get('/:id', contactsController.getContactById);

router.post('/', contactsController.newContact);

router.put('/:id', contactsController.editContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;