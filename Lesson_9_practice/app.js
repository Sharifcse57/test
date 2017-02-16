angular.module('sharif',[])
.controller('ShowController',function($scope,$http){
	

	$scope.readData = function(){
		$http.get('http://localhost/angular/lesson_9_practice/api/config.php?API=1').success(function(data){
			alert(data);
		});
	}
});







