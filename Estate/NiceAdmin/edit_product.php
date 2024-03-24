<?php
include("header.php");
include("config.php");
$id = $_GET["id"];
?>

<div class="container mt-5">
    <div class="row mt-5">
    <form class="form w-50 mt-5 mx-auto" action="edit_product_backend.php"  method="POST" enctype="multipart/form-data">
    <h1 class="mt-5 fw-bold text-center">Edit Product</h1>
<input   value="<?php echo $row["prod_id"] ?>"  class="form-control p-1 mt-2" type="text" name="id"> 
<input value="<?php echo $row["prod_name"] ?> "  class="form-control p-1  mt-2" type="text" name="prodname" >
<input value="<?php echo $row["prodprice"] ?>" class="form-control p-1  mt-2" type="text" name="prodprice" >
<input value="<?php echo $row["prodimage"] ?>"  class="form-control p-1  mt-2" type="file" name="prodimage">
<input value="<?php echo $row["Prod_Desc"] ?>" class="form-control p-1 mt-2"type="text" name="Prod_Desc">
</div>
</div>

</form>


<?php
include("footer.php");
?>