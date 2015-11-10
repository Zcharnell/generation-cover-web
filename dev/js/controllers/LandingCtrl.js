function LandingCtrl(GenCovService) {
	//this.programs = PrefsGuiService.programs();
	//PrefsGuiService.stateChangeToLastProgram();
	console.log("Landing");
	this.catalog = GenCovService.catalog();
}
LandingCtrl.$inject = ['GenCovService'];

angular.module('GenCov').controller('LandingCtrl', LandingCtrl);