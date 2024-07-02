<?php
            if(isset($_SESSION['user_id'])){
          ?>
        <li class="dropdown"><a href="#"><span><?php echo $_SESSION["user_name"]?></span> <i class="bi bi-chevron-down"></i></a>
            <ul>
            <li><a href="profile.php?id=<?php echo $_SESSION['user_id'] ?>">Profile</a></li>
              <li><a href="logout.php">Logout</a></li>
              </ul>
              </li>
              <?php
            }
            else{
              ?>
                <li><a href="login.php">Login</a></li>
                <?php
            }
            ?>
            </ul>



            <!-- new -->