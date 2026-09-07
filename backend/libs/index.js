import bcrypt from "bcrypt"; 
import JWT from "jsonwebtoken";
import dotenv from 'dotenv'; 

export const hashPassword = async (userValue) => {
    const salt = await bcrypt.genSalt(10);

    //add error handling
    const hashedPassword = await bcrypt.hash(userValue, salt);

    return hashedPassword;
};

export const comparePassword = async(userPassword, password)=> {
    try {
        //plain text and hashed string 
        const isMatch = await bcrypt.compare(userPassword, password);

        return isMatch;
         
    } catch (error) {
        console.log(error);
    }
}

export const createJWT = (id) => {
    return JWT.sign(
        { 
            userId: id 
        }, 
        process.env.JWT_SECRET, 
        {
            expiresIn: "30d"
        }
            
    );
}

