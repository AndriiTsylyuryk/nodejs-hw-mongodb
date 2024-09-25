import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getContactsByIdController,
  getContactsController,
  patchStudentController,
  upsertContactController,
} from '../controllers/contacts.js';
import { crltWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get('/contacts', crltWrapper(getContactsController));

router.get(
  '/contacts/:contactId',
  isValidId,
  crltWrapper(getContactsByIdController),
);

router.post(
  '/contacts',
  validateBody(createContactSchema),
  crltWrapper(createContactController),
);

router.delete(
  '/contacts/:contactId',
  isValidId,
  crltWrapper(deleteContactController),
);

router.put(
  '/contacts/:contactId',
  isValidId,
  validateBody(createContactSchema),
  crltWrapper(upsertContactController),
);

router.patch(
  '/contacts/:contactId',
  isValidId,
  validateBody(updateContactSchema),
  crltWrapper(patchStudentController),
);

export default router;
