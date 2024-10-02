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

router.get('/', crltWrapper(getContactsController));

router.get('/:contactId', isValidId, crltWrapper(getContactsByIdController));

router.post(
  '/register',
  validateBody(createContactSchema),
  crltWrapper(createContactController),
);

router.delete('/:contactId', isValidId, crltWrapper(deleteContactController));

router.put(
  '/:contactId',
  isValidId,
  validateBody(createContactSchema),
  crltWrapper(upsertContactController),
);

router.patch(
  '/:contactId',
  isValidId,
  validateBody(updateContactSchema),
  crltWrapper(patchStudentController),
);

export default router;
