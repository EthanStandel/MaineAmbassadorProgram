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

	

	vm.activation = {
		email:""
	};
	vm.legalCheck = false;
    vm.illegalSubmit = false;
	vm.errorMessage="";

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
				vm.errorMessage=res.data.error;
			}
		);
    };

	vm.confirmationSent = false;
	vm.toggleActive = function(){
		
	   ambassador.toggleActive(vm.activation.email, function(res){
		 vm.confirmationSent = true;
	   },
	   function(res){
			vm.errorMessage = res.data.error;
	   });		
	};
});
