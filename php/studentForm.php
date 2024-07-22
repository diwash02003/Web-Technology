<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Form</title>
    <style>
        form {
            display: grid;
            gap: 10px
        }
    </style>
</head>

<body>
    <form method="POST" action="./formHandler.php">
        <input placeholder="Enter First Name" type="text" name="fName">
        <input placeholder="Enter Last Name" type="text" name="lName">
        <input placeholder="Enter Roll Number" type="text" name="roll">
        <input placeholder="Enter age" type="text" name="age">
        <button type="submit">Submit</button>
    </form>
</body>

</html>