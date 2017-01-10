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
    vm.illegalSubmit = false;

	mapData.cities()
		.then(function(res) {
		    vm.cities = res.data;
		});
	mapData.industries()
		.then(function(res) {vm.industries = res.data;});

	vm.validation = ambassador.validation;

    vm.add = function() {
    	if(!ambassador.validate(vm.ambassador)) {
    	    vm.illegalSubmit = true;
    	    return;
        }
        ambassador.add(vm.ambassador,
		function(res) {
        	top.location.assign('/signup/unconfirmed');
		}, function(res) {
                top.location.assign('/error');
			}
		);
    };
});
