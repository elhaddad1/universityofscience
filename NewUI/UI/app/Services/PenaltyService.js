'use strict';
app.factory('PenaltyService', function ($http) {
    return {

        /********************************** M E T H O D S **************************************/
        //Define Methods To Call API 

        GetActivePenalties: function () {
            var service = clientAgentService().getOMSeviceData(enums().OMServicesName.GetActivePenalties);
            return $http.get(clientAgentService().baseUrl + service.URL);
        }
    }
});