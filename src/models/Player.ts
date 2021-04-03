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
  score: {
    default: 0,
    type: Number,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export interface IPlayer extends Document {
  helpers: Array<IHelper>;
  score: Number;
  email: String;
  name: String;
  age: Number;
}

export default mongoose.model<IPlayer>("Player", PlayerSchema);
