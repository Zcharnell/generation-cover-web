function LandingCtrl(GenCovService, $location) {
	//this.programs = PrefsGuiService.programs();
	//PrefsGuiService.stateChangeToLastProgram();
	// console.log("Landing");
	this.catalog = GenCovService.catalog();

	// this.scrollToId = function(id){
	//     // set the location.hash to the id of
	//     // the element you wish to scroll to.
	//     $location.hash(id);

	//     // call $anchorScroll()
	//     $anchorScroll();
	// };
}
LandingCtrl.$inject = ['GenCovService', '$location'];

angular.module('GenCov').controller('LandingCtrl', LandingCtrl);