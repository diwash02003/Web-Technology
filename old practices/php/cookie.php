<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookie</title>
</head>

<body>
    <?php
    setcookie("fName", "ram", time() + 86400 * 30);
    echo $_COOKIE['fName'];
    ?>
</body>

</html>