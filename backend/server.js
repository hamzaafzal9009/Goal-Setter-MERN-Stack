const express = require("express");
const devenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/getRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
