app.service('mapData', function($http) {
    this.cities = function () {
        return $http.get('http://api.maineambassadorprogram.org/cities');
    };
    this.industries = function () {
        return $http.get('http://api.maineambassadorprogram.org/industries');
    };
});