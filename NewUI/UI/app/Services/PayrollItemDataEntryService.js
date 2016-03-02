'use strict';
app.factory('PayrollItemDataEntryService', function ($http) {

   
    return {
        GetPayrollItemDataEntryCount: function (departmentID, year, monthID, payrollItemID)
        {
            var service = clientAgentService().getPayrollSeviceData("GetPayrollItemDataEntryCount");
            return $http({
                url: service.URL,
                method: "Get",
                params: {
                    departmentID: departmentID,
                    year: year,
                    monthID: monthID,
                    payrollItemID: payrollItemID

                }
            });
        }

    }
});
