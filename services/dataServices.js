app.service('mapData', function($http) {
    this.cities = function () {
        return $http.get('http://127.0.0.1:9000/nearestcities');
    };
    this.industries = function () {
        return $http.get('http://127.0.0.1:9000/industries');
    };
});