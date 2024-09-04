<!-- sss -->
<?php
$valid_username = "password";
$valid_password = "password";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username === $valid_username && $password === $valid_password) {
        header("Location: home.html");
        exit();
    } else {
        echo "Error: Try again";
    }
}
?>