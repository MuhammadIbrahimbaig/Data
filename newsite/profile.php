<?php
      // include("header.php");
      $id = $_GET["id"];
      // $id = 1;
          include("config.php");
          
          $userQuery = "SELECT * FROM users where id = $id";
          $userData = mysqli_query($conn, $userQuery);
          $user = mysqli_fetch_array($userData);

          // $query = "SELECT * FROM roles";
          $result = mysqli_query($conn, $query);
          
          // if(""){
          //   $_SESSION['user_id'] = $data['id'];
          //   $_SESSION['user_name'] = $data['user_name'];
          //     echo "<script>location.href = 'index.php';</script>";
          // }

          
          if($_SESSION['user_id'] == null){
            echo "<script>location.href = 'index.php';</script>"; 
          }

          // }
          // else{
          //   echo "<script>location.href = 'index.php';</script>";
        
          // }
        ?>
        <!DOCTYPE html>
      <html lang="en">

      <head>
        <meta charset="utf-8">
        <meta content="width=device-width, initial-scale=1.0" name="viewport">

        <title>Impact Bootstrap Template - Index</title>
        <meta content="" name="description">
        <meta content="" name="keywords">

      </head>
      
        <section id="contact" class="contact mb-5">
        
              
                  <form class="form w-50 mt-5 mx-auto p-3 bg-dark rounded-3" method="POST">
                    <div class="head">
                      <h1 class=" text-center text-light display-5">𝓔𝓭𝓲𝓽 𝓹𝓻𝓸𝓯𝓲𝓵𝓮</h1></div> 
                      <input type="hidden" value="<?php echo $user["id"]?>" name="id"/>
                      <input value="<?php echo $user["user_name"]?>"  placeholder="Enter username" class="form-control p-1 mt-3" type="text" name="user_name">
                      <input value="<?php echo $user["user_email"]?>"  placeholder="Enter email" class="form-control p-1 mt-3" type="text" name="user_email">
                      <input value="<?php echo $user["user_password"]?>"  placeholder="Enter password" class="form-control p-1 mt-3" type="password" name="user_password">
                      <input value="<?php echo $user["user_address"]?>"  placeholder="Enter Address" class="form-control p-1 mt-3" type="text" name="user_address">
                      <input class="btn btn-warning w-100 mt-3" value="Update Data" type="submit" name="submit" >
                  </form>
            </section><!-- End login Section -->
     
        
        <?php
              if(isset($_POST['submit'])){
                $user_name = $_POST["user_name"];
          $user_email =  $_POST["user_email"];
          $user_password =  $_POST["user_password"];
          $user_address =  $_POST["user_address"];

          if($user_name != null){
          $query = "UPDATE `users` SET `user_name`='$user_name', `user_email`='$user_email',`user_password`='$user_password',
          `user_address`='$user_address' WHERE id = $id";
          }
      $result = mysqli_query($conn, $query);

        echo "<script>location.href = 'index.php';</script>"; 
      }
      
      include("footer.php");

        ?>    