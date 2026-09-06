import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {createAccount, getAccounts } from "../controllers/accountController.js";

//if I take money out from schwab, does that spending go to cash account or other?

const router = express.Router();

router.get("/", authMiddleware, getAccounts);
router.post("/create", authMiddleware, createAccount);


export default router;