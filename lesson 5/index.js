 angular.module('MyApp',['ui.router'])
 .controller('mycon',function($scope,API){
 $scope.name = "Sabir";
 $scope.age = 30;
 $scope.articleList =[{
    title:'learn angular js 1.5',
    description:'lorm sasa the open for alllorm sasa the open for alllorm sasa the open for all'
 },
{
    title:'learn angular js 2',
    description:'lorm sasa the open for alllorm sasa the open for alllorm sasa the open for all'
 }
 ];
 var responce = API.getData();

 responce.then(function(data){
  $scope.mydata = data.data;
 })
 
 })

 .directive('navBar',function(){
	return {
        templateUrl : "nav.html",
        scope:"=",
        controller:function($scope){
        	$scope.data ={movieName:'Hero', mid:25121};
        }
    };
})

/*  .directive('footer',function(){
    return {
        templateUrl : "footer.html",
        scope:"=",
        controller:function($scope){
            $scope.data ={movieName:'Hero', mid:25121};
        }
    };
})*/

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('home', {
                url: '/home',
                templateUrl: 'page3.html',
                controller:'mycon'
            })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('feature', {
            url:'/feature',
              templateUrl: 'page2.html'
            // we'll get to this in a bit       
        });
        
         $urlRouterProvider.otherwise('/home');
})

.factory('API',function($http){
return{
    getData:function(){
        return $http.get('https://jsonplaceholder.typicode.com/photos');
    }
}
});