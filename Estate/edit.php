<?php
    include("config.php");
    $id = $_POST["id"];
    $user_id = $_POST["user_id"];
    $user_name = $_POST["user_name"];
    $email = $_POST["email"];
    $passwordd = $_POST["passwordd"];
    $address = $_POST["address"];
    $phone = $_POST["Phone"];
    // $role = $_POST["role"];

$edit_query = "UPDATE `users` SET `user_name`='$user_name',`email`='$email',`passwordd`='$passwordd',`address`='$adrress',`phone`='$Phone' WHERE user_id = $user_id";


if($edit_result){
    echo "value update";
    header("Location: table.php");
}
else {
    echo "not update";
    
}
//  $result = mysqli_query($conn , $query);
//  echo "record";
//  header("location:user.php ")
 ?>