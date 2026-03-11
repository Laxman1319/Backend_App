import {login,validateUser,register,registerUser,logout} from "../controllers/authcontroller.js"
import express from "express"
const authRouter = express.Router()

authRouter.get("/login",login)
authRouter.post("/login",validateUser)
authRouter.get("/register",register)
authRouter.post("/register",registerUser)
authRouter.get("/logout",logout)

export default authRouter