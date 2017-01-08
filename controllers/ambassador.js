app.controller('bodyControl', function($scope, $http, mapData, ambassador) {
	var vm = this;
	
	vm.ambassador =
	{
		"name" : "",
		"email" : "",
		"currentCompany" : "",
		"jobTitle" : "",
		"industries" : [], /* off list */
		"yearsOfExperience" : null,
		"linkedInUrl" : "",
		"facebookUrl" : "",

		"nearestCity" : null
	};

	vm.legalCheck = false;
	mapData.cities()
		.then(function(res) {
		    vm.cities = res.data;
		});
	mapData.industries()
		.then(function(res) {vm.industries = res.data;});

    vm.add = function() {
        ambassador.add(vm.ambassador,
		function(res) {
        	top.location.assign('/signup/unconfirmed');
		}, function(res) {
                top.location.assign('/error');
			}
		);
    };
});
