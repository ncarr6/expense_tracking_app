import { pool } from "../libs/database.js";

export const getAccounts = async(req, res)=> {
    try {
        const userId = req.body.user.userIdVerified;
        const accounts = await pool.query ({
            text: 'SELECT * FROM financial_account where user_id = $1',
            values: [userId],
        });

        res.status(200).json({
            status:"success",
            data: accounts.rows
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
        status: "failed",
        message: error.message,
    });
    }
} 



export const createAccount  = async(req, res)=> {
    try {

        /*
         request 

        request.body 
        {
            user:  {
                userId: 
            },

            accountInfo: {
                accountName: , 
                accountLastFour: *optional*, 
                
            }

        }
         */
        const userId = req.body.user.userIdVerified;
        const accountInfo = req.body.accountInfo;
        

        const accountExistQuery = {
            text: 'SELECT * from financial_account where account_name = $1 AND user_id = $2',
            values: [accountInfo.name, userId]
        }

        const accountExistResult = await pool.query(accountExistQuery);

        const accountExist = accountExistResult.rows[0];

        if (accountExist) {
            return res.status(409).json({
                status: "failed", 
                message: "Account already created",
            })
        } 

        const accountCreationQuery = {
            text: 'INSERT INTO financial_account (account_name, last_four_digits, user_id) VALUES ($1, $2, $3) RETURNING *',
            values: [name, account_number_last_four, userId]
        }

        const accountInsertResult = await pool.query(accountCreationQuery);
        const accountInsert = accountInsertResult.rows[0];

        if (accountInsert) {
            res.status(200).json({
                status: "success",
                message: "Account created successfully",
            })
        } else {
            throw new error("Account not created");
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({
        status: "failed",
        message: error.message,
    });
    }
} 