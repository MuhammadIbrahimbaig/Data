 <!-- assign ---->
 <?php
            if(isset($_SESSION['user_id'])){
          ?>
        <li class="dropdown"><a href="#"><span><?php echo $_SESSION["user_name"]?></span> <i class="bi bi-chevron-down"></i></a>
            <ul>
            <li><a href="#">profile</a></li>
              <li><a href="#">logout</a></li>
              </ul>
              </li>
              <?php
            }
            else{
              ?>
 <li class="dropdown-toggle"><a href="login.php">Login</a></li>
                <?php
            }
            ?>
            </ul>

          <!-- end -->
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->