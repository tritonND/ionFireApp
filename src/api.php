<?php
     
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }
 
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }

 

    // $con = mysqli_connect("localhost","root","","ionphp") or die("Error connecting to server.");

    include_once "dbcon.php";

    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
    $request = json_decode($postdata);
    $state = $request->state;
		$email = $request->email;
		$gender = $request->gender;
		$firstname = $request->firstname;
		$phone = $request->phone;
		$address = $request->address;
    $lastname = $request->lastname;
      
        
if (!isset($_FILES["image"]["name"]))
{
    echo "no file";
}

else{

$img=$_FILES["image"]["name"];
 
if (file_exists($appfolder."/" . $_FILES["image"]["name"]))
{
    $randomnum = rand();
    move_uploaded_file($_FILES["image"]["tmp_name"], $appfolder."/R" .$randomnum. $_FILES["image"]["name"]);
    $img1 = mysqli_real_escape_string($con, $appfolder."/R".$randomnum.$img);
}
else
{
    $img1 = mysqli_real_escape_string($con, $appfolder."/".$img);
    move_uploaded_file($_FILES["image"]["tmp_name"], $appfolder."/" . $_FILES["image"]["name"]);
}

    $imageFileType = pathinfo($_FILES["image"]["name"],PATHINFO_EXTENSION);
    if($imageFileType != "jpg" && $imageFileType != "jpeg")
    {
        echo "file not sent";
    }
    else {
        $receipt = $img;
    }
}


$img2 = "images";
        $myqry = "INSERT INTO profiles (STATES, EMAIL, GENDER, FIRSTNAME, LASTNAME, PHONE, ADDRESS, IMG)
        VALUES ('$state', '$email', '$gender', '$firstname', '$lastname', '$phone', '$address', '$img2')";
            
    $result = mysqli_query($con, $myqry) or die("Error Encountered while executing query");
    echo "success";
    header('Content-type: application/json');
           // echo json_encode($myresults);

}   
     
?>
