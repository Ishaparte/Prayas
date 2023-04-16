<?php
$mysqli = new mysqli("localhost","root","","signup");

// Check connection
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}
?>
if(isset($_POST['save_radio']))
{
    $
}