angular.module('GenCov', ['ngResource', 'ui.router']);

function startup($rootScope, $state, $stateParams){
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
	// $rootScope.$location = $location;
}
startup.$inject = ['$rootScope', '$state', '$stateParams'];

function config($stateProvider, $urlRouterProvider) {
	$urlRouterProvider
	.when('/', '/:account/landing')
	.when('', '/:account/landing');
	//.when('/:account/programs', '/:account/programs/details/'+PrefsGuiService.initialState());

	$stateProvider
	.state('root', {
		url: '/:account',
		abstract:true,
		resolve:{
			loadConfig: ['GenCovService', '$stateParams', function(GenCovService, $stateParams){
				return GenCovService.getData();
			}]
		},
		views:{
			/*'header':{
				templateUrl: 'templates/header.tpl.html',
				controller: 'HeaderCtrl',
				controllerAs: 'HeaderCtrl'
			}*/
		}
	}).state('landing', {
		parent:'root',
		url: '/landing',
		views:{
			'centerCol@':{
				templateUrl: 'templates/landing.tpl.html',
				controller: 'LandingCtrl',
				controllerAs: 'LandingCtrl'
			}
		}
	})
	;
}
config.$inject = ['$stateProvider', '$urlRouterProvider'];

function GenCovController($scope, GenCovService, $rootScope) {
	
}
GenCovController.$inject = ['$scope', 'GenCovService', '$rootScope'];

angular.module('GenCov')
.run(startup)
.config(config)
.controller('GenCovController', GenCovController);