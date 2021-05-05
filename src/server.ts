import express from "express";
// import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 8000;

// mongoose
//   .connect("mongodb://mongo:27017/vultr_test_db", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//   })
//   .then(() => console.log("Connected to mongodb 🌱."))
//   .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Hello world! 🌐🌎");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
