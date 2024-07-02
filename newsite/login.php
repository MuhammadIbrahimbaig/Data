<?php
include("header.php");
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
    Useremail or password is incorrect
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
        
           
          <h2 class="fw-bolder">Wellcome back to our website!</h2>
           <p>Login</p>
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

               <div class="text-center mt-4"><button type="submit" name="submit" class="btn btn-outline-warning">Login</button></div>

              <p class="mt-5 text-center">Don't have an account? <a href="signup.php">Sign up</a></p>
              
             </form>
 
           </div><!-- End login Form -->
 
         </div>
 
       </div>
     </section><!-- End login Section -->
 
   </main>
 <?php
 include("footer.php");
}
// }
// else{
//   echo "<script>location.href = 'login.php';</script>";

// }
?>








<!-- links -->
    <div id="preloader"></div>
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>

</body>

</html>