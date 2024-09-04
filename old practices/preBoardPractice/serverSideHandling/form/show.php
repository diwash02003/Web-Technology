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

// Retrieve data from the database
$sql_select = "SELECT id, search_type, search_keyword, download_type FROM books";
$result = $conn->query($sql_select);

if ($result->num_rows > 0) {
    echo "<h2>Search Results:</h2>";
    echo "<table border='1'>
            <tr>
                <th>ID</th>
                <th>Search Type</th>
                <th>Search Keyword</th>
                <th>Download Type</th>
            </tr>";

    while ($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>" . $row["id"] . "</td>
                <td>" . $row["search_type"] . "</td>
                <td>" . $row["search_keyword"] . "</td>
                <td>" . ($row["download_type"] ? 'True' : 'False') . "</td>
              </tr>";
    }

    echo "</table>";
} else {
    echo "0 results";
}

echo '<a href="form.html"><button>Form</button></a>';


?>