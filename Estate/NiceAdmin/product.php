<?php
include("header.php");
include("config.php");


?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <br><br>
   <div class="form w-50 mt-5 mx-auto">
<h1 class="fw-bold display-5 fs-2">Add Property</h1>
<input class="form-control p-1 mt-2" placeholder="ProductName" type="text"  name="prodname" required>
<input class="form-control p-1 mt-2" placeholder="Product Price" type="text"  name="prodprice" required>
<input class="form-control p-1 mt-2" placeholder="Product Image" type="file"  name="prodimage " required>
<input class="form-control p-1 mt-2" placeholder="Product Description" type="text"  name="Product_Desc " required>
<!-- CAtegory dropdown -->
<select name="cat" id="" class=" form-control">
<?php
$query = "select * from category";
$result = msqli_query("$conn,$qry");

?>

</div>
    
</body>
</html>

<?php
include("footer.php");
?>
