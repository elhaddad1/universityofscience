'use strict';
app.factory('EmployeeDeductionService', function ($http) {
    return {

        SaveNewEmployeeDeduction: function (employeeDeduction) {
            
            var service = "";
           
            if (employeeDeduction.ID > 0)
                service = clientAgentService().getOMSeviceData("UpdateEmployeeDeduction");
               
            else
                service = clientAgentService().getOMSeviceData(enums().OMServicesName.SaveNewEmployeeDeduction);

            
            return $http.post(clientAgentService().baseUrl + service.URL, employeeDeduction);
        },
        GetAllPenaltyCount: function (departmentIds, positionIDs, employeeIds) {
            var service = clientAgentService().getOMSeviceData("GetAllPenaltyCount");
           return $http({
               url: service.URL + "?departmentIds=" + departmentIds + "&positionIDs=" + positionIDs + "&employeeIds=" + employeeIds,
                method: "GET"
            })
        },
        GetEmployeesPenalities: function () {
            var service = clientAgentService().getOMSeviceData("GetEmployeesPenalities");
            return $http({
                url: service.URL,
                method: "GET"
            })
        },
        DeletePenalty: function (Penality) {
            var service = clientAgentService().getOMSeviceData("DeletePenalty");
            return $http({
                url: service.URL,
                method: "POST",
                data:JSON.stringify(Penality)
            })
        },
        DeleteDeduction: function (Deduction) {
            var service = clientAgentService().getOMSeviceData("DeleteDeduction");
            return $http.post(clientAgentService().baseUrl + service.URL, Deduction);
            
        },
        GetEmployeesDeductionsCount: function (departmentIds, positionIds, employeeIds) {
            //debugger;
            var service = clientAgentService().getOMSeviceData("GetEmployeesDeductionsCount");
            return $http({
                url: service.URL,
                method: "Get",
                params: {
                    departmentIds: departmentIds,
                    positionIds: positionIds,
                    employeeIds: employeeIds
                }
            });
        },
        GetEmployeeDeduction: function (deductionId) {
            //debugger;
            var service = clientAgentService().getOMSeviceData("GetEmployeeDeduction");
            return $http({
                url: service.URL,
                method: "Get",
                params: {
                    id: deductionId
                }
            });
        }


    }
});