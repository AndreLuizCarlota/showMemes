import mongoose, { Schema, Document } from "mongoose";

const AskingSchema: Schema = new Schema({
  description: {
    type: String,
    required: true,
  },
  answer: {
    type: [String],
    require: true,
  },
  createdAt: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

export interface IAsking extends Document {
  answer: Array<String>;
  description: String;
}

export default mongoose.model<IAsking>("Asking", AskingSchema);
