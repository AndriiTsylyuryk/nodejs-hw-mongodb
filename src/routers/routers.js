import { Router } from 'express';
import {
  createContactController,
  getContactsByIdController,
  getContactsController,
} from '../controllers/students.js';
import { crltWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/contacts', crltWrapper(getContactsController));

router.get('/contacts/:contactId', crltWrapper(getContactsByIdController));

router.post('/contacts', crltWrapper(createContactController));

export default router;
