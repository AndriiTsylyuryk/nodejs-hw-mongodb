import createHttpError from 'http-errors';
import {
  createContact,
  getAllContacts,
  getContactsById,
} from '../services/contacts.js';

export const getContactsController = async (req, res) => {
  const contacts = await getAllContacts();
  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactsByIdController = async (req, res, next) => {
  try {
    const contactId = req.params.contactId;
    const contact = await getContactsById(contactId);

    if (!contact) {
      throw createHttpError(404, 'Contact not found');
    }

    res.status(200).json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching contact',
      error: error.message,
    });
  }
};

export const createContactController = async (req, res) => {
  const student = await createContact(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a student!',
    data: student,
  });
};
