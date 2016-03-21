'use strict';
app.factory('manageSalaryService', function ($http) {
    return {
        /********************************** M E T H O D S **************************************/
        GetSalaryItems: function (EmployeeId)
        {
            var service = clientAgentService().getOMSeviceData("GetSalaryItems");
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: { EmployeeId: EmployeeId }
            });
        },
        AddSalaryToSpecificEmployee: function (EmployeeSalary)
        {
            var service = clientAgentService().getOMSeviceData("AddSalaryToSpecificEmployee");
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "POST",
                data: JSON.stringify(EmployeeSalary)
            });
        },
        GetEmployeeSalary: function ()
        {
            var service = clientAgentService().getPayrollSeviceData("GetEmployeeSalary");
            return $http({
                url: service.URL,
                method: "Get"               
            });
        },
        GetSalaryAndBenefitRelatedToEmployee: function (employeeId)
        {
            var service = clientAgentService().getPayrollSeviceData("GetSalaryAndBenefit");
            return $http({
                url: service.URL,
                method: "Get",
                params: 
                    { employeeId: employeeId }
            });
        },
        CheckEffectiveDate: function (employeeId, effectiveDate)
        {
            var service = clientAgentService().getPayrollSeviceData("CheckEffectiveDate");
            return $http({
                url: service.URL,
                method: "Get",
                params: 
                    { employeeId: employeeId, effectiveDate: effectiveDate }
            });
        },
        SaveEmployeeSalaryData: function (employeeSalaryObj)
        {
            var service = clientAgentService().getPayrollSeviceData("SaveEmployeeSalaryData");
            return $http({
                 url: service.URL,
                 method: "POST",
                 data: JSON.stringify(employeeSalaryObj)
    });
        },

        GetSalaryAndBenefitToEdit: function (employeeId, effectiveDate)
        {
            var service = clientAgentService().getPayrollSeviceData("GetSalaryAndBenefitToEdit");
            return $http({
                url: service.URL,
                method: "Get",
                params: 
                    { employeeId: employeeId, effectiveDate: effectiveDate}
            });
        },
        Update: function (salaryBenefitsObj) {
            var service = clientAgentService().getPayrollSeviceData("Update");
            return $http({
                url: service.URL,
                method: "PUT",
                data: JSON.stringify(salaryBenefitsObj)
                
            });   
           // return $http.put(service.URL + id, salaryBenefitsObj);
        },
        CheckEffectiveDateToEdit: function (employeeId, newEffectiveDate, currentEffectiveDate)
        {
            var service = clientAgentService().getPayrollSeviceData("CheckEffectiveDateToEdit");
            return $http({
                url: service.URL,
                method: "Get",
                params:
                    { employeeId: employeeId, newEffectiveDate: newEffectiveDate, currentEffectiveDate: currentEffectiveDate }
            });
        },
        Delete: function (employeeEffectiveDate)
        {
            var service = clientAgentService().getPayrollSeviceData("Delete");
            return $http({
                url: service.URL,
                method: "Post",
                data: JSON.stringify(employeeEffectiveDate)
            });
        }
    }
});