import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {createAccount, getAccounts } from "../controllers/accountController.js";

const router = express.Router();

router.get("/", authMiddleware, getAccounts);
router.post("/create", authMiddleware, createAccount);


export default router;