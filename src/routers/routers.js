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

const router = Router();

router.get('/contacts', crltWrapper(getContactsController));

router.get('/contacts/:contactId', crltWrapper(getContactsByIdController));

router.post('/contacts', crltWrapper(createContactController));

router.delete('/contacts/:contactId', crltWrapper(deleteContactController));

router.put('/contacts/:contactId', crltWrapper(upsertContactController));

router.patch('/contacts/:contactId', crltWrapper(patchStudentController));

export default router;
