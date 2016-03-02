'use strict';
app.factory('EmployeeSalaryHoldService', function ($http) {

    return {
        GetEmployeesSalaryHoldListServiceUrl: function () {
            return clientAgentService().getPayrollSeviceData("GetEmployeesSalaryHoldList").URL;
        },
        UnHoldSalary: function (salaryHoldId, successCallback) {
            $http({
                url: clientAgentService().getPayrollSeviceData("UnHoldSalary").URL,
                method: "PUT",
                params: {
                    id: salaryHoldId
                }
            }).success(successCallback);
        },
        InitScreen: function () {
            return $http.get(clientAgentService().baseUrl + clientAgentService().getPayrollSeviceData("InitScreen").URL);
        },
        AddSalaryHold: function (objSalaryHold, successCallback) {
            $http.post(clientAgentService().baseUrl + clientAgentService().getPayrollSeviceData("AddSalaryHold").URL, 
                objSalaryHold).success(successCallback);
        },
    }
});