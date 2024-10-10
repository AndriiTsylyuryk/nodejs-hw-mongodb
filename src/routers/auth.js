import { Router } from 'express';
import {
  loginUserController,
  logoutUserController,
  refreshUserSessionController,
  registerUserController,
  requestResetEmailController,
  resetPasswordController,
} from '../controllers/auth.js';
import { validateBody } from '../middlewares/validateBody.js';
import { crltWrapper } from '../utils/ctrlWrapper.js';
import { registerUserSchema } from '../validation/contacts.js';
import {
  loginUserSchema,
  requestResetEmailSchema,
  resetPasswordSchema,
} from '../validation/auth.js';

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

router.post('/refresh', crltWrapper(refreshUserSessionController));

router.post(
  '/request-reset-email',
  validateBody(requestResetEmailSchema),
  crltWrapper(requestResetEmailController),
);
router.post(
  '/reset-password',
  validateBody(resetPasswordSchema),
  crltWrapper(resetPasswordController),
);
export default router;
