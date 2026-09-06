import JWT from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    const authHeader = req?.headers?.authorization;

    //MAKE CHANGES 
    const databaseUserId = req?.body.user;
    //write check against queried user id 
    //req?.body.user.id;

    if(!authHeader || !authHeader?.startsWith("Bearer")) {
        return res.status(401).json({ status: "auth_failed", message: "Authentication failed"});
    }

    const token = authHeader?.split(" ")[1];


    try {
        const userToken = JWT.verify(token, process.env.JWT_SECRET);1``

        //attatch token to id

        req.body.user = {
            userIdVerified: userToken.userId,
            databaseUserId: databaseUserId
        };
        
        next();


    } catch(error) {
        console.log(error);
        return res.status(401).json({ status: "auth_failed", message: "Authentication failed"});
    }
};

export default authMiddleware;