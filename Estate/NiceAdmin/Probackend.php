<?php
    include("config.php");


    $prodname = $_POST["prodname"];
    $prodprice = $_POST["prodprice"];
    $Prod_Desc =$_POST["Prod_Desc"];
    $Prod_Category = $_POST["cat"];
    $img= $_FILES["prodimage"];

   //  image SEt Working=================================
// print_r($img);


$imgname= $img['name'];
$temppath = $img['tmp_name'];
$mypath= "assets/images/".$imgname;

move_uploaded_file($temppath,$mypath);

    $query = "INSERT INTO `products` (`prodname`,`prodprice`, `prodimage`,`prod_desc`,`prod_category`)
    VALUES ('$prodname','$prodprice', '$mypath','$Prod_Desc','$Prod_Category')";
    


 $result = mysqli_query($conn , $query); 
 
 if ($result) {
    header('location:product_table.php');
 }
 else{
    echo " error record";
 }

 ?>