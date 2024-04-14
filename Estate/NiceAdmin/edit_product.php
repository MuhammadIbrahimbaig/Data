<?php
    include("header.php");
    include("config.php");
    $id = $_GET["id"];
    $edit_query = "SELECT * FROM products where prod_id = '$id'";
    $edit_result = mysqli_query($conn,$edit_query);
    $row = mysqli_fetch_assoc($edit_result);
?>
     <br><br><br>



     <form class="form w-50 mt-5  mx-auto" action="editproduct_Backend.php" method="POST" enctype="multipart/form-data">
        <h1 class=" text-center text-dark mt-5">Edit  Products</h1>
        <input type="hidden" value ="<?php echo $row["prod_id"] ?>" name="id">
        <input value="<?php echo $row["prodname"] ?>" class="form-control p-1 mt-2"  type="text"  name="prodname">
        <input value="<?php echo $row["prodprice"] ?>"   class="form-control p-1 mt-2"  type="text"  name="prodprice" >
        <input value="<?php echo $row["prodimage"] ?>"  class="form-control p-1 mt-2"  type="file"  name="prodimage">
        <input value="<?php echo $row["Prod_Desc"] ?>"  class="form-control p-1 mt-2"  type="text"  name="Prod_Desc" required>
        <br>
        
            <!-- Category Drop DOwn -->
        <select  name="cat" id="" class=" form-control">
            <?php
                $qry= "select * from categories";
                $res= mysqli_query($conn, $qry);
                while($data=mysqli_fetch_assoc($res)){
             
            ?>
  

                <option value="<?php echo $data['Cat_Id'] ?>"><?php echo $data['Category'] ?></option>
                <?php }?>
            </select>
              
                <input class="btn btn-dark text-light w-100 mt-5 " type="submit" name="submit">
           

    </form>








<?php

include ("footer.php");

?>



     