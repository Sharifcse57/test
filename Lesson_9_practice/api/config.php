<?php

class Config
{
	private $host = 'localhost';
	private $user = 'root';
	private $pass = '';
	private $db = 'blog';
	private $con = '';
	function __construct()
	{
		$this->con = new mysqli($this->host,$this->user,$this->pass,$this->db);
	
	}

	function showdata(){
		$result = $this->con->query('SELECT * FROM `posts`');
		$data = array();
		while($rows = mysqli_fetch_array($result, MYSQLI_NUM)){
			$arr=array();
			$arr['id']= $rows[0];
			$arr['title']= $rows[1];
			$arr['description']= $rows[2];
			$arr['time']= $rows[3];
			array_push($data, $arr);
	      }
	        echo  json_encode($data);
      }

}	



$obj= new config();

switch ($_REQUEST['API']) {
	case '1':
		$obj->showdata();
		break;
	
	default:
		# code...
		break;
}