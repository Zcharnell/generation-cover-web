function navigation(GenCovService, $location, $anchorScroll, $window) {
	return {
		restrict:'E',
		replace:true,
		templateUrl:'templates/directives/navigation.tpl.html',
		scope: {
		},
		link: function (scope, element) {
			// console.log(GenCovService,scope,$location,$anchorScroll);
			scope.scrollToId = function(id){
			    // set the location.hash to the id of
			    // the element you wish to scroll to.
			    // console.log($location);
			    // console.log($location);
			    console.log($location.hash());
			    $location.hash(id);

			    // call $anchorScroll()
			    $anchorScroll();
			    $location.hash('');
			};

			scope.goToExternalSite = function(site){
				$window.location.href = site;
			}
		}
	};
}

navigation.$inject = ['GenCovService', '$location', '$anchorScroll', '$window'];
angular.module('GenCov').directive('navigation', navigation);