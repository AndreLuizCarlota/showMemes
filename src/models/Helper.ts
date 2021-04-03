import mongoose, { Schema, Document } from "mongoose";

const HelperSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

export interface IHelper extends Document {
  amount: Number;
  name: String;
}

export default mongoose.model<IHelper>("Helper", HelperSchema);
