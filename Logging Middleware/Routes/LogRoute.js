import express from "express"
import { LogSend } from "../Controller/logger.js"
export const router = express.Router()
router.post('/loggs',LogSend)