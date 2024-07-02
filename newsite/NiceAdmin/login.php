<?php
session_start();

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard - NiceAdmin Bootstrap Template</title>
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
</head>
<body class="bg-light">
  
  <!--  Body Wrapper -->
  <div class="log">
  <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
    <div
      class="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
      <div class="d-flex align-items-center justify-content-center w-100">
        <div class="row justify-content-center w-100">
          <div class="col-md-8 col-lg-6 col-xxl-3">
            <div class="card mb-0">
              <div class="card-body">
                <a href="./index.php" class="text-nowrap logo-img text-center d-block py-3 w-100">
                  <img src="assets/images/logos/dark-logo.svg" width="180" alt="">
                </a>
                <p class="text-center">🅰🅳🅼🅸🅽 🅿🅰🅽🅴🅻</p>
                <form action="#" method="POST">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" >𝙐𝙨𝙚𝙧 𝙉𝙖𝙢𝙚</label>
                    <input type="text" name="user" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required>
                  </div>
                  <div class="mb-4">
                    <label for="exampleInputPassword1" class="form-label">𝙋𝙖𝙨𝙨𝙬𝙤𝙧𝙙</label>
                    <input type="password"  name="pass" class="form-control" id="exampleInputPassword1" required>
                  </div>
                  <div class="d-flex align-items-center justify-content-between mb-4">
                    <div class="form-check">
                      <input class="form-check-input primary" type="checkbox" value="" id="flexCheckChecked" checked required>
                      <label class="form-check-label text-dark" for="flexCheckChecked">
                        Remeber this Device
                      </label>
                    </div>
                    <a class="text-primar fw-bold" href="./#.html">Forgot Password ?</a>
                  </div>
                  <button type="submit" class="btn btn-light w-100 py-8 fs-4 mb-4 rounded-2" name="login">🅻🅾🅶🅸🅽</button>
                  <div class="d-flex align-items-center justify-content-center">
                    <!-- <p class="fs-4 mb-0 fw-bold">New to Modernize?</p> -->
                    <a class="text-primary fw-bold ms-2" href="signup.php">Create an account</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></div>
</body>
</html>
<!-- 
  <script src="../assets/libs/jquery/dist/jquery.min.js"></script>
  <script src="../assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html> -->

<?php

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