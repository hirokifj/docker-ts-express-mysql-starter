import mysql from 'mysql';
import { app } from './app';

const DB = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

DB.connect((err) => {
  if (err) {
    console.log('DB connection error');
    console.log(err);
  } else {
    console.log('DB connected');
  }
});

app.listen(process.env.APP_PORT, () => {
  console.log('serve');
});
