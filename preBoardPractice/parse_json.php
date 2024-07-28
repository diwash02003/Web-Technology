<!-- 
    JSON (JavaScript Object Notation) is a lightweight data interchange 
    format that is easy for humans to read and write and easy for machines
    to parse and generate. It is often used for transmitting data between a 
    server and a web application, as well as for configuration files and data storage.

    Uses of JSON
    Data Interchange: JSON is commonly used to send data between a client and a server.

    Configuration Files: JSON is used in configuration files for various applications and systems.

    APIs: Many web APIs use JSON to format the data returned to clients.

    Data Storage: JSON can be used to store data in databases and files.
-->

<?php
// JSON data as a string
$jsonData = '[{"name": "John Doe", "age": 30}, {"name": "Jane Smith", "age": 25}, {"name": "Alice Johnson", "age": 28}]';

// Decode JSON data to PHP associative array
$data = json_decode($jsonData, true);

// Loop through each person and display their name and age
foreach ($data as $person) {
    echo "Name: " . $person['name'] . ", Age: " . $person['age'] . "<br>";
}
?>