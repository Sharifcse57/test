 angular.module('MyApp',[])
 .controller('mycon',function($scope){
 $scope.name = "Jone";
 $scope.age = 30;
 })

 .directive('helloWorld',function(){
	return {
        templateUrl : "page2.html",
        scope:"=",
        controller:function($scope){
        	$scope.data ={movieName:'Hero', mid:25121};
        }
    };
});
//
