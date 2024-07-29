<!-- concatenate -->
<?php
// Function to concatenate two strings and print the result
function concatenateStrings($str1, $str2)
{
    $result = $str1 . $str2;
    echo "Concatenated String: " . $result;
}

// Example usage of the function
$firstString = "Hello, ";
$secondString = "World!";
echo "first string:" . $firstString . "<br>";
echo "second string:" . $secondString . "<br>";

concatenateStrings($firstString, $secondString);
?>