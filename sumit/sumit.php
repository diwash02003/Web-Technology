<!-- frrrrrr -->
<?php
if($_REQUEST==$_POST){
    $name=$_POST['name'];
    $address=$_POST['address'];
    $connection= new mysqli("localhost","root","");
    if($connection->connect_error){
        die('connection failed');
    }else{
        echo "connection successful";
    }
    $sql="CREATE DATABASE IF NOT EXISTS std";
        if($connection->query($sql)==true){
            echo "Database created successfully";
        }
        else
        {
            die("database not created");
        }
    $connection1=new mysqli("localhost","root","","std");
    if($connection1->connect_error){
        die('connection failed');
    }    
    else{
        $table="CREATE TABLE IF NOT EXISTS students
        (id INT AUTO_INCREAMENT PRIMARY KEY,
        name VARCHAR(20) NOT NULL,
        address VARCHAR(20) NOT NULL)";
        if($connection1->query($table)==true){
            echo "table created successfully";
            $add_sql="INSERT INTO students(name,address)
            VALUES
            ('$name','$address')";
            if($connection1->query($add_sql)==true){
                echo "value inserted successfully";
            }
        }else{
            echo "unable to create table and insert value";
        }
    }
    $connection1->close();
    $connection->close();
}else{
    echo "worng request";
}
?>