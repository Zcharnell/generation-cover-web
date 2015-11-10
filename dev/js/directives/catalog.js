function catalog() {
	return {
		restrict:'E',
		replace:true,
		templateUrl:'templates/directives/catalog.tpl.html',
		scope: {
			list:"="
		},
		link: function (scope, element) {
			
		}
	};
}

catalog.$inject = [];
angular.module('GenCov').directive('catalog', catalog);