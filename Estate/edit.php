<?php
    include("config.php");
    $id = $_POST["id"];
    // $user_id = $_POST["user_id"];
    $user_name = $_POST["user_name"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $address = $_POST["address"];
    $Phone = $_POST["Phone"];
    // $role = $_POST["role"];

$edit_query = "UPDATE `users` SET `user_name`='$user_name',`email`='$email',`password`='$password',`address`='$address',`Phone`='$Phone' WHERE user_id = $id";


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