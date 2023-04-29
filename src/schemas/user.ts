import { Schema, model, Document } from 'mongoose';

export interface userInterface extends Document {
 name: string,
 email: string,
 password: string,
 creation: Date
}

const userSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'Nome obrigatório'],
  },
  email: {
    type: String,
    required: [true, 'E-mail obrigatório'],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Senha obrigatório'],
    select: false,
  },
  creation: {
    type: Date,
    default: Date.now,
  },
});

export default model<userInterface>('User', userSchema);
