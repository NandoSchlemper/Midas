import { Document, Model } from 'mongoose';

export interface User {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

export interface UserDocument extends User, Document {}

export interface UserModel extends Model<UserDocument> {}