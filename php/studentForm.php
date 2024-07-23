<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Form</title>
    <style>
        /* form {
            display: grid;
            gap: 10px;
            align-items: center;
            justify-content: center;
        }

        button {
            width: 100px;
            color: red;
            background-color: lightblue;
            border-radius: 15px;
            border: solid 1px black;
        } */

        /* Base styles for form */
        form {
            max-width: 500px;
            margin: 0 auto;
            padding: 1em;
            background: #f9f9f9;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        form input[type="text"],
        form textarea {
            width: 100%;
            padding: 0.8em;
            margin: 0.5em 0;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            font-size: 1em;
        }

        form input[type="submit"],
        form button {
            width: 100%;
            padding: 0.8em;
            border: none;
            border-radius: 4px;
            background: #5cb85c;
            color: white;
            font-size: 1em;
            cursor: pointer;
        }

        form input[type="submit"]:hover,
        form button:hover {
            background: #4cae4c;
        }

        /* Responsive design */
        @media (max-width: 600px) {
            form {
                padding: 0.5em;
            }

            form input[type="text"],
            form textarea {
                font-size: 0.9em;
            }

            form input[type="submit"],
            form button {
                font-size: 0.9em;
            }
        }
    </style>
</head>

<body>
    <fieldset>
        <legend>POST METHOD</legend>
        <form method="POST" action="./formHandler.php">
            <input placeholder="Enter First Name" type="text" name="fName">
            <input placeholder="Enter Last Name" type="text" name="lName">
            <input placeholder="Enter Roll Number" type="text" name="roll">
            <input placeholder="Enter age" type="text" name="age">
            <button type="submit">Submit</button>
        </form>
    </fieldset>
    <fieldset>
        <legend>Get Method</legend>
        <form method="GET" action="./formHandler.php">
            <input type="text" name="id" placeholder="Enter id">
            <button type="submit">Button</button>
        </form>
    </fieldset>
</body>

</html>