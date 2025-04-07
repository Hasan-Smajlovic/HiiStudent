require('dotenv').config(); // Load .env file
const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require('path');
const sequelize = require("./config/database");



const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(authRoute);

const User = require("./models/user");






sequelize
  .sync(/* { alter: true } */)
  .then(async () => {
    const server = app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });
