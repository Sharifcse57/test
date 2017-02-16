angular.module('Lession8.Country',[])
.controller('MyContl',function($scope,$http){
	// get http data from remote server api, u put uri of rest json api
	// $http.get('https://jsonplaceholder.typicode.com/posts').success(function(data){
	// 	$scope.mydata = data ;
	// });

	var url = $http.get('https://jsonplaceholder.typicode.com/photos');
	url.then(function(photos){
		$scope.mphotos = photos.data;
	});



});