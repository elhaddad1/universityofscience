'use strict';
app.factory('PayrollItemService', function ($http) {

   
    return {
        GetPayrollItemWithTemplate: function ()
        {
            var service = clientAgentService().getPayrollSeviceData("GetPayrollItemWithTemplate");
            return $http({
                url: service.URL,
                method: "Get"
            });
        }

    }
});
