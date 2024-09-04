<!-- form -->
<?php

$name = "Diwash";

$servername = "172.17.0.3";
$username = "root";
$password = "Geforce@2003";
$dbname = "exam_Practice";

$connection = new mysqli($servername, $username, $password, $dbname);

if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

// Create table if it does not exist
$sql = "CREATE TABLE IF NOT EXISTS naam_wala (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
)";

if ($connection->query($sql) === TRUE) {
    echo "Table created or already exists.<br>";
} else {
    echo "Error creating table: " . $connection->error . "<br>";
}

// Insert data into the table
$sql_insert = "INSERT INTO naam_wala (name) VALUES ('$name')";
if ($connection->query($sql_insert) === TRUE) {
    echo "Record inserted successfully.<br>";
} else {
    echo "Error inserting data: " . $connection->error . "<br>";
}

// Select and display data from the table
$sql_select = "SELECT id, name FROM naam_wala";

$result = $connection->query($sql_select);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "Id: " . $row["id"] . " Name: " . $row["name"] . "<br>";
    }
} else {
    echo "No records found.<br>";
}

$connection->close();

?>