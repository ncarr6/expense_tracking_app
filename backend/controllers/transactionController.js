import { pool } from "../libs/database.js";

//MOVE ALL OF THIS LOGIC INTO TRANSACTION SERVICE 


export const getTransactions = async(req, res)=> {


    
    try {

        //create transactionQueryService to build dynamic queries bc I'm annoyed

        /*
        request.body 
        {
            user:  {
                userId: 
            },

            transactionInfo: {
                startDate: YYYY-MM-DD, 
                endDate: YYYY-MM-DD, 
                categoryId: *optional*,
                accountId: *optional* 
            }

        }
        */

        const transData = req.body.transactionInfo; 
        const userData = req.body.user;


        var today = new Date();
        var oneWeekAgo = new Date();


        oneWeekAgo.setDate(today.getDate() - 7);
        today = today.toISOString().split("T")[0];
        oneWeekAgo = oneWeekAgo.toISOString().split("T")[0];


        const startDate = transData.startDate ?? today;
        const endDate = transData.endDate ?? oneWeekAgo;

        //if category is specified, then filter based on it
        var transactionQuery;
        if (transData.categoryId) {
            transactionQuery = {
                text: "SELECT * FROM TRANSACTION WHERE (budget_date BETWEEN $1 AND $2) AND category = $3 AND user_id = $4",
                values: [startDate, endDate, transData.categoryId, userData.userIdVerified]
            }
        } else {
            transactionQuery = {
                text: "SELECT * FROM TRANSACTION WHERE (budget_date BETWEEN $1 AND $2) AND user_id = $3",
                values: [startDate, endDate, userData.userIdVerified]
            }
        }

        const transactionResult = await pool.query(transactionQuery);
        
        res.status(200).json({
            status: "success",
            message: "Transactions queried successfully.",
            data: transactionResult.rows
        });


    } catch (error) {
        console.log(error)
        res.status(500).json({
        status: "failed",
        message: error.message,
    });
    }
}



export const addTransaction = async(req, res)=> {
    try {

        /*
        
            transaction_id SERIAL NOT NULL PRIMARY KEY,
            user_id INT,
            parent_transaction_id INT,
            financial_account_id INT,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            transaction_date DATE DEFAULT CURRENT_DATE,
            budget_date NOT NULL DEFAULT CURRENT_DATE,
            amount DECIMAL(20,2),
            description VARCHAR(255),
            category INT

            request structure:

            {
                "user": {
                    "userId": 1,
                },

                transactionInfo: {
                    accoundId: ,
                    parentTransactionId: *optional*, 
                    amount: , 
                    description: ,
                    category: , 
                    transactionDate: ,
                    budgetDate: ,  



                }
            }
        
            budget_date is transaction_date unless specified 
        */ 
        const transInfo = req.body.transactionInfo;
        const userInfo = req.body.user;          

        if (transInfo.amount <= 0) {
            res.status(400).json({
            status: "failed",
            message: "Amount must be greater than 0.",
            });
            return;
        }
        
        var today = new Date();
        today = today.toISOString().split("T")[0];
        
        var transDate = transInfo.transactionDate ?? today;
        var budgetDate = transInfo.budgetDate ?? today;

        var transactionToInsert = {
            text: 'INSERT INTO transaction (user_id, financial_account_id, amount, description, transaction_date, budget_date, category) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            values: [userInfo.userIdVerified, transInfo.accoundId, transInfo.amount, transInfo.description, transDate, budgetDate, transInfo.category],
        }


        //check for parent_transaction_id
        if (transInfo.parentTransactionId) {
            transactionToInsert.text = 'INSERT INTO transaction (user_id, financial_account_id, amount, description, transaction_date, budget_date, category) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
            transactionToInsert.values.add(transInfo.parentTransactionId) 
        }

        const transaction = await pool.query(transactionToInsert);


        res.status(200).json({
                status: "success",
                message: "Transaction created successfully",
                data: transaction.rows[0],
        });



    } catch (error) {
        console.log(error)
        res.status(500).json({
        status: "failed",
        message: error.message,
        });
    }
} 

export const updateTransaction = async(req, res)=> {
    try {


        //user is allowed to update the fields
        //transaction date
        //budget date
        //amount
        //description
        //financial account that the trans belongs to
        //if this should be changed to a sub transaction  


    } catch (error) {
        console.log(error)
        res.status(500).json({
        status: "failed",
        message: error.message,
        });
    }
} 

export const deleteTransaction = async(req, res)=> {
    try {

    } catch (error) {
        console.log(error)
        res.status(500).json({
        status: "failed",
        message: error.message,
        });
    }
} 


export const createRecurringTransaction = async(req, res)=> {
    try {

        //insert record for user with amount, frequency, description 
        //need a job to run every day - it checks the last one that was inserted
        //and sees if it's time to make a new one

        //https://www.kanzaki.com/docs/ical/rrule.html

        //little script that runs everyday and checks out the recurrance strings in the DB 

    } catch (error) {
        console.log(error)
        res.status(500).json({
        status: "failed",
        message: error.message,
        });
    }
} 






/*
export const  = async(req, res)=> {
    try {

    } catch (error) {
        console.log(error)
        res.status(500).json({
        status: "failed",
        message: error.message,
    });
    }
} */