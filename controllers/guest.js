app.controller('bodyControl', function($scope, $http, mapData) {
    var vm = this;

    vm.guest =
        {
            name : "",
            email : "",
            currentCompany : "",
            jobTitle : "",
            industries : [],
            yearsInIndustry : "",
            linkedInUrl : "",
            facebookUrl : "",
            nearestCity : "",

            vacationer :
                {
                    startVacation: null,
                    endVacation: null,
                    visitingFrom : ""
                }
        };

    vm.legalCheck = false;
    mapData.cities()
        .then(function(res) {vm.cities = res.data;});
    mapData.industries()
        .then(function(res) {vm.industries = res.data;});
    vm.locale = 'em';
    vm.vacationerCheck = false;

    vm.vacationerClick = function() {
        vm.guest.vacationer =
            {
                startVacation: undefined,
                endVacation: undefined,
                visitingFrom : ""
            };
    };

    vm.test = function() {
        /*$http.post('database/add/guest', vm.guest)
         .then(function successCallback(response) {

         }, function errorCallback(response) {

         });*/
        alert(JSON.stringify(vm.guest));
    };
});
