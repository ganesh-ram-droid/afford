import express from "express"
import { Oauth } from "../Controller/Oauth.js"
export const userRouter = express.Router()
userRouter.post('/login',Oauth)