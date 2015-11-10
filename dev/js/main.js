angular.module('GenCov', ['ngResource', 'ui.router']);

function startup($rootScope, $state, $stateParams){
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
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
			'header@':{
				templateUrl: 'templates/nav.tpl.html',
				controller: 'NavCtrl',
				controllerAs: 'NavCtrl'
			},
			'centerCol@':{
				templateUrl: 'templates/landing.tpl.html',
				controller: 'LandingCtrl',
				controllerAs: 'LandingCtrl'
			}
		}
	}).state('kingmaker', {
		parent:'root',
		url: '/kingmaker',
		views:{
			'centerCol@':{
				templateUrl: 'templates/kingmaker.tpl.html',
				controller: 'KingmakerCtrl',
				controllerAs: 'KingmakerCtrl'
			}
		}
	}).state('combat', {
		parent:'root',
		url: '/combat',
		views:{
			'centerCol@':{
				templateUrl: 'templates/combat.tpl.html',
				controller: 'CombatCtrl',
				controllerAs: 'CombatCtrl'
			}
		}
	})/*.state('contacts', {
		parent:'root',
		url: '/contacts',
		views:{
			'leftCol@':{
				templateUrl: 'templates/contacts-list.tpl.html',
				controller: 'ContactsListCtrl',
				controllerAs: 'ContactsListCtrl'
			}
		}
	}).state('contacts.details', {
		url: '/details/:contact',
		views:{
			'rightCol@':{
				templateUrl: 'templates/contacts-details.tpl.html',
				controller: 'ContactsDetailsCtrl',
				controllerAs: 'ContactsDetailsCtrl'
			}
		}
	}).state('error', {
		url: '/error/accountnumbererror',
		views:{
			'error@':{
				templateUrl: 'templates/error.tpl.html',
				controller: 'ErrorCtrl',
				controllerAs: 'ErrorCtrl'
			}
		}
	}).state('newcontact', {
		parent:'root',
		url: '/newcontact',
		views:{
			'rightCol@':{
				templateUrl: 'templates/newcontact.tpl.html',
				controller: 'NewContactCtrl',
				controllerAs: 'NewContactCtrl'
			}
		}
	}).state('newcontact.error', {
		url: '/error/:error',
		views:{
			'error@':{
				templateUrl: 'templates/minor-error.tpl.html',
				controller: 'MinorErrorCtrl',
				controllerAs: 'MinorErrorCtrl'
			}
		}
	}).state('editcontact', {
		parent:'root',
		url: '/editcontact/:contact',
		views:{
			'rightCol@':{
				templateUrl: 'templates/editcontact.tpl.html',
				controller: 'EditContactCtrl',
				controllerAs: 'EditContactCtrl'
			}
		}
	})*/
	;
}
config.$inject = ['$stateProvider', '$urlRouterProvider'];

function GenCovController($scope, GenCovService, $rootScope) {
	this.canvasOpen = false;

	var that = this;
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){ 
	    if(toState.name === 'combat'){
	    	that.canvasOpen = true;
	    } else {
	    	that.canvasOpen = false;
	    }
	});
}
GenCovController.$inject = ['$scope', 'GenCovService', '$rootScope'];

angular.module('GenCov')
.run(startup)
.config(config)
.controller('GenCovController', GenCovController);