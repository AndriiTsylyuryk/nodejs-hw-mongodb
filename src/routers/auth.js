import { Router } from 'express';
import {
  loginUserController,
  logoutUserController,
  refreshUserSessionController,
  registerUserController,
} from '../controllers/auth.js';
import { validateBody } from '../middlewares/validateBody.js';
import { crltWrapper } from '../utils/ctrlWrapper.js';
import { registerUserSchema } from '../validation/contacts.js';
import { loginUserSchema } from '../validation/auth.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  crltWrapper(registerUserController),
);
router.post(
  '/login',
  validateBody(loginUserSchema),
  crltWrapper(loginUserController),
);
router.post('/logout', crltWrapper(logoutUserController));
export default router;

router.post('/refresh', crltWrapper(refreshUserSessionController));
