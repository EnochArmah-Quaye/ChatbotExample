<?php

$servername="localhost";
$username="root";
$dbpassword="10835954enoch";
$dbname="php_project";

$conn = mysqli_connect($servername,$username,$dbpassword,$dbname);

if(!$conn){
    die("Connection Failed: ".mysqli_connect_error());
}
else{
    echo "Connected Successfully";
}
?>