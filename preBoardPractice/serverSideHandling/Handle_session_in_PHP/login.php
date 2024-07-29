<?php
session_start();

$username = 'Bsc-CSIT';
$password = 'password';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $input_username = $_POST['username'];
    $input_password = $_POST['password'];

    if ($input_username === $username && $input_password === $password) {
        $_SESSION['username'] = $input_username;
        $_SESSION['loggedin'] = true;
        header('Location: dashboard.php');
        exit;
    } else {
        echo "Invalid username or password";
    }
}
?>

<form method="POST" action="">
    Username: <input type="text" name="username">
    Password: <input type="password" name="password">
    <input type="submit" value="Login">
</form>