import { model, Schema } from 'mongoose';

const contactSchema = new Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String },
    isFavourite: { type: Boolean, default: false },
    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      default: 'personal',
      required: true,
    },
    userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    photo: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const contactModel = model('contacts', contactSchema);
