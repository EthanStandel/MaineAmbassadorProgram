app.controller('bodyControl', function($scope, $http, mapData) {
	var vm = this;
	
	vm.ambassador =
	{
		"name" : "",
		"email" : "",
		"currentCompany" : "",
		"jobTitle" : "",
		"industries" : [], /* off list */
		"yearsInIndustry" : null,
		"linkedInUrl" : "",
		"facebookUrl" : "",

		"nearestCity" : undefined
	};

	vm.legalCheck = false;
	mapData.cities()
		.then(function(res) {vm.cities = res.data;});
	mapData.industries()
		.then(function(res) {vm.industries = res.data;});

    vm.test = function() {
        /*$http.post('database/add/ambassador', vm.ambassador)
            .then(function successCallback(response) {

            }, function errorCallback(response) {

            });*/
        alert(JSON.stringify(vm.ambassador));
    };
});
