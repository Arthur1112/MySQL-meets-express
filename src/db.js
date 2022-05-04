import mysql from 'mysql2';
import credentials from './credentials.js';

const connection = mysql.createConnection({
    host: "localhost",
    database: "FosterPet",
    ...credentials
}).promise();
//If you add the .Promise() here then you wont have to do it everytime like in the pets file
// if you do it here than you have to remove other ones oe else it wont work. 
export default connection;