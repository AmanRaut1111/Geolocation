const express = require("express");
const db = require("./confing/db");
const dotenv = require("dotenv");
dotenv.config();

const userModel = require("./Models/userinfo");
const locationRouter = require("./Routes/locationRoutes");

const app = express();

app.use(express.json());

app.use("/", locationRouter);

app.listen(process.env.PORT, (req, res) => {
  console.log(`server is listening on port ${process.env.PORT}`);
});
