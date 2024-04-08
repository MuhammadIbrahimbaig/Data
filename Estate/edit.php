<?php
    include("config.php");
    
    $user_id = $_POST["user_id"];
    $user_name = $_POST["user_name"];
    $email = $_POST["email"];
    $passwordd = $_POST["passwordd"];
    $address = $_POST["address"];
    $phone = $_POST["Phone"];
    $role = $_POST["role"];

$query = "UPDATE `users` SET `user_name`='$user_name',`email`='$email',`passwordd`='$passwordd',`address`='$adrress',`phone`='$phone',`role`='$role' WHERE user_id = $user_id";

 $result = mysqli_query($conn , $query);
 echo "record";
 header("location:user.php ")
 ?>