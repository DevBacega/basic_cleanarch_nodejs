import { model, Schema, Types } from "mongoose";
import { v4 } from "uuid";

interface User {
    id: string;
    name: string;
    password: string;
    email: string;
}

const schema = new Schema<User>({
    id: { type: String, required: true, default: v4() },
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
  });

  export const UserModel = model<User>('User', schema);

   