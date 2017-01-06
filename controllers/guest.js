var app = angular.module('app',['lumx']);

app.controller('bodyControl', function($scope, $http) {
    var vm = this;

    vm.guest =
        {
            name : "",
            email : "",
            currentCompany : "",
            jobTitle : "",
            industry : "", /* off list */
            yearsInIndustry : null,
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

    vm.cities = cities;
    vm.industries = industries;
    vm.test = function() {
        /*$http.post('database/add/guest', vm.guest)
         .then(function successCallback(response) {

         }, function errorCallback(response) {

         });*/
        alert(JSON.stringify(vm.guest));
    };
});
