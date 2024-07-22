<!-- // hello -->
<?php
$first_name = validate($_POST['fName']);
$last_name = validate($_POST['lName']);
$age = validate($_POST['age']);
$roll = validate($_POST['roll']);

function validate($val)
{
    $validateValue = handleTrim($val);
    $validateValue = sanitize($validateValue);
    $validateValue = handleSlashes($validateValue);
    return $validateValue;
}

function handleTrim($val)
{
    $sanitizedVal = trim($val);
    return $sanitizedVal;
}
function sanitize($val)
{
    $sanitizedVal = htmlspecialchars($val);
    return $sanitizedVal;
}

function handleSlashes($val)
{
    $sanitizedVal = stripslashes($val);
    return $sanitizedVal;
}
// PHP MYSQL CONNECTION 
//$servername,$username,$password
$connection = new mysqli("172.17.0.3", "root", "Geforce@2003");
if ($connection->connect_error) {
    die('Connection Failed!!!<br>');
} else {
    echo "Connection successful<br>";
}
$sql = 'CREATE DATABASE IF NOT EXISTS test';
//actual connection starts here
if ($connection->query($sql) == true) {
    echo "DATABASE CREATED SUCCESSFULLY!!<br>";
} else {
    echo "FAILED TO CREATE DATABASE!!<br>";
}

$connection->select_db('test');

// SQL to create table
$table_sql = "CREATE TABLE IF NOT EXISTS students (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    fName VARCHAR(30) NOT NULL,
    lName VARCHAR(30) NOT NULL,
    roll VARCHAR(10),
    age INT(10)
)";

// Execute query
if ($connection->query($table_sql) === TRUE) {
    echo "Table 'students' created successfully<br>";
} else {
    echo "Error creating table: " . $connection->error . "<br>";
}



if ($connection->query($table_sql) == true) {
    $addition_sql = " INSERT INTO students (fName,lName,roll,age) VALUES ('$first_name','$last_name','$roll','$age')";
    if ($connection->query($addition_sql) == true) {
        echo "VALUES ADDED TO TABLE students<br>";
    }
} else {
    echo "FAILED TO CREATE TABLE!!<br>";
}

?>