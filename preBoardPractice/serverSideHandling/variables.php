<!-- How can you define variables in PHP? Define any two variable 
 of string types and display their results after concatenation. -->
<!--Answer: 
    In PHP, you can define variables using the $ symbol followed by the variable name. 
    PHP is a loosely typed language, so you do not need to declare 
    the data type of a variable explicitly. 
-->
<?php
$first_name = 'ramgopal';
$last_name = 'sharma';
// Concatenate the variables
$fullName = $first_name . " " . $last_name;
// Display the result
echo "Name: " . $fullName;
?>