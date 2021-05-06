import { body, check, validationResult } from "express-validator";

export const validateNoteBody = [
  body("title").isString().exists(),
  body("completed").isBoolean(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];
