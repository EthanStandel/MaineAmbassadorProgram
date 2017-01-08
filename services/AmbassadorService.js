app.service('ambassador', function ($http) {
    this.add = function (ambassador, success, error) {

        for (x in ambassador.industries)
            delete ambassador.industries[x]["$$hashKey"];
        delete ambassador.nearestCity["$$hashKey"];

        return $http.post('http://api.maineambassadorprogram.org/ambassadors'
            , ambassador).then(success, error);
    };
});