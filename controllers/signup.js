var app = angular.module('app',['lumx']);

app.controller('bodyControl', function($scope) {
	var vm = this;
	vm.ambassadorClicked = false;
	vm.guestClicked = false;
	vm.ambassadorAgreed = false;
	vm.guestAgreed = false;
	
	vm.ambassadorSignup = function () {
		if(!vm.ambassadorClicked) {
			vm.ambassadorClicked = true;
			vm.guestClicked = false;
		}
		else if (vm.ambassadorAgreed)
			top.location.assign('signup/ambassador');
	}

	vm.guestSignup = function () {
		if(!vm.guestClicked) {
			vm.guestClicked = true;
			vm.ambassadorClicked = false;
		}
		else if (vm.guestAgreed) 
			top.location.assign('signup/guest');
	}

});
