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

    $stmt = $conn->prepare("INSERT INTO books (search_type, search_keyword, download_type) VALUES (?, ?, ?)");
    $stmt->bind_param("ssi", $search_type, $search_keyword, $download_type);

    if ($stmt->execute()) {
        echo "Record stored successfully!<br>";
    } else {
        echo "Error: " . $stmt->error . "<br>";
    }
    $stmt->close();
}

// Retrieve data from the database
$sql_select = "SELECT id, search_type, search_keyword, download_type FROM books";
$result = $conn->query($sql_select);

if ($result->num_rows > 0) {
    echo "<h2>Search Results:</h2>";
    // echo "<table border='1'><tr><th>ID</th><th>Search Type</th><th>Search Keyword</th><th>Download Type</th></tr>";
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . "Search Type: " . $row["search_type"] . "search_keyword: " . $row["search_keyword"] . "download_type: " . ($row["download_type"] ? 'True' : 'False') . "<br>";
    }
    echo "</table>";
} else {
    echo "0 results";
}

// Close connection
$conn->close();
?>