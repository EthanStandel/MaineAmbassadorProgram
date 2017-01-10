app.service('ambassador', function ($http) {
    this.add = function (ambassador, success, error) {

        for (x in ambassador.industries)
            delete ambassador.industries[x]["$$hashKey"];
        delete ambassador.nearestCity["$$hashKey"];

        return $http.post('http://api.maineambassadorprogram.org/ambassadors'
            , ambassador).then(success, error);
    };

    this.validation = {
        name : function(ambassador) {
            if(ambassador.name === null || ambassador.name === "")
                return false;
            else return true;
        },
        email : function(ambassador) {
            return /^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/
                .test(ambassador.email);
        },
        jobTitle : function(ambassador) {
            if(ambassador.jobTitle === null || ambassador.jobTitle === "")
                return false;
            else return true;
        },
        nearestCity : function(ambassador) {
            if(ambassador.nearestCity === null)
                return false;
            else if(ambassador.nearestCity === undefined)
                return false;
            else return true;
        },
        industries : function(ambassador) {
            if(ambassador.industries.length === 0)
                return false;
            else return true;
        },
        yearsOfExperience : function(ambassador) {
            if(ambassador.yearsOfExperience === null)
                return false;
            else if(ambassador.yearsOfExperience < 1)
                return false;
            else return true;
        },
        /* Now unnecessary fields. */
        currentCompany : function(ambassador) {
            if(ambassador.currentCompany === null)
                return false;
            else if(ambassador.currentCompany === "")
                return false;
            else return true;
        },
        linkedInUrl : function(ambassador) {
            if(ambassador.linkedInUrl === null)
                return false;
            else if(ambassador.linkedInUrl === "")
                return false;
            else return true;
        },
        facebookUrl : function(ambassador) {
            if(ambassador.facebookUrl === null)
                return false;
            else if(ambassador.facebookUrl === "")
                return false;
            else return true;
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

});