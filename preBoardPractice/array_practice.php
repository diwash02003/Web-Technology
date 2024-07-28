<?php
// Function to create an array of integers and print its elements
function createAndPrintArray()
{
    // Define an array of integers
    $intArray = [1, 2, 3, 4, 5];

    // Loop through the array and print each element
    foreach ($intArray as $element) {
        echo $element . "<br>";
    }
}

// Call the function
createAndPrintArray();
?>