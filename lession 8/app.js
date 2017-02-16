angular.module('Lession8',['Lession8.Country'])
.controller('Hello',function($scope){
	$scope.MyName = "I am Jone";
})

.directive('myDirective',function(){
	return {
		template:'<input type="text" ng-model="my.name" ng-blur="MyFunction1()">',
		controller:function($scope){
			$scope.MyFunction1 = function(){
				alert($scope.my.name);
			}

		}
	}
});
