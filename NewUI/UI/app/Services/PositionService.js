'use strict';
app.factory('PositionService', function ($http) {
    return {

        /********************************** M E T H O D S **************************************/
        //Define Methods To Call API 
        //Call InitData for Old DropDownList Compatability for Now Only
        GetPositionsByDepartmentsID: function (departmentIds, policyId) {
            //  debugger;
            var service = clientAgentService().getOMSeviceData(enums().OMServicesName.GetPositionsByDepartmentsID);
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: {
                    departmentIds: departmentIds,
                    policyId: policyId
                }
            });
        },
        GetPositions: function () {
            var service = clientAgentService().getSeviceData("GetPosition");
            return $http.get(clientAgentService().baseUrl + service.URL);
        },

        GetPositionsLookup: function () {
            var service = clientAgentService().getOMSeviceData("GetPositionsLookup");
            return $http.get(clientAgentService().baseUrl + service.URL);
        },
    }
});