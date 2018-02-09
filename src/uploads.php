<?php
//header('Access-Control-Allow-Origin: *');
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

 include_once "dbcon.php";
//$con = mysqli_connect("localhost","root","","ionphp") or die("Error connecting to server.");

$target_path = "uploads/";
$target_path = $target_path . basename( $_FILES['file']['name']);
echo $_FILES['file']['name'];
 
if (move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) {
    
    $img = $_FILES['file']['tmp_name'];
    $myqry = "INSERT INTO profiles (IMG) VALUES ('$target_path')";
    $result = mysqli_query($con, $myqry) or die("Error Encountered while executing query");
    echo "success";

} 
else {
echo $target_path;
    echo "There was an error uploading the file, please try again!";
}
?>
