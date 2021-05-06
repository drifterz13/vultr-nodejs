import NoteModel from "./model";
import { Note } from "./types";

export async function getNotes(): Promise<Note[]> {
  return NoteModel.find({});
}

export async function createNote(params: {
  title: string;
  completed?: boolean;
}): Promise<Note> {
  return NoteModel.create(params);
}

export async function getNoteById(noteId: string): Promise<Note> {
  return NoteModel.findById(noteId);
}

export async function deleteNoteById(noteId: string): Promise<any> {
  return NoteModel.deleteOne({ _id: noteId });
}

export async function updateNoteById(
  noteId: string,
  update: Partial<Note>
): Promise<Note> {
  return NoteModel.findByIdAndUpdate(noteId, update, { new: true });
}
