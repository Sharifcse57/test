<?php 


// $content =  file_get_contents("https://jsonplaceholder.typicode.com/photos");

// $result  = json_decode($content);

// echo '<pre>';

// foreach($result as $key => $value){
// 	print_r( $value );
// }

// echo '</pre>';

// Get cURL resource
$curl = curl_init();
// Set some options - we are passing in a useragent too here
curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => 0,
    CURLOPT_SSL_VERIFYPEER, false,
    CURLOPT_URL => 'https://jsonplaceholder.typicode.com/photos',
    CURLOPT_USERAGENT => 'Codular Sample cURL Request'
));
// Send the request & save response to $resp
$resp = curl_exec($curl);
// Close request to clear up some resources
if(!curl_exec($curl)){
    die('Error: "' . curl_error($curl) . '" - Code: ' . curl_errno($curl));
}
curl_close($curl);

var_dump ($resp);


// foreach($result as $key => $value){
// 	var_dump ($value);
// }
?>


