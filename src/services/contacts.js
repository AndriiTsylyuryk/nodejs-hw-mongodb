import { contactModel } from '../db/models/contact.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllContacts = async ({ page, perPage }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;
  const contactsQuery = contactModel.find();
  const contactCount = await contactModel
    .find()
    .merge(contactsQuery)
    .countDocuments();

  const contacts = await contactsQuery.skip(skip).limit(limit).exec();
  const paginationData = calculatePaginationData(contactCount, perPage, page);
  return {
    data: contacts,
    ...paginationData,
  };
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
