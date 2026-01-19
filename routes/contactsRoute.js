const express = require('express');

const contactsController = require('../controllers/contactsController');

const router = express.Router();

router.get('/', contactsController.getAllContacts);

router.get('/:id', contactsController.getContactById);

module.exports = router;