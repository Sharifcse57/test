angular.module('Lession9',['ui.router'])
.config(function($stateProvider,  $urlRouterProvider) {
	     $urlRouterProvider.otherwise('/home');
   		 $stateProvider
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'home.html',
            controller:'PostsController'

        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            template: '<h1>about</h1>' 
        });
        
});