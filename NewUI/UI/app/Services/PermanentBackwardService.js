'use strict';
app.factory('PermanentBackwardService', function ($http) {

    return {

        /********************************** M E T H O D S  F O R  L I S T  P A G E  **************************************/
        //Define Methods To Get ALl Permanent Permssion
       
        GetAll: function (callback) {
            var service = clientAgentService().getSeviceData("PermanentBackwardGetAll");
            $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET"
            }).success(callback);
        },
        //Define Methods To Get ALl Permanent Permssion Count
        GetAllCount: function (callback) {
            var service = clientAgentService().getSeviceData("PermanentBackwardGetAllCount");
            $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET"
            }).success(callback);
        },

        //Delete PermanentBackWord Permission by ID 
        Delete: function (callback, ID)
        {
            var service = clientAgentService().getSeviceData("PermanentBackwardDelete");
            $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: { ID: ID }
            }).success(callback);
        },
        /********************************** M E T H O D S  F O R  A D D  N E W P E R M A N E N T  P E R M I S S I O N  **************************************/
  
        //Define Methods To Get Employees
       
        GetEmployees: function (callback) {
            var service = clientAgentService().getSeviceData("PermanentBackwardGetEmployee");
            $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET"
            }).success(callback);
        },

        //Add new Permission 
        AddPermission: function (callback, EmployeeID , Duration)
        {
            var service = clientAgentService().getSeviceData("PermanentBackwardAdd");
            $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: { EmployeeID: EmployeeID, Duration: Duration }
            }).success(callback);
        },
        DeleteBulkPermenantBackward: function (callback, DeleteIDs) {
            var service = clientAgentService().getSeviceData("DeleteBulkPermenantBackward");
            return $http({
                url: service.URL,
                method: "POST",
                data: {
                    DeleteIDs: DeleteIDs
                }
            }).success(callback);
        },

    }
});