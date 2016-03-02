'use strict';
app.factory('PolicyService', function ($http) {
    return {

        /********************************** M E T H O D S **************************************/
        //Define Methods To Call API 
        //Call InitData for Old DropDownList Compatability for Now Only
        GetAllPolicies: function () {
            
            var service = clientAgentService().getSeviceData(enums().TMServicesName.GetAllPolicies);
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET"
            });
        },
        GetAssignedPositionsByPolicyID: function (policyId) {
            var service = clientAgentService().getSeviceData(enums().TMServicesName.GetAssignedPositionsByPolicyID);
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: {                  
                    policyId: policyId
                }
            });
        },
        GetAllPoliciesExceptCurrent: function (currentPolicy) {
            var service = clientAgentService().getSeviceData(enums().TMServicesName.GetAllPoliciesExceptCurrent);
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: {
                    currentPolicy: currentPolicy
                }
            });
        },
        GetPositionsByPolicyTypeID: function (policyId) {
            var service = clientAgentService().getSeviceData(enums().TMServicesName.GetPositionsByPolicyTypeID);
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: {                  
                    policyId: policyId
                }
            });
        },
        GetAllEmployeesNotAssignedToPolicy: function ()
        {
            var service = clientAgentService().getSeviceData("GetAllEmployeesNotAssignedToPolicy");
           return $http({
                url: service.URL,
                method: "GET"
            })
        },
        GetEmployeesAssignedToSpecificPolicy: function (policyId)
        {
            var service = clientAgentService().getSeviceData("GetEmployeesAssignedToSpecificPolicy");
            return $http({
                url: service.URL,
                method: "GET",
                params: {
                    policyId: policyId
                }
            })
        }
    }
});