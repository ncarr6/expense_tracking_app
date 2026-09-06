import pg from "pg"; //PostgreSQL client for Node.js
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

export const pool = new Pool({
    connectionString: process.env.DATABASE_URI,

    //beware, the ssl settings in the connection string overwrite this
    ssl:  {
        rejectUnauthorized: false,
    },
});
   /* ssl:  {
        rejectUnauthorized: false,
    },*/
