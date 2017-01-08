app.controller('bodyControl', function($scope, $http, mapData, guest) {
    var vm = this;

    vm.guest =
        {
            "name" : "",
            "email" : "",
            "currentCompany" : "",
            "jobTitle" : "",
            "industries" : [],
            "yearsOfExperience" : null,
            "linkedInUrl" : "",
            "facebookUrl" : "",
            "nearestCity" : "",

            "vacation" : null
        };

    vm.legalCheck = false;
    mapData.cities()
        .then(function(res) {vm.cities = res.data;});
    mapData.industries()
        .then(function(res) {vm.industries = res.data;});
    vm.locale = 'em';
    vm.vacationerCheck = false;

    vm.vacationerClick = function() {
        if(vm.vacationerCheck)
            vm.guest.vacation =
                {
                    startDate: undefined,
                    endDate: undefined,
                    visitingFrom : ""
                };
        else
            vm.guest.vacationer = null;
    };

    vm.add = function() {
        guest.add(vm.guest,
            function(res) {
                console.log(JSON.stringify(vm.guest));
                top.location.assign('/signup/unconfirmed');
            }, function(res) {
                top.location.assign('/error');
            }
        );
    };
});
