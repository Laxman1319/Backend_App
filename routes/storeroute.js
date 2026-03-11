import express from "express"
import { showProducts } from "../controllers/storecontroller.js";
const storeRouter = express.Router()

storeRouter.get("/",showProducts)

export default storeRouter