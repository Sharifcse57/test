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

	function CreatePost(){
		$created_date = date('y-m-d');
			$data = json_decode(file_get_contents('php://input'));
		if ($data->_id==0) {
		$result = $this->con->query("INSERT INTO `posts` (`category_id`, `title`, `description`, `price_type`, `level`, `estimated_required_time`, `fare_amount`, `required_skill`, `created_date`)VALUES('".$data->category_id."','".$data->title."','".$data->description."','".$data->price_type."','".$data->level."','".$data->estimated_required_time."','".$data->fare_amount."','".$data->required_skill."','".$created_date."')");
		if ($result) {
			echo(json_encode(array('Status' => 'success','Message' => 'Your post has been successfully added!')));
		}else
		{
			echo(json_encode(array('Status' => 'failed','Message' => 'Sorry cannot add your post now!')));
		}
	}else{

		$result = $this->con->query("SELECT _id FROM `posts` WHERE _id='".$data->_id."'");
		$num = mysqli_num_rows($result);
		if ($num > 0) {
			//echo "found data";
			//write update query here
			$this->con->query("UPDATE posts SET title='".$data->title."' WHERE _id='".$data->_id."'");
		}else{
			echo(json_encode(array('Status' => 'failed','Message' => 'Invalid record!')));
		}
	}

	}

	public function ShowPostsData(){
		$result = $this->con->query('SELECT * FROM `posts`');
		$data = array();
		while($rows = mysqli_fetch_array($result, MYSQLI_NUM)){
			$arr = array();
			$arr['id'] = $rows[0];
			$arr['category_id'] = $rows[1];
			$arr['title'] = $rows[2];
			$arr['description'] = $rows[3];
			$arr['price_type'] = $rows[4];
			$arr['level'] = $rows[5];
			$arr['estimated_required_time'] = $rows[6];
			$arr['fare_amount'] = $rows[7];
			$arr['required_skill'] = $rows[8];
			$arr['cdate'] = $rows[9];
			array_push($data, $arr);
		}

		echo json_encode($data);
	}

	function UpdatePosts(){

	}


	public function remove(){

		$delete_data = json_decode(file_get_contents('php://input'));

		if ($delete_data->id !="") {
		$result = $this->con->query("DELETE FROM posts WHERE _id='".$delete_data->id."'");
		if ($result) {
			echo(json_encode(array('Status' => 'success','Message' => 'Your post has been successfully deleted!')));
		}else
		{
			echo(json_encode(array('Status' => 'failed','Message' => 'Sorry cannot delete your post now!')));
		}
	}

}

}



$obj = new Config();
switch ($_REQUEST['API']) {
case 1:		
$obj->CreatePost();
break;
case 2:
$obj->ShowPostsData();	
break;
case 3:
$obj->remove();	
break;
default:
# code...
break;
}
?>