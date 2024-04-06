<?php
include 'header.php';
?>

<br><br> <br><br><br> 
<div class="container">
                  <div class="row row-cols-1 row-cols-md-3 g-4">
<?php
                $con = mysqli_connect("localhost","root","", "estate");
                $prod_id= $_GET['id'];

                $query= "SELECT * FROM `products` where prod_Category = $prod_id";

                $result= mysqli_query($con, $query);

                while($opt= mysqli_fetch_assoc($result)){
      
                 
                 ?> 
<br>
                 <!-- cards -->
              
                
                 <div class="property-item">
                  <a href="#" class="img">
                    <img src="NiceAdmin/<?php echo $opt["prodimage"]?>" alt="Image" class="img-fluid" />
                  </a>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

                  <div class="property-content">
                    <div class="price mb-2"><span><?php echo $opt["prodprice"] ?></span></div>
                    <div>
                      <span class="d-block mb-2 text-black-50"
                        ><?php echo $opt["Prod_Desc"]?></span
                      >
                      <span class="city d-block mb-3"><?php echo $opt["prodname"]?></span>

                      <div class="specs d-flex mb-4">
                        <span class="d-block d-flex align-items-center me-3">
                          <span class="icon-bed me-2"></span>
                          <span class="caption">2 beds</span>
                        </span>
                        <span class="d-block d-flex align-items-center">
                          <span class="icon-bath me-2"></span>
                          <span class="caption">2 baths</span>
                        </span>
                      </div>

                      <a
                        href="property-single.html"
                        class="btn btn-primary py-2 px-3"
                        >See details</a
                      >
                    </div>
                  </div>
                </div>

<!-- card ending -->
<?php } ?>
</div>
</div>
<?php
include 'footer.php';
?>