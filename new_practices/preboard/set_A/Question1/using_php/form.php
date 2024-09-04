<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
    <style>
        .error {
            color: red;
        }
    </style>
</head>

<body>

    <h2>Registration Form</h2>

    <?php
    // Initialize variables and errors
    $nameError = $emailError = $passwordError = $ageError = "";
    $name = $email = $password = $age = "";

    // Validate Name
    function validateName($name)
    {
        return empty($name) ? "Name is required" : "";
    }

    // Validate Email
    function validateEmail($email)
    {
        if (empty($email)) {
            return "Email is required";
        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return "Invalid email format";
        }
        return "";
    }

    // Validate Password
    function validatePassword($password)
    {
        if (empty($password)) {
            return "Password is required";
        } elseif (strlen($password) < 6) {
            return "Password must be at least 6 characters";
        }
        return "";
    }

    // Validate Age
    function validateAge($age)
    {
        if (empty($age)) {
            return "Age is required";
        } elseif ($age < 8 || $age > 60) {
            return "Age must be between 8 and 60";
        }
        return "";
    }

    // Check if the form is submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        $age = $_POST["age"];

        // Call validation functions
        $nameError = validateName($name);
        $emailError = validateEmail($email);
        $passwordError = validatePassword($password);
        $ageError = validateAge($age);

        // If there are no errors, display success message
        if (empty($nameError) && empty($emailError) && empty($passwordError) && empty($ageError)) {
            echo "<p>Form submitted successfully!</p>";
            // Reset the values after successful submission
            $name = $email = $password = $age = "";
        }
    }
    ?>

    <form method="post" action="">
        Name: <input type="text" name="name" value="<?php echo $name; ?>"><br>
        <span class="error"><?php echo $nameError; ?></span><br><br>

        Email: <input type="text" name="email" value="<?php echo $email; ?>"><br>
        <span class="error"><?php echo $emailError; ?></span><br><br>

        Password: <input type="password" name="password" value="<?php echo $password; ?>"><br>
        <span class="error"><?php echo $passwordError; ?></span><br><br>

        Age: <input type="number" name="age" value="<?php echo $age; ?>"><br>
        <span class="error"><?php echo $ageError; ?></span><br><br>

        <input type="submit" value="Register">
    </form>

</body>

</html>