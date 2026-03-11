import homePage from "../controllers/homecontroller.js";
import express from "express"

const homeRouter = express.Router()

homeRouter.get("/",homePage)

export default homeRouter