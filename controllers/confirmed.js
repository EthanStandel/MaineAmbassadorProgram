app.controller('bodyControl', function($http) {
    var querySet = location.search;
    var queries = querySet.split("ambassador=");
    var user = "";
    if(queries[1] === "true")
        user = "ambassadors";
    else if(queries[1] === "false")
        user = "guests";

    $http
        .get('http://api.maineambassadorprogram.org/' + user + '/verify'
            + location.search)
        .then(function(res) {},
            function(res) {top.location.assign('/error');});
});