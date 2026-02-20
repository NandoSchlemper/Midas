import mongoose from 'mongoose';
import userSchema from './user/user.schema'; 
import { UserDocument, UserModel } from './user/user.types';

interface Models {
  User: UserModel;
}

let connection: mongoose.Connection | null = null;

export function databaseModule(): mongoose.Connection {
  if (connection) {
    console.log('Reutilizando conexão existente com o MongoDB');
    return connection;
  }

  const MONGODB_URI = process.env.MONGODB_URI;
  if (!MONGODB_URI) {
    throw new Error('Erro ao carregar variáveis de ambiente necessárias: MONGODB_URI não definida');
  }

  // Ops: remover as obsoletas se estiver usando Mongoose 6+
  connection = mongoose.createConnection(MONGODB_URI);

  connection.on('connected', () => {
    console.log('Conectado ao MongoDB');
  });

  connection.on('error', (err) => {
    console.error('Erro na conexão MongoDB:', err);
  });

  // Registry
  connection.model<UserDocument>('User', userSchema);

  return connection;
}

export function getModel<T extends keyof Models>(name: T): Models[T] {
  if (!connection) {
    throw new Error('Banco de dados não inicializado. Chame databaseModule() primeiro.');
  }
  return connection.model(name) as Models[T];
}
