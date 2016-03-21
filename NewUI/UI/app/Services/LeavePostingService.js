'use strict';
app.factory('LeavePostingService', function ($http) {
    //var url = "http://localhost:8089/api/";
    //clientAgentService().ServiceConfig.baseUrl = url;
   
    return {
       
        GetCurrentAndPreviousYears: function ()
        {
            var service = clientAgentService().getSeviceData("GetCurrentAndPreviousYears");
           return $http({
               url: service.URL,
               method: "GET",
            })
        },
        AddLeavePost: function (LeavePostData)
        {
            var service = clientAgentService().getSeviceData("AddLeavePost");
            return $http({
                url: service.URL,
                method: "POST",
                data: JSON.stringify(LeavePostData)
            })
        }

       
    }
});
