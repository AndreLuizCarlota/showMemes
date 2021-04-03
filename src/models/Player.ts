import mongoose, { Schema, Document } from "mongoose";
import { IHelper } from "./Helper";

const PlayerSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  helpers: {
    type: [Object],
    require: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export interface IPlayer extends Document {
  helpers: Array<IHelper>;
  email: String;
  name: String;
  age: Number;
}

export default mongoose.model<IPlayer>("Player", PlayerSchema);
