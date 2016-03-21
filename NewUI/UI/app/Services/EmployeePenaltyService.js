'use strict';
app.factory('EmployeePenaltyService', function ($http) {
    return {

        /********************************** M E T H O D S **************************************/
        //Define Methods To Call API 

        SaveNewEmployeePenalty: function (employeePenalty) {
            var service = clientAgentService().getOMSeviceData(enums().OMServicesName.SaveNewEmployeePenalty);
            return $http.post(clientAgentService().baseUrl + service.URL, employeePenalty);
        },
        GetRecomendedPenalty: function (employeeID, actionID) {
            var service = clientAgentService().getOMSeviceData(enums().OMServicesName.GetRecomendedPenalty);
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: {
                    employeeID: employeeID,
                    actionID: actionID
                }
            });
            
        },
        ExportToExcelToEmployeePenaltyReview: function (reportParms) {
            var service = clientAgentService().getSeviceData("ExportToExcelToEmployeePenaltyReview");
            return $http({
                url: service.URL,   
                method: "POST", 
                data: JSON.stringify(reportParms)          
            });
            
        },


        GetPenaltyList: function (reportParms) {
            var service = clientAgentService().getSeviceData("GetPenaltyList");
            return $http({
                url: service.URL,   
                method: "POST", 
                data: JSON.stringify(reportParms)          

                   
                
            });
            
        },
        GetPendingPenaltyApprovals: function (EmployeeID) {
            //debugger;
            var service = clientAgentService().getSeviceData("GetPendingPenaltyApprovals");
            return $http({
                url: service.URL,
                method: "Get",
                params: {
                    EmployeeID: EmployeeID
                   
                }
            });
        },
        GetApprovedPenaltyApprovals: function (EmployeeID) {
            //debugger;
            var service = clientAgentService().getSeviceData("GetApprovedPenaltyApprovals");
            return $http({
                url: service.URL,
                method: "Get",
                params: {
                    EmployeeID: EmployeeID
                   
                }
            });
        },
        GetRejectedPenaltyApprovals: function (EmployeeID) {
            //debugger;
            var service = clientAgentService().getSeviceData("GetRejectedPenaltyApprovals");
            return $http({
                url: service.URL,
                method: "Get",
                params: {
                    EmployeeID: EmployeeID
                   
                }
            });
        },
        UpdatePenaltyApprovals: function (penaltyApprovalModelList) {
            var service = clientAgentService().getSeviceData("UpdatePenaltyApprovals");
            return $http.post(clientAgentService().baseUrl + service.URL, penaltyApprovalModelList);

        },
        ApproveRejectEmployeePenalty: function (approveRejectPenalty) {
            //debugger;
            var service = clientAgentService().getSeviceData("ApproveRejectEmployeePenalty");
            return $http({
                url: service.URL,
                method: "POST",
                data: JSON.stringify(approveRejectPenalty)
            });
        }

    }
});