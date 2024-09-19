import { Router } from 'express';
import {
  getContactsByIdController,
  getContactsController,
} from '../controllers/students.js';
import { crltWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/contacts', crltWrapper(getContactsController));

router.get('/contacts/:contactId', crltWrapper(getContactsByIdController));

export default router;
