angular.module('Lession9')
.controller('PostsController',function($scope,$http, API){
//var data ={title:'test',description:'test data'};
console.log(API.abc());
$scope.data = {};
$scope.readData = function(){

	var responce = API.read();
	responce.then(function(data){
			$scope.posts = data.data;
			console.log(data);
	},function (){
		alert("sorry! error");
	});

}

$scope.addPosts = function(){
	console.log($scope.data);
	var responce = API.add($scope.data);
	responce.then(function(data){
		console.log(data);
		$scope.data = {};
		$scope.readData();
	}, function(){
		alert("sorry! error");
	});

}
$scope.EditData = function(item){
	console.log(item);
	$scope.data = item;
	$scope.data._id = item.id;
}
$scope.DeleteData = function(value){

	var obj = { "id": value};
	var responce = API.remove(JSON.stringify(obj));
	responce.then(function(res){
			console.log(res);
			if (res.data.Status =='success') {	
			$scope.readData();
		}
	}, function(){
				alert("sorry! error");
	})


}

});

