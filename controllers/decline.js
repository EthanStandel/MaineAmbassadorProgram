app.controller('bodyControl', function($http,config) {
    var querySet = location.search;
    var queries = querySet.split("p=");
    
    $http
        .get(config.apiUrl() +  '/ambassadors/decline/'+   queries[1])
        .then(function(res) {},
            function(res) {
                top.location.assign('/error');
            });
});