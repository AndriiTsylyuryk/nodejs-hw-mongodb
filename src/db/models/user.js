import { required, string } from 'joi';
import { model, Schema } from 'mongoose';

const usersSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: string, required: true },
  },
  { timestamps: true, versionKey: false },
);

export const UsersCollections = model('users', usersSchema);
