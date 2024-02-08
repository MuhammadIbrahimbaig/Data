<?php
include("header.php");
?>
 
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
?>










