 <?php 
session_start();
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Untree.co" />
    <link rel="shortcut icon" href="favicon.png" />

    <meta name="description" content="" />
    <meta name="keywords" content="bootstrap, bootstrap5" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="fonts/icomoon/style.css" />
    <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css" />

    <link rel="stylesheet" href="css/tiny-slider.css" />
    <link rel="stylesheet" href="css/aos.css" />
    <link rel="stylesheet" href="css/style.css" />

    <title>
      Al Sheikh Estate
    </title>
  </head>
  <body>
    <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close">
          <span class="icofont-close js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>

    <nav class="site-nav">
      <div class="container">
        <div class="menu-bg-wrap">
          <div class="site-navigation">
            <a href="index.php" class="logo m-0 float-start">Property</a>

            <ul
              class="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end"
            >
              <li class="active"><a href="index.php">Home</a></li>
              <li><a href="about.php">About</a></li>
              <li><a href="contactus.php">Contact Us</a></li>

              <li><a href="services.php">Services</a></li>

              <li><a href="testimonial.php">Testimonial</a></li>
              
                <!-- Account collection -->
                        <!-- drop down collection -->
                <!-- miss -->
                <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          

<ul class="dropdown-menu">
            <?php
                $con = mysqli_connect("localhost","root","", "estate");
                
                $query= "SELECT * FROM `categories`";

                $result= mysqli_query($con, $query);

                while($opt= mysqli_fetch_assoc($result)){
            
?>
    <li><a class="dropdown-item" href="category.php?id=<?php echo $opt['Cat_Id'] ?> "><?php echo $opt['Category'] ?></a>
<?php 
}
 ?>   
</li></ul>
                <!-- end account categories -->
              <!-- ACCOUNT DROP DOWN -->
              <?php
        if (!isset($_SESSION['name'])) {
          
              ?>
              <li class="nav-item dropdown">
                  <a class="nav-link me-4 dropdown-toggle link-dark" data-bs-toggle="dropdown" href="#" role="button"  aria-expanded="false">Account</a>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="login.php" class="dropdown-item">Login</a>
                    </li>
                 
                    <li>
                      <a href="signup.php" class="dropdown-item">signup</a>
                    </li>
                  </ul>
                </li> 
                <?php
        }
else {
  ?>
   <!-- After Login User (UI) -->
   <li class="nav-item dropdown"> 
            
            <a class="nav-link me-4 dropdown-toggle link-dark" data-bs-toggle="dropdown" href="#" role="button"  aria-expanded="false">
            <i class="fa-solid fa-user"></i> 
              
            <?php echo $_SESSION['name'] ?>
            
          </a>
            <ul class="dropdown-menu">
            <li>
                <a href="profile.php" class="dropdown-item">Profile</a>
              </li>
              <li>
                <a href="logout.php" class="dropdown-item">logout</a>
              </li>
          </ul> </li>
  
  <?php
}
?>
              <!-- end -->
            </ul>

            <a
              href="#"
              class="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none"
              data-toggle="collapse"
              data-target="#main-navbar"
            >
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
