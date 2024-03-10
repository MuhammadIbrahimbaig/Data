<?php
include("header.php");
include("config.php");
$query = "SELECT * FROM products";
$result = mysqli_query($conn,$query);
?>


    <table class = "table table-bordered p-2 w-75 mx-auto mt-5 table-hover ">
        <thead>
            <tr>
                <br>
                <th>Product_ID</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Product Image</th>
                    <th>Product Description</th>
                    <th>Product Category</th>
                     
                
            </tr>
        </thead>
        <tbody>
            <?php
            while($data = mysqli_fetch_assoc($result)){
                ?>
                <tr >
                <td><?php echo $data ["prod_id"]; ?></td>
                <td><?php echo $data ["prodname"]; ?></td>
                <td><?php echo $data ["prodprice"]; ?></td>
                <td><?php echo $data ["prodimage"]; ?></td>
                <td><?php echo $data ["Prod_Desc"]; ?></td>
                <td><?php echo $data ["Prod_Category"]; ?></td>
                
                <td><button class="btn btn-primary "><a class="text-light"  onclick="return confirm('are you sure product edit')" href="edit_product.php?id=<?php echo $data["prod_id"]; ?>" >edit</a></button></td>
               
                <td><button class="btn btn-danger "><a class="text-light"  onclick="return confirm('are you sure product delete')" href="delete_product.php?id=<?php echo $data["prod_id"]; ?>" >delete</a></button></td>
    
                </tr>
                <?php
            }
            ?>
        </tbody>
    </table>
    

</body>
<?php
include("footer.php");
?>
</html>