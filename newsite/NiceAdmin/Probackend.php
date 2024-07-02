<?php
include("config.php");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $prodname = $_POST["prodname"];
    $prodprice = $_POST["prodprice"];
    $Prod_Desc = $_POST["Prod_Desc"];
    $Prod_Category = $_POST["cat"];
    $img = $_FILES["prodimage"];

    // Image upload handling
    $imgname = $img['name'];
    $temppath = $img['tmp_name'];
    $mypath = "assets/images/" . $imgname;

    // Ensure the directory exists and is writable
    if (!is_dir('assets/images')) {
        mkdir('assets/images', 0777, true);
    }

    if (move_uploaded_file($temppath, $mypath)) {
        // Insert into database
        $query = "INSERT INTO `products` (`prodname`, `prodprice`, `prodimage`, `prod_desc`, `prod_category`)
                  VALUES ('$prodname', '$prodprice', '$mypath', '$Prod_Desc', '$Prod_Category')";

        $result = mysqli_query($conn, $query);

        if ($result) {
            header('Location: prod_table.php');
            exit();
        } else {
            echo "Error inserting record: " . mysqli_error($conn);
        }
    } else {
        echo "Error uploading image.";
    }
} else {
    echo "Invalid request method.";
}
?>
