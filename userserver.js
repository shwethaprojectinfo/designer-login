const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 8080;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'kruthi',
  database: 'ecommerce',
});
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

app.use(express.json());
app.post('/designerSignup', (req, res) => {
  const { name, email ,password, Confirmpassword,mobilenumber,addressline1,addressline2,landmark,city,country,pincode} = req.body;
  const primaryKey = Date.now();
  connection.query(
    'INSERT INTO users ( name, email ,password,mobilenumber,addressline1,addressline2,landmark,city,country,pincode) VALUES (?, ?, ?)',
    [name, email ,password, Confirmpassword,mobilenumber,addressline1,addressline2,landmark,city,country,pincode],
    (err, result) => {
      if (err) {
        console.error('Error executing database query:', err);
        res.status(500).send('Internal server error');
        return;
      }

  
      res.json({ message: 'User signed up successfully' });
    }
  );
});
app.listen(8080, () => {
  console.log(`Server is running on http://localhost:${8080}`);
});
