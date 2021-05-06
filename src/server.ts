import express from "express";
import mongoose from "mongoose";
import noteRoutes from "./note/routes";

const app = express();
const PORT = process.env.PORT || 8000;

const MONGO_URL =
  process.env.MONGO_URL || "mongodb://mongo:27017/vultr_test_db";

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to mongodb 🌱."))
  .catch((err) => console.error(err));

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.send("Hello from Vultr-node app! 🌎🚀🌖🌱");
});

app.use("/notes", noteRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
