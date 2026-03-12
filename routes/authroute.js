import {login,validateUser,register,registerUser,logout,signup,signin} from "../controllers/authController.js"
import express from "express"
const authRouter = express.Router()

authRouter.get("/login",login)
authRouter.post("/login",validateUser)
authRouter.get("/register",register)
authRouter.post("/register",registerUser)
authRouter.get("/logout",logout)
authRouter.post("/signup",signup)
authRouter.post("/signin",signin)

export default authRouter