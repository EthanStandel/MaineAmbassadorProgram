app.controller('bodyControl', function($http) {
    $http
        .get('http://localhost:9000/guests/verify'
            + location.search)
        .then(function(res) {},
            function(res) {});
});