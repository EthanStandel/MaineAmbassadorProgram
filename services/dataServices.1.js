app.service('mapData', function($http,config) {

    this.cities = function () {
        return $http.get(config.apiUrl() + '/cities');
    };
    this.industries = function () {
        return $http.get(config.apiUrl() + '/industries');
    };
});