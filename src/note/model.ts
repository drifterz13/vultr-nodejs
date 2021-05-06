import mongoose from "mongoose";
import { Note } from "./types";

const model = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

export default mongoose.model<Note & mongoose.Document>("NoteModel", model);
