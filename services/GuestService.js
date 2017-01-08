app.service('guest', function($http) {
    this.add = function (guest, success, error) {

        for (x in guest.industries)
            delete guest.industries[x]["$$hashKey"];
        delete guest.nearestCity["$$hashKey"];

        if(guest.vacation != null) {
            guest.vacation.startDate = guest.vacation.startDate.toString();
            guest.vacation.endDate = guest.vacation.endDate.toString();
        }

        return $http.post('http://api.maineambassadorprogram.org/guests'
            , guest).then(success, error);
    };
});