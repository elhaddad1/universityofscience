'use strict';
app.factory('ConflictDetectionService', function ($http) {
    return {

        /********************************* D A T A ********************************************/
        // Define Shared Data between Controllers that Uses 
        InitUrl: clientAgentService().baseUrl + clientAgentService().getSeviceData("ClockDetectionLoadData").URL,
        DepartmentDataURL: "",
        PositionDataURL: "",
        EmployeeDataURL: " ",
        ProcessAttendenceMasterData: [],
        ProcessAttendencdetailData: [],
        MainClockPairing: null,
        fromDate: new Date(),
        toDate: new Date(),
        EmpIDS: [],
        CurrentEmpID: 0,
        currentEmployeeName: "",
        InvalidBundleClass: "invalid-Bundle",
        IsCommited: false,
        pairingStatusAfterCommit: {},
        ParentModal: {},
        MaxShiftDurationHours: 0,
        /********************************** M E T H O D S **************************************/
        //Define Methods To Call API 
        //Call InitData for Old DropDownList Compatability for Now Only
        InitScreen: function (callback) {
            var service = clientAgentService().getSeviceData("ClockDetectionLoadData");
            $http.get(clientAgentService().baseUrl + service.URL).success(callback);
        },

        InitSubOrdScreen: function (callback) {
            var service = clientAgentService().getSeviceData("InitSubOrdinAttendance");
            $http.get(clientAgentService().baseUrl + service.URL).success(callback);
        },
        GetDeptPosEmpData: function (callback) {
            var service = clientAgentService().getSeviceData("GetDeptPosEmpData");
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
            });
           // $http.get(clientAgentService().baseUrl + service.URL).success(callback);
        },
       
        GetAllPositions: function (callback) {
            var service = clientAgentService().getSeviceData("GetAllPositions");
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
            });
            // $http.get(clientAgentService().baseUrl + service.URL).success(callback);
        },

        //Call ProcessRecords to Get Attendence 
        ProcessRecords: function (callback, emps, startDate, endDate, isTodayConflict) {
            var service = clientAgentService().getSeviceData("ProcessRecords");
            $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "POST",
                data: { EmployeeIds: emps, startDate: startDate, endDate: endDate, isTodayConflict: isTodayConflict }
            }).success(callback);
        },
        //Get Employee Attendence Details Upon Request
        GetEmpAttendenceDetails: function (callback, emp, StartDate, EndDate) {
            var service = clientAgentService().getSeviceData("ProcessEmployeeAttendence");
            $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: { empID: emp, StartDate: StartDate, EndDate: EndDate }
            }).success(callback);
        },
        GetEmployeeAttendenceCount: function (callback, emp, StartDate, EndDate) {

            var service = clientAgentService().getSeviceData("ProcessEmployeeAttendenceCount");
            $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: { empID: emp, StartDate: StartDate, EndDate: EndDate }
            }).success(callback);

        },


        // gets employee pairing data 
        PairEmployeeAttendance: function (callback, empId, dataItem, StartDate, EndDate) {
            var service = clientAgentService().getSeviceData("PairEmployeeAttendance");
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: {
                    employeeId: empId,
                    StartDate: StartDate,
                    EndDate: EndDate
                }
            }).success(function (data) {
                return callback(data, dataItem);
            });
        },
        GetViewPairAttendance: function (empId, startDate, endDate) {
            var service = clientAgentService().getSeviceData("GetViewPairAttendance");
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: {
                    employeeId: empId,
                    StartDate: startDate,
                    EndDate: endDate
                }
            });
            //.success(callback);
        }
        ,
        SaveConflictPairingResult: function (jsonItem, startdate, endDate) {
            // debugger;
            var service = clientAgentService().getSeviceData("SaveConflictPairingResult");
            return $http({
                url: service.URL,
                method: "POST",
                data: { ClockPairingItems: jsonItem, startDate: startdate, endDate: endDate }
            });
            //.success(successCallback).error(errorCallback);
        }, ValidateBundle: function (employeeId, signDate, signType, attendanceID, uiDates) {
            // debugger;
            var service = clientAgentService().getSeviceData("ValidateBundle");
            return $http({
                url: service.URL,
                method: "GET",
                params: {
                    employeeId: employeeId,
                    signDate: signDate,
                    signType: signType,
                    attendanceID: attendanceID,
                    uiDates: uiDates
                }
            });
            //.success(successCallback).error(errorCallback);
        }
    }
});
app.run(function ($rootScope) {
    $rootScope.IsViewDetailsButton = false;
});