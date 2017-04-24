app.controller('bodyControl', function($http,config) {
    var querySet = location.search;
    var queries = querySet.split("p=");
    
    $http
        .get(config.apiUrl() +  '/ambassadors/deactivate'+  location.search)
        .then(function(res) {},
            function(res) {
                top.location.assign('/error');
            });
});