import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { 
    addTransaction, 
    getTransactions, 
    updateTransaction, 
    deleteTransaction,
 } from "../controllers/transactionController.js";


const router = express.Router();

router.get("/", authMiddleware, getTransactions);
router.post("/add-transaction", authMiddleware, addTransaction);
router.patch("/update-transaction", authMiddleware, updateTransaction);
router.delete("/delete-transaction/:transaction_id", authMiddleware, deleteTransaction);

//deletes shouldn't have anything in the body. target via url 

export default router;