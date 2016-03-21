'use strict';
app.factory('PenaltyActionService', function ($http) {
    return {

        /********************************** M E T H O D S **************************************/
        //Define Methods To Call API 

        GetPenaltyActions: function () {
            var service = clientAgentService().getOMSeviceData(enums().OMServicesName.GetPenaltyActions);
            return $http.get(clientAgentService().baseUrl + service.URL);
        },
        GetPenaltyActionsByActionGroupId: function (actionGroupId) {
            var service = clientAgentService().getOMSeviceData(enums().OMServicesName.GetPenaltyActionsByActionGroupId);
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: { actionGroupId: actionGroupId }
            });
            
        },
    }
});