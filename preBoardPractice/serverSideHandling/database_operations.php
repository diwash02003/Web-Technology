<!-- Write a server side script in PHP to illustrate inserting 
 and selecting values to and from database table. 
 Create required connection using your own assumptions. -->
 
<?php
// Database connection parameters
$servername = "172.17.0.3";
$username = "root";
$password = "Geforce@2003";
$dbname = "exam_Practice";

// Create connection
$connection = new mysqli($servername, $username, $password);

// Check connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error . "<br>");
} else {
    echo "Connection successful<br>";
}

// Create database
$sql = "CREATE DATABASE IF NOT EXISTS $dbname";
if ($connection->query($sql) === TRUE) {
    echo "Database created successfully!<br>";
} else {
    echo "Failed to create database: " . $connection->error . "<br>";
}

// Select the database
$connection->select_db($dbname);

// Create table
$table_sql = "CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL
)";
if ($connection->query($table_sql) === TRUE) {
    echo "Table created successfully!<br>";
} else {
    echo "Failed to create table: " . $connection->error . "<br>";
}

// Insert data
$sql_insert = "INSERT INTO users (username, email) VALUES ('example_user', 'user@example.com')";
if ($connection->query($sql_insert) === TRUE) {
    echo "New record created successfully!<br>";
} else {
    echo "Error inserting record: " . $connection->error . "<br>";
}

// Select data
$sql_select = "SELECT id, username, email FROM users";
$result = $connection->query($sql_select);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"] . " - Username: " . $row["username"] . " - Email: " . $row["email"] . "<br>";
    }
} else {
    echo "0 results";
}

// Close connection
$connection->close();
?>