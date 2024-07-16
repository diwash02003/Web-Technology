<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?php
        $title = "this is title"; //string
        $num = 20; //int
        $num1 = 20.2; //float
        $numBool = true; //boolean
        echo $numBool ? "hello world!" : $title . $sum; //ternary
        ?>
    </title>
    <script>
        console.log("<?php echo "hi" ?>");
    </script>
    <style>
        body {
            background:
                <?php echo "lightblue" ?>
            ;
            color:
                <?php echo "black" ?>
            ;
        }
    </style>
</head>

<body>
    <button style="color:<?php echo "red"; ?>"> click me </button>
    <br />
    <br />

    <?php
    function day($choice)
    {
        switch ($choice) {
            case "1":
                echo "Sunday";
                break;
            case "2":
                echo "Monday";
                break;
            case "3":
                echo "Tuesday";
                break;
            case "4":
                echo "Wednesday";
                break;
            case "5":
                echo "Thursday";
                break;
            case "6":
                echo "Friday";
                break;
            case "7":
                echo "Saturday";
                break;
            default:
                echo "Invalid choice <br />";
                break;
        }
    }
    day("89");

    $array = [
        "sumit",
        "Diwash",
        "Kishor",
        "Medha",
        "Riajn",
        "Savyata",
        "Monu",
        "Arjun",
    ];

    for ($x = 0; $x < count($array); $x++) {
        echo "<br />" . $x . ". " . $array[$x] . "<br />";
    }

    
    ?>
</body>

</html>