<?php
session_start();
include("config.php");
$user_email = $_POST["user_email"];
$user_password = $_POST["user_password"];

$sql="SELECT  * FROM users where email = '$user_email' AND passwordd = '$user_password'";
$result = mysqli_query($conn,$sql);
$var = mysqli_fetch_assoc($result);

if ($var) { 
   $_SESSION['name']= $var['user_name'];
   $_SESSION['email']= $var['email'];
   $_SESSION['role']= $var ['role'];

   if($_SESSION['role']== 1){
    
    echo "<script>
    alert('LOGIN SUCCESFULLY'); 
    window.location.href = 'index.php';</script>";
       
   }
}
else {
    echo "<script>
      alert('incorrect  email and password'); 
      window.location.href = 'login.php';</script>";
    
 }

