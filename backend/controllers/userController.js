import { pool } from "../libs/database.js";
import { comparePassword, createJWT, hashPassword } from "../libs/index.js";


export const getUser = async(req, res)=> {
    try {

        
        const userId = req.body.user.userIdVerified;


        const user = await queryUser(userId);
        checkUserExists(user, res);
        if(res.statusCode == 404) {
            return;
        }

        res.status(201).json({
            status: "success",
            user,
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
        status: "failed",
        message: error.message,
        });
    }
} 


export const changePassword = async(req, res)=> {
    try {
        const {userId} = req.body.user;
        const user = await queryUser(userId);
        checkUserExists(user);
        if(res.statusCode == 404) {
            return;
        }

        const { currentPassword, newPassword, confirmPassword } = req.body;
    
        //check that current password is correct
        const isMatch = await comparePassword(currentPassword, user?.password);
        
        //user needs to have the current password
        if (!isMatch) {
            //bad response 
            return res.status(401).json({
                status: "failed",
                message: "incorrect password",
            });
        }

        //new passwords need to match
        //this check should be client side?
        if (!(newPassword === confirmPassword)) {
            return res.status(401).json({
                status: "failed",
                message: "passwords don't match",
            });
        }

        const hashedPassword = await hashPassword(newPassword);

        await pool.query({
            text: 'UPDATE expenseappuser SET password = $1 WHERE id = $2',
            values: [hashedPassword, user.id],
        });
        
        res.status(200).json({
            status: "success",
            message: "Password changed successfully.",
        });


    } catch (error) {
        console.log(error)
        res.status(500).json({
        status: "failed",
        message: error.message,
    });
    }
} 


//make sure no overrides 
export const updateUser = async(req, res)=> {
    try {

        const{ userId } = req.body.user
        const {firstName, lastName, currency, contact } = req.body;

        const user = await queryUser(userId);
        checkUserExists(user);
        if(res.statusCode == 404) {
            return;
        }

        const updatedUser = await pool.query({
            text: 'UPDATE expenseappuser SET firstname = $1, lastname = $2, currency = $3, contact = $4, updatedat = CURRENT_TIMESTAMP WHERE id = $5 RETURNING *',
            values: [firstName, lastName, currency, contact, user.id],
        });

        updatedUser.rows[0].password = undefined;

        res.status(200).json({
            status: "success",
            message: "Information updated successfully.",
            user: updatedUser.rows[0],
        });

        //reload page with new information??

    } catch (error) {
        console.log(error)
        res.status(500).json({
        status: "failed",
        message: error.message,
    });
    }
} 


async function queryUser(userId) {

        //I don't want someone to be able to change the header then log
        //in to another person's account...think more on that 

        const userExist = await pool.query({
            text: "SELECT * from expenseappuser WHERE id = $1",
            values: [userId],
        });

        const user = userExist.rows[0];
        return user;
}

function checkUserExists(user, res) {
    if (!user) {
        return res
            .status(404)
            .json({
                status: "failed",
                message: "User could not be found.",
            })
    }

    user.password = undefined;
}

/*
export const signinUser = async(req, res)=> {
    try {

    } catch (error) {
        console.log(error)
        res.status(500).json({
        status: "failed",
        message: error.message,
    });
    }
} */