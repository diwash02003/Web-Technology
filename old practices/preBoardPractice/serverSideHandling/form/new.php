<?php

$servername = "172.17.0.3";
$username = "root";
$password = "Geforce@2003";
$dbname = "exam_Practice";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// SQL query to create table if it doesn't exist
$sql = "CREATE TABLE IF NOT EXISTS your_table_name (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL
)";

// Execute the query
if ($conn->query($sql) === TRUE) {
  echo "Table created or already exists.<br>";
} else {
  echo "Error creating table: " . $conn->error . "<br>";
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Retrieve data from the form
  $name = $_POST['name'];
  $email = $_POST['email'];

  // Prepare and execute SQL query to insert data into the table
  $sql = "INSERT INTO your_table_name (name, email) VALUES ('$name', '$email')";

  if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}

$conn->close();
?>



<!DOCTYPE html>
<html>

<head>
  <title>Form to Insert Data</title>
</head>

<body>
  <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
    Name: <input type="text" name="name"><br>
    Email: <input type="text" name="email"><br>
    <input type="submit" value="Submit">
  </form>
</body>

</html>