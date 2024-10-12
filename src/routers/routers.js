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
import { authenticate } from '../middlewares/authenticate.js';
import { checkRoles } from '../middlewares/checkRoles.js';
import { ROLES } from '../constants/index.js';
import { upload } from '../middlewares/multer.js';
const router = Router();

router.use(authenticate);

router.get('/', checkRoles(ROLES.USER), crltWrapper(getContactsController));

router.get(
  '/:contactId',
  isValidId,
  checkRoles(ROLES.USER),
  crltWrapper(getContactsByIdController),
);

router.post(
  '/',
  checkRoles(ROLES.USER),
  upload.single('photo'),
  validateBody(createContactSchema),
  crltWrapper(createContactController),
);

router.delete(
  '/:contactId',
  isValidId,
  checkRoles(ROLES.USER),
  crltWrapper(deleteContactController),
);

router.put(
  '/:contactId',
  isValidId,
  upload.single('photo'),
  checkRoles(ROLES.USER),
  validateBody(createContactSchema),
  crltWrapper(upsertContactController),
);

router.patch(
  '/:contactId',
  isValidId,
  upload.single('photo'),
  checkRoles(ROLES.USER),
  validateBody(updateContactSchema),
  crltWrapper(patchStudentController),
);

export default router;
