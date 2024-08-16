<!-- Create web form for book search catalog. 
The form should contain a dropdown defining search type, 
a text box for search keyword, 
a radio button for download type true or false, 
now write PHP script to store data from the form into database
table and also retrive the results from stored table in a new page. 
-->

<!-- store_and_search_books.php -->
<?php
// Database connection parameters
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

// Create table if not exists
$table_sql = "CREATE TABLE IF NOT EXISTS books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    search_type VARCHAR(50) NOT NULL,
    search_keyword VARCHAR(100) NOT NULL,
    download_type BOOLEAN NOT NULL
)";
$conn->query($table_sql);

// Store data from the form into the database
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $search_type = $_POST['search_type'];
    $search_keyword = $_POST['search_keyword'];
    $download_type = ($_POST['download_type'] === 'true') ? 1 : 0;


    $sql_insert = "INSERT INTO books (search_type, search_keyword, download_type) 
               VALUES ('$search_type', '$search_keyword', '$download_type')";

    if ($conn->query($sql_insert) === TRUE) {
        echo "Record stored successfully!<br>";
    } else {
        echo "Error: " . $conn->error;
    }
}


echo '<a href="show.php"><button>view data</button></a>';
?>