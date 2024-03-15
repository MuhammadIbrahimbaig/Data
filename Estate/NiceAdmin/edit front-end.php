<?php
    include("header.php");
    include("config.php");
    $id = $_GET["id"];
    $edit_query = "SELECT * FROM users where user_id = '$id'";
    $edit_result = mysqli_query($conn,$edit_query);
    $row = mysqli_fetch_assoc($edit_result);
?>
     <br><br><br>
<form method="post" action="editwork.php">
 <div class="container text-center  mt-5">
   <h1 class="text-primary">Edit your data</h1>
 </div>
         <center>
         <div class="col-md-12 form-group mt-5">
         <input type="hidden" value ="<?php echo $row["user_id"] ?>" name="id">
           <input type="text" name="user_name" class="form-control w-50" value ="<?php echo $row["user_name"] ?>"  id="name" placeholder="Enter Username" required>
         </div>
         <br>
         <br>
          <div class="col-md-12 form-group mt-3 mt-md-0">
           <input type="email" value ="<?php echo $row["email"] ?>" class="form-control w-50" name="email"  placeholder="Enter Email" >
         </div>
         <br>
         <br>
         <div class="col-md-12 form-group mt-3 mt-md-0">
           <input type="password" value ="<?php echo $row["passwordd"] ?>" class="form-control w-50" name="password" id="email" placeholder="Enter Password" required>
         </div>
         <br>
         <br>
         <div class="col-md-12 form-group mt-3 mt-md-0">
             <input type="text"value ="<?php echo $row["address"] ?>" class="form-control w-50" name="address"  placeholder=" Address" required>
         </div>
         <br>
         <br>
         <div class="col-md-12 form-group mt-3 mt-md-0">
             <input type="tel" value ="<?php echo $row["Phone"] ?>" class="form-control w-50" name="Phone"  placeholder=" Phone " required>
         </div>


         </center>
         <br>
         <br>
       <center>
       <input type="submit" value="update" class="btn btn-primary w-50 ">
       </center>
     </form>










<?php

include ("footer.php");

?>



     