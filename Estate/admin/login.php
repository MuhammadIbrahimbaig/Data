<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>ADMIN PANEL</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">

    <!-- Favicon -->
    <link href="img/favicon.ico" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

    <!-- Customized Bootstrap Stylesheet -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Template Stylesheet -->
    <link href="css/style.css" rel="stylesheet">
</head>

<body>
<?php

include("config.php");
// if(isset($_SESSION['user_id'])){

if(isset($_POST['submit'])){
  $user_email = $_POST['user_email'];
  $user_password = $_POST ['user_password'];

  $query = "SELECT * from users where user_email = '$user_email' AND user_password = '$user_password'";

  $result = mysqli_query($conn, $query);
  $data = mysqli_fetch_array($result);
  if(mysqli_num_rows($result) > 0){
    $_SESSION['user_id'] = $data['id'];
    $_SESSION['user_name'] = $data['user_name'];
    echo "<script>location.href = 'index.php';</script>";
  }
  else{
    echo "<div class='alert alert-danger w-75 mt-5 mx-auto' role='alert'>
    Username or password is incorrect
  </div>";
  }
}
if(isset($_SESSION['user_id'])){
  echo "<script>location.href = 'index.php';</script>";
}
else{
  ?>
  <!-- ======= login Section ======= -->
  <section id="contact" class="contact mt-5">
       <div class="container" data-aos="fade-up">
 
         <div class="section-title text-center ">
        
           
          <h2 class="fw-bolder text-primary">Wellcome back to our website!</h2>
           <p class="fw-bolder">Login!</p>
         </div>
        
           <div class="col-lg-12 mt-5 mt-lg-0 ">
 
             <form  method="post" role="form" class="php-email-form1 container">
               <div class="row">
                 <div class="col-md-12 form-group">
                   <input type="email" name="user_email" class="form-control" id="name" placeholder="Your Email" required>
                 </div>
                 <br>
                 <br>

                 <div class="col-md-12 form-group mt-3 mt-md-0">
                   <input type="password" class="form-control" name="user_password" id="email" placeholder="Your Password" required>
                 </div>
               </div>

               <div class="text-center mt-4 "><button type="submit" name="submit" class="btn btn-outline-primary fw-bolder  ">Login</button></div>

              <p class="mt-5 text-center">Don't have an account? <a href="signup.php">Sign up</a></p>
              
             </form>
 
           </div><!-- End login Form -->
 
         </div>
 
       </div>
     </section><!-- End login Section -->
 
   </main>
 <?php

}
?>
</body>
</html>

        <!-- Back to Top -->
        <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    </div>

    <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/chart/chart.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/tempusdominus/js/moment.min.js"></script>
    <script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
    <script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>

    <!-- Template Javascript -->
    <script src="js/main.js"></script>
