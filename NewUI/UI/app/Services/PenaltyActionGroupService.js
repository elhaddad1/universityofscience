'use strict';
app.factory('PenaltyActionGroupService', function ($http) {
    return {

        /********************************** M E T H O D S **************************************/
        //Define Methods To Call API 

        GetPenaltyActionGroups: function () {
            var service = clientAgentService().getOMSeviceData(enums().OMServicesName.GetPenaltyActionGroups);
            return $http.get(clientAgentService().baseUrl + service.URL);
        },
        GetPenaltyActionGroupsNoAttendence: function () {
            var service = clientAgentService().getOMSeviceData(enums().OMServicesName.GetPenaltyActionGroupsNoAttendence);
            return $http.get(clientAgentService().baseUrl + service.URL);
        }
        //
    }
});