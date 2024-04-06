<div class="col-lg-3">
                 <div class="card">
                  <form action="manage_cart.php" method="post">
  <img src="NiceAdmin/<?php echo $opt["prodimage"]?>" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"><?php echo $opt["prodname"]?></h5>
    <p class="card-text text-primary "><?php echo $opt["Prod_Desc"] ?></p>
    <p class="card-text text-dark "><?php echo $opt["prodprice"] ?></p>
    <button type="submit" name="Add_To_Cart" class="btn btn-primary w-100"><i class="fa fa-shopping-cart" aria-hidden="true"></i>   Add to cart</button>
    <input type="hidden" name="Price" value="<?php echo $opt["prodprice"] ?>"/>
    <input type="hidden" name="Item_Name" value="<?php echo $opt["prodname"] ?>">
  </div> </form>
</div>
</div>