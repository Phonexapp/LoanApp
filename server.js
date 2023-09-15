const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("./db/mongodb");
const signupRouter = require("./routes/signup");
const loginRouter = require("./routes/login");
const HomeRouter = require("./routes/Home");
const UploadRouter = require("./routes/Upload.js");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", signupRouter);
app.use("/api", loginRouter);
app.use("/api", HomeRouter);
app.use("/api", UploadRouter);


// Start the Express server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
