app.controller('bodyControl', function($http,config) {
    
    var querySet = location.search;
    var queries = querySet.split("ambassador=");
    var user = "";
    if(queries[1] === "true")
        user = "ambassadors";
    else if(queries[1] === "false")
        user = "guests";

   

    $http
        .get(config.apiUrl()+ '/' + user + '/verify' + querySet)
        .then(function(res) {},
            function(res) {
               top.location.assign('/error');
            });


    
});