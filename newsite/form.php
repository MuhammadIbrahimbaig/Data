<?php
    include("config.php");
    $query = "SELECT * FROM users";
    $result = mysqli_query($conn, $query);
    ?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</head>
<body>
      
    <form class="form w-50 mt-5  mx-auto" action="user.php" method="GET">
        <h1 class="text-center ">SIGN UP USER</h1>
        <input class="form-control p-1 mt-2" placeholder="User name" type="text" name="user_name">
        <input class="form-control p-1 mt-2" placeholder="Enter user email" type="email"  name="user_email">
        <input class="form-control p-1 mt-2" placeholder="Enter user password" type="password"  name="user_password">
        <input class="form-control p-1 mt-2" placeholder="Enter user address" type="text"  name="user_address">
        <input class="form-control p-1 mt-2" placeholder="role_id" type="text"  name="role_id">


      
        <?php
                while($data = mysqli_fetch_assoc($result)){
                   
                }
                ?>
                </select>
                
                    <?php
                    mysqli_data_seek($result, 0);
                    while($data = mysqli_fetch_assoc($result)){
                        ?>
                
                       <?php    
                    }
                 ?>
                <input class="btn btn-outline-warning text-dark w-100 mt-5" type="submit" name="submit">
                <!-- <button class="btn btn-warning" type="submit" name="submit">Submit</button> -->

    </form>
</body>
</html>