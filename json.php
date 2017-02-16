<?php
$url="https://jsonplaceholder.typicode.com/photos"; 

$ch = curl_init();

curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

curl_setopt($ch, CURLOPT_URL,$url);
$result=curl_exec($ch);
curl_close($ch);

echo "<pre>";
//var_dump(json_decode($result));
echo "</pre>";

$abc=json_decode($result);
foreach ($abc as $key => $value) {
	echo $value->title;
}














 ?>