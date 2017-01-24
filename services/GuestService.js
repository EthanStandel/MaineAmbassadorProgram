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

    this.validation = {
        name : function(guest) {
            return validateField(guest.name);
        },
        email : function(guest) {
            return /^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/
                .test(guest.email);
        },
        jobTitle : function(guest) {
            return validateField(guest.jobTitle);
        },
        nearestCity : function(guest) {
            return validateField(guest.nearestCity);
        },
        industries : function(guest) {
            return guest.industries.length !== 0;
        },
        yearsOfExperience : function(guest) {
            return validateField(guest.yearsOfExperience) && guest.yearsOfExperience > 0;
        },
        /* Now unnecessary fields. */
        currentCompany : function(guest) {
            return validateField(guest.currentCompany);
        },
        linkedInUrl : function(guest) {
            return validateField(guest.linkedInUrl);
        },
        facebookUrl : function(guest) {
            return validateField(guest.facebookUrl);
        }
    };

    this.validate = function (guest) {
        if(this.validation.name(guest)
            &&this.validation.email(guest)
            &&this.validation.jobTitle(guest)
            &&this.validation.nearestCity(guest)
            &&this.validation.industries(guest)
            &&this.validation.yearsOfExperience(guest))
            return true;
        else return false;
    };

    this.vacationValidation = {
        visitingFrom : function(vacation) {
            if(vacation.visitingFrom === "")
                return false;
            else return true;
        },
        startDate : function(vacation) {
            if(vacation.startDate === undefined)
                return false;
            var startDate = Date.parse(vacation.startDate);
            if(vacation.endDate !== undefined || vacation.endDate === "") {
                var endDate = Date.parse(vacation.endDate);
                if (endDate < startDate)
                    return false;
            }
            return true;
        },
        endDate : function(vacation) {
            if(vacation.endDate === undefined)
                return false;
            var endDate = Date.parse(vacation.endDate);
            if(endDate < (new Date()).getTime())
                return false;
            else if(vacation.startDate !== undefined || vacation.startDate === "") {
                var startDate = Date.parse(vacation.startDate);
                if (endDate < startDate)
                    return false;
            }
            return true;
        }
    };

    this.vacationValidate = function (vacation) {
        if(this.vacationValidation.visitingFrom(vacation)
            &&this.vacationValidation.startDate(vacation)
            &&this.vacationValidation.endDate(vacation))
            return true;
        else return false;
    }

    function validateField(field) {
        return field !== undefined && field !== null && field !== "";
    }
});