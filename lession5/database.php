<?php

   Class Database{
     public $host=DB_HOST;
     public $user=DB_USER;
     public $pass=DB_PASS;
     public $dbname=DB_NAME;

     public $link;
     public $error;

     public function __construct(){
       $this->connectDB();
     }

     private function connectDB(){
     $this->link= new mysqli($this->host,$this->user,$this->pass,$this->dbname);
     if(!$this->link){
     $this->error="Connection fail".$this->link->connect_error;
      }
     }

     public  function select($query){
        $result=  $this->link->query($query) or die ( $this->link->error.__LINE__);
        if($result->num_rows > 0)
        {
          return $result;
        }
        else {
          return false;
        }
     }

     public  function insert($query){
        $result=  $this->link->query($query) or die ( $this->link->error.__LINE__);
        if($result){
         // header("location:index.php?msg=".urlencode('data Inserted Successfully.'));
          //exit();
        }
        else {
          echo "please check it again";
        }
     }

     public  function update($query){
        $result=  $this->link->query($query) or die ( $this->link->error.__LINE__);
        if($result){
          header("location:index.php?umsg=".urlencode('data Updated Successfully.'));
          exit();
        }
        else {
          echo "please check it again";
        }
     }

     public function delete($query){
        $result=  $this->link->query($query) or die ( $this->link->error.__LINE__);
        if($result){
          header("location:index.php?umsg=".urlencode('data deleted Successfully.'));
          exit();
        }
        else {
          echo "please check it again";
        }
     }

   }


 ?>
