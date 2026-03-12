import express from "express";
import expressLayouts from "express-ejs-layouts";
import session from "express-session";
import cors from "cors";
import dotenv from "dotenv";

import { authenticateAdmin } from "./middleware/auth.js";
import dbConnect from "./config/db.js";

import productRouter from "./routes/productRoute.js";
import storeRouter from "./routes/storeRoute.js";
import homeRouter from "./routes/homeRoute.js";
import authRouter from "./routes/authRoute.js";
import userRouter from "./routes/userRoute.js";

dotenv.config(); // load env variables first

const app = express();

app.use(cors());
app.use(expressLayouts);

app.set("view engine", "ejs");
app.set("views", "views");
app.set("layout", "layout");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: false
  })
);

// make session user available in views
app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});

// routes
app.use("/auth", authRouter);
app.use("/store", storeRouter);
app.use("/", authenticateAdmin, homeRouter);
app.use("/products", authenticateAdmin, productRouter);
app.use("/users", authenticateAdmin, userRouter);

// start server
const startServer = async () => {
  try {
    await dbConnect();
    app.listen(5000, () => {
      console.log("Server Started on port 5000");
    });
  } catch (error) {
    console.log("Server Error:", error);
  }
};

startServer();