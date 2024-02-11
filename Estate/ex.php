<?php }
                else {
                ?>
                <!-- After Login User (UI) -->
          <li class="nav-item dropdown">
            
                  <a class="nav-link me-4 dropdown-toggle link-dark" data-bs-toggle="dropdown" href="#" role="button"  aria-expanded="false">
                  <i class="fa-solid fa-user"></i> 
                    
                  <?php echo $_SESSION['name'] ?>
                  
                </a>
                  <ul class="dropdown-menu">
                  <li>
                      <a href="profile.php" class="dropdown-item">Profile</a>
                    </li>
                    <li>
                      <a href="logout.php" class="dropdown-item">logout</a>
                    </li>
                </ul> </li>
        
                <?php } ?>  
   

                
<!-- end miss -->