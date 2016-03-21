'use strict';
app.factory('EmployeeInformationService', function ($http) {
    return {       
        GetEmployeeBasicDataLookup: function () {
            var service = clientAgentService().getOMSeviceData("GetEmployeeBasicDataLookup");
           return $http({
               url: service.URL,
                method: "GET"
            })
        },//
        ExportEmployeeInformation: function (employeeModel) {

          
               var service = clientAgentService().getOMSeviceData("ExportEmployeeInformation");

            

               return $http.post(clientAgentService().baseUrl + service.URL, employeeModel);
        },
    }
});