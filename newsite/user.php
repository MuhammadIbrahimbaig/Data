<?php
    include("config.php");
    $query = "SELECT * FROM users;";
    $result = mysqli_query($conn, $query);
    ?>

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>User Table</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </head>
    <body>
        <table class="table table-border">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>password</th>
                    <th>address</th>
                    <th>role_id</th>

                </tr>
            </thead>
            <tbody>
                <?php
                while($data = mysqli_fetch_assoc($result)){
                    ?>
                    <tr>
                        <td><?php echo $data["user_name"]?></td>
                        <td><?php echo $data["user_email"]?></td>
                        <td><?php echo $data["user_password"]?></td>
                        <td><?php echo $data["user_address"]?></td>
                        <td><?php echo $data["role_id"]?></td>
                        <td>
                        <a href="edit.php?id=<?php echo $data["id"]; ?>">Edit</a>
                        </td>
                        </tr>
                        <?php
                }
                
                ?>
                
            </tbody>
        </table>
    </body>
    </html>