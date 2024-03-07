 <!-- Category Drop Down -->
 <select name="cat" id="" class="form-control">
        <?php
    $qry= "select * from categories";
    $res = mysqli_query($conn ,$qry);
    while ($data=mysqli_fetch_assoc($res)) {
        ?>
      <option value="<?php echo $data['Cat_Id']?>"><?php echo $data['Category']  ?></option> 
      <?php
    }
?>
</select>
        <input class="btn btn-primary text-dark w-50  mt-5" type="submit" name="submit">
</form>