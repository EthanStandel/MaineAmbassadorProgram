var app = angular.module('app',['lumx']);

app.controller('bodyControl', function($scope, $http) {
	var vm = this;
	
	vm.ambassador =
	{
		"name" : "",
		"email" : "",
		"currentCompany" : "",
		"jobTitle" : "",
		"industry" : "", /* off list */
		"yearsInIndustry" : null,
		"linkedInUrl" : "",
		"facebookUrl" : "",

		"nearestCity" : undefined
	};

	vm.legalCheck = false;
	vm.cities = cities;
	vm.industries = industries;
    vm.test = function() {
        /*$http.post('database/add/ambassador', vm.ambassador)
            .then(function successCallback(response) {

            }, function errorCallback(response) {

            });*/
        alert(JSON.stringify(vm.ambassador));
    };
});
