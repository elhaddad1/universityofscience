'use strict';
app.factory('ShiftPageService', function ($http) {
    //var url = "http://localhost:8089/api/";
    //clientAgentService().ServiceConfig.baseUrl = url;
   
    return {
        InsertNewShift: function (callback,shiftobj) {
            var service = clientAgentService().getSeviceData("AddNewShift");
            //$http.get(service.URL, JSON.stringify(shiftobj)).success(callback);
            $http({
                url: service.URL,
                method: "POST",
                data: JSON.stringify(shiftobj)
            }).success(callback);

        },
        GetSpecificShiftDetails: function (ShiftID) {
            var service = clientAgentService().getSeviceData("GetSpecificShiftDetails");
            return $http({
                url: service.URL,
                method: "GET",
                params: { ID: ShiftID }
            });
        },

        UpdateShift: function (callback, shiftobj)
        {
            var service = clientAgentService().getSeviceData("UpdateShift");
            //$http.get(service.URL, JSON.stringify(shiftobj)).success(callback); 
            $http({
                url: service.URL,
                method: "POST",
                data: JSON.stringify(shiftobj)
            }).success(callback);

        },
        GetShifts: function (callback)
        {
            var service = clientAgentService().getSeviceData("GetShifts");
            //$http.get(service.URL, JSON.stringify(shiftobj)).success(callback); 
            $http({
                url: service.URL,
                method: "Get",
            }).success(callback);

        },
        UpdateShiftStatus: function (callback, shiftobj)
        {
            var service = clientAgentService().getSeviceData("UpdateShiftStatus");
            $http({
                url: service.URL,
                method: "POST",
                data: JSON.stringify(shiftobj)
            }).success(callback);
        }

       
    }
});
