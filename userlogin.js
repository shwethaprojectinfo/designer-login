
// // Assuming you have a database connection established
// $servername = "localhost";
// $username = "user";
// $password = "kruthi";
// $dbname = "ecommerce";

// // Retrieve user input from AJAX request
// $email = $_POST['email'];
// $password = $_POST['password'];

// // Perform database query to validate user credentials
// // Replace this with your actual query logic to match against your user table
// $query = "SELECT * FROM users WHERE email='$email' AND password='$password'";

// $result = mysqli_query($conn, $query);

// // Check if any rows were returned
// if (mysqli_num_rows($result) > 0) {
//   // Authentication successful
//   $response = array(
//     'success' => true,
//     'message' => 'Login successful'
//   );
// } else {
//   // Authentication failed
//   $response = array(
//     'success' => false,
//     'message' => 'Invalid email or password'
//   );
// }

// // Send JSON response back to JavaScript
// echo json_encode($response);


const http = require('http');
const mysql = require('mysql');

// MySQL database connection configuration
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'kruthi',
    database: 'ecommerce'
});

// Connect to the database
connection.connect(function (err) {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database as id ' + connection.threadId);
});

// Create a server
const server = http.createServer(function (req, res) {
    if (req.method === 'POST' && req.url === '/designerlogin') {
        let body = '';
        req.on('data', function (data) {
            body += data;
        });

        req.on('end', function () {
            // Parse form data
            const formData = new URLSearchParams(body);

            // Retrieve username and password from form data
            const username = formData.get('email');
            const password = formData.get('password');

            // Query the database
            const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;
            connection.query(sql, [email, password], function (error, results) {
                if (error) {
                    console.error('Error executing MySQL query: ' + error.stack);
                    res.writeHead(500, { 'Content-Type': 'JSON' });
                    res.end('Internal Server Error');
                    return;
                }

                if (results.length === 1) {
                    // Successful login
                    res.writeHead(200, { 'Content-Type': 'JSON' });
                    res.end('success');
                } else {
                    // Invalid credentials
                    res.writeHead(200, { 'Content-Type': 'jSON' });
                    res.end('failure');
                }
            });
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Start the server
const port = 8080;
server.listen(port, function () {
    console.log('Server listening on port ' + port);
});