import express from "express";
import {
  updateNoteById,
  createNote,
  getNoteById,
  getNotes,
  deleteNoteById,
} from "./NoteData";
import { validateNoteBody } from "./validators";

const router = express.Router();

router.get("/", async (req, res) => {
  const notes = await getNotes();
  res.status(200).json({ data: { notes } });
});

router.get("/:id", async (req, res) => {
  const note = await getNoteById(req.params.id);
  res.status(200).json({ data: { note } });
});

router.post("/", validateNoteBody, async (req, res) => {
  const { title, completed = false } = req.body;
  const note = await createNote({ title, completed });
  res.status(200).json({ data: { note } });
});

router.patch("/:id", validateNoteBody, async (req, res) => {
  const { title, completed } = req.body;
  const update = {
    ...(title ? { title } : {}),
    ...(completed ? { completed } : {}),
  };
  const note = await updateNoteById(req.params.id, update);
  res.status(200).json({ data: { note } });
});

router.delete("/:id", async (req, res) => {
  await deleteNoteById(req.params.id);
  res.status(200).json({ success: true });
});

export default router;
