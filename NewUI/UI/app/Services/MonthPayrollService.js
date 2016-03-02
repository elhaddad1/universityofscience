'use strict';
app.factory('MonthPayrollService', function ($http) {

   
    return {
        GetMonthDataOnly: function ()
        {
            var service = clientAgentService().getPayrollSeviceData("GetMonthDataOnly");
            return $http({
                url: service.URL,
                method: "Get"
            });
        }

    }
});
