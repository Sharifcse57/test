var app  = angular.module('myapp',[]);
app.controller('chatController',function($scope){
$scope.user = {};
$scope. arr =[];
$scope.addData = function(){
$scope.arr.push($scope.user);
}

});