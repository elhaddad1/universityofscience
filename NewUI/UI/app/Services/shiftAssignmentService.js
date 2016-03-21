'use strict';
app.factory('shiftAssignmentService', function ($http) {
    return {

        /********************************* D A T A ********************************************/
        // Define Shared Data between Controllers that Uses this service
        // BackWordEditRule:{},

        /********************************** M E T H O D S  F O R  L I S T  P A G E  **************************************/
        //Define Methods To Call API 
        //Call InitData for  DropDownList 
        InitScreen: function (callback) {
            var service = clientAgentService().getSeviceData("SchedularEmployeeInit");
            $http.get(clientAgentService().baseUrl + service.URL).success(callback);
        },
        //Define Methods To Load Schedular Data 
        LoadSchedular: function (callback, emps, startDate, viewMonth) {
            var service = clientAgentService().getSeviceData("LoadSchedular");
            $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: { empIDS: emps, startDate: startDate, viewMonth: viewMonth }
            }).success(callback);
        },
        /********************************** M E T H O D S  F O R  C O P Y  A S S I G N M E N T  **************************************/
        //Define Methods To Copy shhift Assigment Schedular Data 
        CopyShiftAssignment: function (callback, sourceEmpID, startDate, endDate, targetEmpIDs, checkConflict) {
            var service = clientAgentService().getSeviceData("CopyShiftAssignment");
            $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: { sourceEmpID: sourceEmpID, startDate: startDate, endDate: endDate, targetEmpIDs: targetEmpIDs, checkConflict: checkConflict }
            }).success(callback);
        },
        /********************************** M E T H O D S  F O R  S H I F T  A S S I G N M E N T  **************************************/

        GetActiveShifts: function (callback) {
            var service = clientAgentService().getSeviceData("GetShiftsForShiftAssignment");
            $http.get(clientAgentService().baseUrl + service.URL).success(callback);
        },

        SaveShiftAssignmentData: function (callback, ShiftAssignment, isOverride) {
            if (isOverride == false) {
                var service = clientAgentService().getSeviceData("SaveShiftAssignmentData");
                //$http.get(service.URL, JSON.stringify(shiftobj)).success(callback);

                $http.post(clientAgentService().baseUrl + service.URL, ShiftAssignment).success(callback);
            }
            else {
                var service = clientAgentService().getSeviceData("SaveandOverrideShiftAssignmentData");
                //$http.get(service.URL, JSON.stringify(shiftobj)).success(callback);

                $http.post(clientAgentService().baseUrl + service.URL, ShiftAssignment).success(callback);
            }

        },

        /*********************** M E T H O D S  F O R  E X P O R T  R O A S T E R  R E P O R T  ****************************/

        ExportRoasterReport: function (employeeIds, startDate, endDate) {

            //var service = clientAgentService().getSeviceData("ExportRoasterReport");
            //$http({
            //    url: clientAgentService().baseUrl + service.URL,
            //    method: "GET",
            //    params: { employeeIds: employeeIds, startDate: startDate, endDate: endDate }
            //}).success(callback);

            var service = clientAgentService().getSeviceData("ExportRoasterReport");
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: { employeeIds: employeeIds, startDate: startDate, endDate: endDate }
            });

        },

        /*********************** M E T H O D S  F O R  E X P O R T  R O A S T E R  R E P O R T  ****************************/

        ExportExcelReport: function (employeeIds, startDate, endDate) {

          
            var service = clientAgentService().getSeviceData("ExportshiftExcelReport");
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: { employeeIds: employeeIds, startDate: startDate, endDate: endDate }
            });

        },
        
        /******************************************************/

        DeleteShiftAssignment: function (callback, ShiftAssignmentID, isBack) {
            var service = clientAgentService().getSeviceData("DeleteShiftAssignment");

            return $http({
                url: service.URL + "?AssignmentID=" + ShiftAssignmentID
                + "&isBack=" + isBack,
                method: "GET"
            }).success(callback);
        },

        /******************* Get Actual Permission************************/


        GetActualPermssion: function (callback) {
            var service = clientAgentService().getSeviceData("GetActualSchedulePermssion");
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET"
            }).success(callback);
        }
    }


});