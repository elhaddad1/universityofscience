'use strict';
app.factory('OrganizationUnitService', function ($http) {
    return {

        /********************************** M E T H O D S **************************************/
        //Define Methods To Call API 
        //Call InitData for Old DropDownList Compatability for Now Only
        GetOrganizationUnits: function () {
            //  debugger;
            var service = clientAgentService().getOMSeviceData(enums().OMServicesName.GetOrganizationUnits);
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET"
            });
        },
        GetDepartmentType: function () {
            //  debugger;
            var service = clientAgentService().getOMSeviceData("GetDepartmentType");
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET"
            });
        },
        //
    }
});