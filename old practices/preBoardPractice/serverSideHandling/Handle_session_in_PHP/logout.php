<!-- How can you handle session in PHP? -->
<?php
session_start();
session_destroy();
header('Location: login.php');
exit;
?>