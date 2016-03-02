'use strict';
app.factory('PolicyAssignmentService', function ($http) {
    return {

        /********************************** M E T H O D S **************************************/
        //Define Methods To Call API 


        SaveNewTimeAndAttendancePolicyAssignment: function (policyAssignments) {
            var service = clientAgentService().getSeviceData(enums().TMServicesName.SaveNewTimeAndAttendancePolicyAssignment);
            return $http.post(clientAgentService().baseUrl + service.URL, policyAssignments);
            //return $http({
            //    url: clientAgentService().baseUrl + service.URL,
            //    method: "POST",
            //    params: {                  
            //        timeAttendancePolicyAssignments: policyAssignments
            //    }
            //});
        },
        GetAllPositions: function (callback) {
            var service = clientAgentService().getSeviceData("GetAllPositions");
            $http({
                url: service.URL,
                method: "GET"
            }).success(callback);
        },
        
        GetAllTimeAssignmentCount: function (policyID,EmployeeIDs) {
                var service = clientAgentService().getSeviceData("GetAllTimeAssignmentCount");
                return $http.get(clientAgentService().baseUrl + service.URL + "?policyID=" + policyID + "&e=" + EmployeeIDs);
            },

            GetTimeAssignmentsRelatedToPolicyAndPositions: function () {
                var service = clientAgentService().getSeviceData("GetTimeAssignmentsRelatedToPolicyAndPositions");
                //return $http.post(clientAgentService().baseUrl + service.URL ,JSON.stringify(TimeAssignmentObj))
                return $http({
                    url: service.URL,
                    method: "GET"
             
                });
            },
            UpdateAttendancePolicyAssignment: function (policyAssignment) {
                var service = clientAgentService().getSeviceData(enums().TMServicesName.UpdateAttendancePolicyAssignment);
                return $http.post(clientAgentService().baseUrl + service.URL, policyAssignment);
            },

    }
});