import { SORT_ORDER } from '../constants/index.js';
import { contactModel } from '../db/models/contact.js';
import { UsersCollections } from '../db/models/user.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllContacts = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter = {},
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const contactsQuery = contactModel.find({ userId: filter.userId });
  if (filter.type) {
    contactsQuery.where('contactType').equals(filter.type);
  }
  if (filter.isFavourite) {
    contactsQuery.where('isFavourite').equals(filter.isFavourite);
  }

  const [contactCount, contacts] = await Promise.all([
    contactModel.find().merge(contactsQuery).countDocuments(),
    contactsQuery
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);

  const paginationData = calculatePaginationData(contactCount, page, perPage);
  return {
    data: contacts,
    ...paginationData,
  };
};

export const getContactsById = async ({ _id, userId }) => {
  const contact = await contactModel.findOne({ _id, userId });
  return contact;
};

export const createContact = async (payload) => {
  const contact = await contactModel.create(payload);
  return contact;
};

export const deleteContact = async (contactId, userId) => {
  const contact = await contactModel.findOneAndDelete({
    _id: contactId,
    userId,
  });
  return contact;
};

export const updateContact = async (
  contactId,
  payload,
  userId,
  options = {},
) => {
  const rawResult = await contactModel.findByIdAndUpdate(
    { _id: contactId, userId },
    payload,
    { new: true, includeResultMetadata: true, ...options },
  );
  if (!rawResult || !rawResult.value) return null;
  return {
    contact: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};
