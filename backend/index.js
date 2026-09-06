 import cors from 'cors'; //cores is enforced by browsers, they check the response headers that cors sets
 //The word CORS stands for "Cross-Origin Resource Sharing"

 import express from 'express';

 import routes from "./routes/index.js";

 import dotenv from 'dotenv'; 
 //Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env

 dotenv.config();


 const app = express();
 const PORT = process.env.PORT || 8000; //fallback on port 8000 if my port doesnt exist

 app.use(cors("/*splat")); //accept request from anywhere 
//It is basically making your server accessible to any domain that requests a resource from your server via a browser.

 app.use(express.json({ limit: "10mb" }));
 app.use(express.urlencoded({extended: true})); 

 app.use("/api-v1", routes); 

 //if user goes to any endpoint that we haven't specified 
 app.use("/*splat", (req, res)=> {
    res.status(404).json({
        status: "404 Not found",
        message: "Route not found",
    });
 });
 
 
 app.get('/', (req, res) => {
    res.send('THIS IS MY SICK PLACE'); 
   });
   

 app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
 });


 //dont fckin expose this server to the web without security features 