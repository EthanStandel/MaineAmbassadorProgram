app.service('config', function($http) {

    this.apiUrl = function () {
        //return 'http://localhost:8080'
        return 'http://api.maineambassadorprogram.org'
    };

    this.getQueryParam = function(param) {
        var found;
        window.location.search.substr(1).split("&").forEach(function(item) {
            if (param ==  item.split("=")[0]) {
                found = item.split("=")[1];
            }
        });
        return found;
    };
    
});