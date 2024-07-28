<!-- 
1. Starting a Session
To start a session in PHP, use the session_start() function. This function must be called at the beginning of your
script before any output is sent to the browser. 
-->

<?php
session_start();
?>

<!-- 
2. Storing Session Variables
Once the session is started, you can store information in session variables. Session variables are stored in the
$_SESSION superglobal array.
-->

<?php
session_start();
$_SESSION['username'] = 'BSC-CSIT';
$_SESSION['loggedin'] = true;
?>

<!-- 
3. Accessing Session Variables
You can access the session variables on any page where the session is started. 
-->

<?php
session_start();
if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] === true) {
    echo "Welcome, " . $_SESSION['username'];
} else {
    echo "Please log in.";
}
?>

<!-- 
4. Modifying Session Variables
You can modify session variables at any time.
-->

<?php
session_start();
$_SESSION['username'] = 'NewUsername';
?>

<!-- 
5. Unsetting Session Variables
To remove a specific session variable, use the unset() function. 
-->

<?php
session_start();
unset($_SESSION['username']);
?>

<!-- 
6. Destroying a Session
To completely destroy a session, use the session_destroy() function. This will delete all session data. 
-->

<?php
session_start();
session_destroy();
?>