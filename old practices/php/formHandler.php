<!-- // hello -->
<?php

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

if ($_REQUEST == $_POST) {

    $first_name = validate($_POST['fName']);
    $last_name = validate($_POST['lName']);
    $age = validate($_POST['age']);
    $roll = validate($_POST['roll']);


    // PHP MYSQL CONNECTION 
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
} else {

    $id = $_GET['id'];
    $connection = new mysqli("172.17.0.3", "root", "Geforce@2003", "test");
    if ($connection->connect_error) {
        die('Connection Failed!!!<br>');
    } else {
        echo "Connection successful<br><br>";
        // Prepare the statement
        $sql = $connection->prepare("SELECT CONCAT(fName, ' ', lName) AS fullName, age, roll FROM students WHERE id = ?");
        $sql->bind_param("i", $id);

        // Execute the statement
        $sql->execute();

        // Get the result
        $result = $sql->get_result();
        if ($result->num_rows > 0) {
            $parsed_result = $result->fetch_assoc();

            echo "Name: " . $parsed_result["fullName"] . "<br>";
            echo "Age: " . $parsed_result["age"] . "<br>";
            echo "Roll Number: " . $parsed_result["roll"] . "<br>";
        } else {
            echo "Id = $id not found in database.<br>";

        }
    }
}

?>