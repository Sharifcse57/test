angular.module('Lession9')
.factory('API', function ($http){
var api = 'http://localhost/angular/api/config.php';
return{
	abc:function(){
		return 100;
	},
	xyz:function(){
		return 200;
	},
	read:function(){
		return $http.get(api+'?API=2');
	},
	add:function(data){
		return $http.post(api+'?API=1',data); 
	},
	edit:function(){
		return $http.get(api+'?API=2');
	},
	remove:function(data){
		return $http.post(api+'?API=3',data); 
	}
}
});
