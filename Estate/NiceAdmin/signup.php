

<?php
    // include("header.php");
    include("config.php");
    
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
<!-- UI -->
<main id="main">

 <!-- ======= Contact Section ======= -->
 <section id="contact" class="contact ">
      <div class="container" data-aos="fade-up">

        <div class="section-header text-center fw-bolder ">
        <br>
        <br>
        <br>
        <br>
        <br>
          <h2 class="text-primary">Sign up!</h2>
          
          <p>Welcome to our Online Carts website!</p>

        </div>

        <div class="row gx-lg-0 gy-4">
          <div class="col-lg-6 mx-auto ">
            <form method="post" role="form" class="php-email-form1" enctype="multipart/form-data">
              <div class="row">
                <div class="col-md-12 form-group">
                  <input type="text" name="user_name" class="form-control" id="name" placeholder="Enter Username" required>
                </div>
                <br>
                <br>
                <br>
                 <div class="col-md-12 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Enter Email" required>
                </div>
                <br>
                <br>
                <br>
                <div class="col-md-12 form-group mt-3 mt-md-0">
                  <input type="password" class="form-control" name="password" id="email" placeholder="Enter Password" required>
                </div>
                <br>
                <br>
                <br>
                <div class="col-md-12 form-group mt-3 mt-md-0">
                    <input type="text" class="form-control" name="address"  placeholder=" Address" required>
                </div>
                <br>
                <br>
                <br>
                <div class="col-md-12 form-group mt-3 mt-md-0">
                    <input type="tel" class="form-control" name="phone"  placeholder=" Phone " required>
                </div>
                <br>
                <br>
                
             
                <!-- role dropdown -->
                <div class="col-md-12 form-group mt-3 mt-md-0">
                    <input type="hidden" class="form-control" name="user_role" value= "1" required>
                </div>
              </div>
              
              <div class="text-center mt-3"><button type="submit" class="btn btn-primary w-50" name="submit">Sign Up</button></div>
              <p class="mt-5 text-center">Already have an account? <a href="login.php">Login</a></p>
            </form>
          </div><!-- End Contact Form -->
        </div>

      </div>
    </section><!-- End Contact Section -->
</main>
<?php


    if(isset($_POST["submit"])){
      $user_name = $_POST['user_name'];
      $email = $_POST['email'];
      $password = $_POST['password'];
      $address = $_POST['address'];
      $phone = $_POST['phone'];
      $role_id = $_POST['user_role'];
      
      
      move_uploaded_file($temppath,$mypath);
      $query = "INSERT INTO `users`(`user_name`, `email`, `passwordd`, `address`, `Phone`, `role`)
       values ('$user_name','$email','$password','$address','$phone','2')";

      $result = mysqli_query($conn, $query);
      echo "<script>
      alert('User Added Successfully'); 
      window.location.href = 'login.php';</script>";
    }

?>



</body>

</html>


<?php
include("footer.php")
?>

