<?php
session_start();
// include("header.php");
?>
 <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Dashboard - NiceAdmin Bootstrap Template</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.gstatic.com" rel="preconnect">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/quill/quill.snow.css" rel="stylesheet">
  <link href="assets/vendor/quill/quill.bubble.css" rel="stylesheet">
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="assets/vendor/simple-datatables/style.css" rel="stylesheet">
<!-- font Awesome  -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">

<!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">

  <!-- =======================================================
  * Template Name: NiceAdmin
  * Updated: Jan 29 2024 with Bootstrap v5.3.2
  * Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body>
  <!-- Front end -->
  <section id="contact" class="contact ">
      <div class="container" data-aos="fade-up">
        <div class="section-header text-center fw-bolder ">
        <br>
        <br>
        <br>
        <br>
        <br>
          <h2 class="text-primary">Login!</h2>
          <p>Login  website!</p>

        </div>

        <div class="row gx-lg-0 gy-4">
          <div class="col-lg-6 mx-auto ">
            <form method="post" action="logincheck.php">
              <div class="row">
                <div class="col-md-12 form-group">
                  <input type="email" name="user_email" class="form-control" placeholder="Enter your email" required>
                </div>
                <br>
                <br>
                <br>
                 <div class="col-md-12 form-group mt-3 mt-md-0">
                  <input type="password" class="form-control" name="user_password"  placeholder="Enter your password" required>
                </div>
                <br>
                <br>
               
              <div class="text-center mt-3"><button type="submit" class="btn btn-secondary w-50" name="submit">Login</button></div>
              <p class="mt-5 text-center">new account create? <a href="signup.php">signup</a></p>
            </form>
          </div><!-- End Contact Form -->
        </div>

      </div>
    </section>
<?php
include("footer.php");
// authentication
include("config.php");


if(isset($_POST['login'])){
  $email = $_POST['user'];
  $password = $_POST['pass'];

  $query = "SELECT * from `users` where `user_name` = '$email' AND `passwordd` = '$password'";
  $result = mysqli_query($conn, $query);
  $data = mysqli_fetch_assoc($result);
  if($data){
    $_SESSION['user_id'] = $data['user_id'];
    $_SESSION['user_name'] = $data['user_name'];
    // $_SESSION['role'] = $data['role'];
    if($_SESSION['user_name'] =='admin'){
    header('location:index.php');
    }
 
  }

}

?>










