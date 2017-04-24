app.service('ambassador', function ($http,config) {
    this.add = function (ambassador, success, error) {

        for (x in ambassador.industries)
            delete ambassador.industries[x]["$$hashKey"];
        delete ambassador.nearestCity["$$hashKey"];

        return $http.post(config.apiUrl() + '/ambassadors'
            , ambassador).then(success, error);
    };

    this.validation = {
        name : function(ambassador) {
            return validateField(ambassador.name);
        },
        email : function(ambassador) {
            return /^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/
                .test(ambassador.email);
        },
        jobTitle : function(ambassador) {
            return validateField(ambassador.jobTitle);
        },
        nearestCity : function(ambassador) {
            return validateField(ambassador.nearestCity);
        },
        industries : function(ambassador) {
            return ambassador.industries.length !== 0;
        },
        yearsOfExperience : function(ambassador) {
            return validateField(ambassador.yearsOfExperience) && ambassador.yearsOfExperience > 0;
        },
        /* Now unnecessary fields. */
        currentCompany : function(ambassador) {
            return validateField(ambassador.currentCompany);
        },
        linkedInUrl : function(ambassador) {
            return validateField(ambassador.linkedInUrl);
        },
        facebookUrl : function(ambassador) {
            return validateField(ambassador.facebookUrl);
        }
    };

    this.validate = function (ambassador) {
        if(this.validation.name(ambassador)
            &&this.validation.email(ambassador)
            &&this.validation.jobTitle(ambassador)
            &&this.validation.nearestCity(ambassador)
            &&this.validation.industries(ambassador)
            &&this.validation.yearsOfExperience(ambassador))
                return true;
        else return false;
    }

    function validateField(field) {
        return field !== undefined && field !== null && field !== "";
    }
});