<!-- function practice -->
<?php
// Define a function to calculate the product of two integers
function multiply($a, $b)
{
    // Calculate the product
    $product = $a * $b;

    // Return the result
    return $product;
}

// Example usage
$number1 = 4;
$number2 = 5;
$result = multiply($number1, $number2);

// Display the result
echo "The product of $number1 and $number2 is: $result";
?>