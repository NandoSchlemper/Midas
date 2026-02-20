import { Schema } from 'mongoose';
import { UserDocument } from './user.types';

const userSchema = new Schema<UserDocument>({
  name: {
    type: String,
    required: [true, 'Nome é obrigatório'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'E-mail é obrigatório'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'E-mail inválido'],
  },
  password: {
    type: String,
    required: [true, 'Senha é obrigatória'],
    minlength: [6, 'A senha deve ter no mínimo 6 caracteres'],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default userSchema;