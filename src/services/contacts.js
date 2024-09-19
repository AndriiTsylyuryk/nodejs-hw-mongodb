import { contactModel } from '../db/models/contact.js';

export const getAllContacts = async () => {
  const contacts = await contactModel.find();
  return contacts;
};

export const getContactsById = async (contactId) => {
  const contact = await contactModel.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  const contact = await contactModel.create(payload);
  return contact;
};
