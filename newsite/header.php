
<?php
SESSION_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>BednBath</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <!-- <link href="assets/img/favicon.png" rel="icon"> -->
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <!-- <link href="assets/css/style.css" rel="stylesheet"> -->
  <link href="assets/css/styling.css" rel="stylesheet">


</head>

<body >

  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top  mb-5" style="background-color: #041A49; color: #041A49;" >
    <div class="container d-flex align-items-center justify-content-lg-between text-light" >

      <!-- <h1 class="logo me-auto me-lg-0 "><a href="index.php" class="text-light">bednbath<span>.</span></a></h1> -->
      <!-- Uncomment below if you prefer to use an image logo -->
      <a href="index.php" class="logo me-auto me-lg-0"><img src="assets/img/logo 2.png" alt="" class="img-fluid"></a>

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="nav-link scrollto active " href="index.php">Home</a></li>
          <li><a class="nav-link scrollto " href="about.php">About</a></li>
          <li><a class="nav-link scrollto " href="contact.php">Contact Us</a></li>

        <!-- new dynamic dropdown/ -->
         <!-- drop down collection -->
                <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          

<ul class="dropdown-menu">
            <?php
                $con = mysqli_connect("localhost","root","", "bednbath");
                
                $query= "SELECT * FROM `categories`";

                $result= mysqli_query($con, $query);

                while($opt= mysqli_fetch_assoc($result)){
            
?>
    <li><a class="dropdown-item" href="category.php?id=<?php echo $opt['Cat_Id'] ?> "><?php echo $opt['Category'] ?></a>
<?php 
}
 ?>   
</li></ul>

          <!-- end -->
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

      <!-- <a href="login.php" class="get-started-btn scrollto">Login</a> -->

    </div>
  </header><!-- End Header -->
