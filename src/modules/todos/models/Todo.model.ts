import mongoose, { Schema } from "mongoose";

export interface ITodo extends Document {
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
  user: mongoose.Types.ObjectId;
}

const TodoSchema: Schema = new Schema<ITodo>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String },
    completed: { type: Boolean, default: false },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  {
    timestamps: true, 
  }
);

export const TodoModel = mongoose.model<ITodo>('Todo', TodoSchema);