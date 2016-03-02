'use strict';
app.factory('ClosingMonthPayrollService', function ($http) {

   
    return {
        GetOpenedMonthsByEmployee: function (employeeId, year)
        {
            var service = clientAgentService().getPayrollSeviceData("GetOpenedMonthsByEmployee");
            return $http({
                url: service.URL,
                method: "Get",
                params: {
                    employeeId: employeeId,
                    year: year
                }
            });
        },
        CheckClosingMonthByDepartmentAndPayrollItem: function (departmentID, year, monthID, payrollItemID)
        {
            var service = clientAgentService().getPayrollSeviceData("CheckClosingMonthByDepartmentAndPayrollItem");
            return $http({
                url: service.URL,
                method: "Get",
                params: {
                    departmentID: departmentID,
                    year: year,
                    monthID: monthID,
                    payrollItemID:payrollItemID

                }
            });
        }
        

    }
});
