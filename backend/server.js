const express = require("express");
const colors = require("colors");
const devenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const { connectDB } = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/getRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
