(function(){

	var app = angular.module('kingsOfMythology', [
    'ngRoute',
    'home',
    'armyCreator'
	]);
	
	app.config(['$routeProvider', function($routeProvider) {
	    $routeProvider.otherwise({
	        redirectTo: '/home'
	    });
	}]);

})();