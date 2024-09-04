<?php
// Initialize variables to hold errors and sanitized input
$usernameErr = $passwordErr = $countryErr = $genderErr = "";
$username = $password = $country = $gender = "";

// Process form when submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate username
    if (empty($_POST["username"]) || strlen($_POST["username"]) < 4) {
        $usernameErr = "Username is required and must be at least 4 characters long.";
    } else {
        $username = sanitize_input($_POST["username"]);
    }

    // Validate password
    if (empty($_POST["password"]) || !preg_match("/^[a-zA-Z].*#$/", $_POST["password"])) {
        $passwordErr = "Password is required and must start with a letter and end with #.";
    } else {
        $password = sanitize_input($_POST["password"]);
    }

    // Validate country
    if (empty($_POST["country"])) {
        $countryErr = "Please select a country.";
    } else {
        $country = sanitize_input($_POST["country"]);
    }

    // Validate gender
    if (empty($_POST["gender"])) {
        $genderErr = "Please select your gender.";
    } else {
        $gender = sanitize_input($_POST["gender"]);
    }

    // Check if there are no errors
    if (empty($usernameErr) && empty($passwordErr) && empty($countryErr) && empty($genderErr)) {
        echo "Form submitted successfully!";
        // Process the valid data (e.g., save to database, send email, etc.)
    }
}

// Function to sanitize input data
function sanitize_input($data)
{
    return htmlspecialchars(stripslashes(trim($data)));
}
?>