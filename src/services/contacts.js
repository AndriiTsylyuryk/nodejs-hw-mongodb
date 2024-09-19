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

export const deleteContact = async (contactId) => {
  const contact = await contactModel.findOneAndDelete({
    _id: contactId,
  });
  return contact;
};

export const updateContact = async (contactId, payload, options = {}) => {
  const rawResult = await contactModel.findByIdAndUpdate(
    { _id: contactId },
    payload,
    { new: true, includeResultMetadata: true, ...options },
  );
  if (!rawResult || !rawResult.value) return null;
  return {
    contact: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};
