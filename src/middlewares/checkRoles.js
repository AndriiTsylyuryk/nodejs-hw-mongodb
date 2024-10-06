import createHttpError from 'http-errors';
import { ROLES } from '../constants/index.js';
import { contactModel } from '../db/models/contact.js';

export const checkRoles =
  (...roles) =>
  async (req, res, next) => {
    const { user } = req;
    if (!user) {
      next(createHttpError(401));
      return;
    }

    const { role } = user;
    if (roles.includes(ROLES.USER) && role === ROLES.USER) {
      next();
      return;
    }

    if (roles.includes(ROLES.CONTACT) && role === ROLES.CONTACT) {
      const { contactId } = req.params;

      if (!contactId) {
        next(createHttpError(403));
        return;
      }

      const contact = await contactModel.findOne({
        _id: contactId,
        parcontactId: user._id,
      });

      if (contact) {
        next();
        return;
      }
    }

    next(createHttpError(403));
  };
