<!-- classANdArray.php -->
<!-- How can you define class and objects in PHP? Write a PHP script to create class and its object. -->
<!-- Answer:
    In PHP, we can define a class using the class keyword and 
    create objects (instances) of that class using the new keyword. 
 -->
<?php
// Define a class named Person
class Person
{
    // Properties
    public $name;
    public $age;

    // Constructor
    public function __construct($name, $age)
    {
        $this->name = $name;
        $this->age = $age;
    }

    // Method to get the person's name
    public function getName()
    {
        return $this->name;
    }

    // Method to get the person's age
    public function getAge()
    {
        return $this->age;
    }

    // Method to set the person's name
    public function setName($name)
    {
        $this->name = $name;
    }

    // Method to set the person's age
    public function setAge($age)
    {
        $this->age = $age;
    }

    // Method to display person's information
    public function displayInfo()
    {
        echo "Name: " . $this->getName() . "<br>";
        echo "Age: " . $this->getAge() . "<br>";
    }
}

// Create an object of the Person class
$person1 = new Person("John Doe", 30);

// Display the information of the object
$person1->displayInfo();

// Modify the object's properties
$person1->setName("Jane Doe");
$person1->setAge(25);

// Display the updated information of the object
$person1->displayInfo();
?>