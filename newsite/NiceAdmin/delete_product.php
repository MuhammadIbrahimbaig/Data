<?php
include("config.php");
$id = $_GET["id"];
$dlt_query = "DELETE from products where prod_id = '$id'";
$dlt_result = mysqli_query($conn,$dlt_query);

if ($dlt_result) {
 echo "Deleted";
 header("Location: prod_table.php");
}
 else {
    echo "not delete";
}


?>