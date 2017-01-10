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
            "nearestCity" : null,

            "vacation" : {
                startDate : undefined,
                endDate : undefined,
                visitingFrom : ""
            }
        };

    mapData.cities()
        .then(function(res) {vm.cities = res.data;});
    mapData.industries()
        .then(function(res) {vm.industries = res.data;});
    vm.locale = 'em';

    vm.vacationCheck = false;
    vm.vacationClick = function() {
        vm.guest.vacation =
            {
                startDate: undefined,
                endDate: undefined,
                visitingFrom : ""
            };
    };

    vm.getData = function() {
      console.log(JSON.stringify(new Date(Date.parse(vm.guest.vacation.startDate))));
    };

    vm.validation = guest.validation;
    vm.vacationValidation = guest.vacationValidation;

    vm.illegalSubmit = false;
    vm.illegalSubmitVacation = false;
    vm.legalCheck = false;
    vm.add = function() {
        if(!guest.validate(vm.guest)) {
            vm.illegalSubmit = true;
            if(vm.vacationCheck)
                vm.illegalSubmitVacation = true;
            return;
        }
        else if(vm.vacationCheck) {
            if(!guest.vacationValidate(vm.guest.vacation)) {
                vm.illegalSubmit = true;
                vm.illegalSubmitVacation = true;
                return;
            }
        }
        else vm.guest.vacation = null;
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
