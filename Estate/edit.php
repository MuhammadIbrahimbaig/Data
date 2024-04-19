<?php
session_start();
    include("config.php");
    $id = $_SESSION["id"];
    // $user_id = $_POST["user_id"];
    $user_name = $_POST["user_name"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $address = $_POST["address"];
    $Phone = $_POST["Phone"];
    // $role = $_POST["role"];

$edit_query = "UPDATE `users` SET `user_name`='$user_name',`email`='$email',`passwordd`='$password',`address`='$address',`Phone`='$Phone' WHERE user_id = $id";
$edit_result = mysqli_query($conn,$edit_query);


if($edit_result){
    echo "value update";
    header("Location: index.php");
}
else {
    echo "not update";
    
}
//  $result = mysqli_query($conn , $query);
//  echo "record";
//  header("location:user.php ")
 ?>