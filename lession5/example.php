<?php
require '../oop/config.php';
require '../oop/database.php';
$obj = new Database();
$query = "insert into info(name)values('".$_REQUEST['name']."')";
$obj ->insert($query);

$data = $obj->select("SELECT * FROM info");
//print_r($data);
$arr = array();
while($num = mysqli_fetch_array($data,MYSQLI_NUM))
{
$arr[]= $num;
}

echo(json_encode($arr));


//echo("Hello ".$name);

?>