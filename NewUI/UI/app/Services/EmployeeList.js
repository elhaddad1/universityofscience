'use strict';
app.factory('EmployeeListService', function ($http) {
    return {

        /********************************* D A T A ********************************************/
        // Define Shared Data between Controllers that Uses this service
        SearchEmployeesURL: clientAgentService().baseUrl + clientAgentService().getOMSeviceData("GetEmployees").URL,
        EmployeeData: [],
        currentSearchCriteria: "",
        //for Finger Print Mapping View 
        MappingResult:[],
        CurrentEmployeeID: 0,
        CuurentEmployeeName: "",
        CurrentEmployeeNumericCode:'',
        Mapping :{
            ID :0,
            EmployeeID :0,
            DeviceID :0  ,
            Code :""
        },
        GetDeviceURL :  clientAgentService().getOMSeviceData("GetDevices").URL,
        /********************************** M E T H O D S  F O R  L I S T  P A G E  **************************************/
        //Define Methods To Call API 
        SearchEmployees: function (callback , searchCriteria) {
            var service = clientAgentService().getOMSeviceData("GetEmployees");
            $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: { searchCriteria: searchCriteria }
            }).success(callback);
        },
        SearchEmployeesCount: function (callback , searchCriteria) {
            var service = clientAgentService().getOMSeviceData(enums().OMServicesName.EmployeesCount);
            $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: { searchCriteria: searchCriteria }
            }).success(callback);
        },
        /********************************** M E T H O D S  F O R  F I N G E R P R I N T  M A P P I N G  P A G E  **************************************/
        
        //Define Methods To Call GetEmployeeMapping API  take EmployeeID as a Paramter 
        GetDevices: function (callback ) {
            var service = clientAgentService().getOMSeviceData("GetDevices");
            $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                  
            }).success(callback);
        },

        //Define Methods To Call GetEmployeeMapping API  take EmployeeID as a Paramter 
        GetEmployeeMapping: function (callback , EmployeeID) {
            var service = clientAgentService().getOMSeviceData("GetEmployeeMapping");
            $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: { empID: EmployeeID }
            }).success(callback);
        },

        GetMappingResult : function ()
        {
            return  this.MappingResult;
        },

        //Define Methods To Save Mapping Save(long ID,  long empID, long DeviceID, string Code) 
        SaveMapping: function (callback ) {
            var service = clientAgentService().getOMSeviceData("SaveMapping");          
            $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: { ID: this.Mapping.ID , empID :this.Mapping.EmployeeID , DeviceID:this.Mapping.DeviceID , Code : this.Mapping.Code}
            }).success(callback);
        },
        //delete Mapping

        DeleteMapping: function (callback , ID) {
            var service = clientAgentService().getOMSeviceData("DeleteMapping");
            $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: { ID: ID }
            }).success(callback);
        },

 

    /********************************** E D I T  E M P L O Y E E  S E C T I O N ***************************************/

    //Object that filled with EmployeeData
    EditEmployeeData :null,
    //methods fro getting Employee Data
    GetEmployeeDataforEdit : function (callback ,empID ) {
        var service = clientAgentService().getOMSeviceData("GetEmployeeDataforEdit");          
            $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: { empID: empID}
            }).success(callback , empID);
    },

    SaveAutoMapping: function (EmployeeMapping) {
        var service = clientAgentService().getOMSeviceData("SaveAutoMapping");
        return $http.post(clientAgentService().baseUrl + service.URL, EmployeeMapping);

    },
    SearchTerminatedEmployees: function (callback , searchCriteria) {
        var service = clientAgentService().getOMSeviceData("GetTerminatedEmployees");
        $http({
            url: clientAgentService().baseUrl + service.URL,
            method: "GET",
            params: { searchCriteria: searchCriteria }
        }).success(callback);
    },
    SearchTerminatedEmployeesCount: function (callback , searchCriteria) {
        var service = clientAgentService().getOMSeviceData("GetTerminatedEmployeesCount");
        $http({
            url: clientAgentService().baseUrl + service.URL,
            method: "GET",
            params: { searchCriteria: searchCriteria }
        }).success(callback);
    },

    CheckSalaryItems: function ()
    {
        var service = clientAgentService().getOMSeviceData("CheckSalaryItems");
        return $http({
            url: clientAgentService().baseUrl + service.URL,
            method: "GET",
        });
    },
      
        /***************************************    E M P L O Y E E    E X P E R I E N C E  ********************************************/
    GetEmployeeExperience: function myfunction(callback, empID) {

        var service = clientAgentService().getOMSeviceData("GetEmployeeExperience");
            $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: { empID: empID }
            }).success(callback, empID);
    },

    AddEmployeeExperience: function (callback, EmployeeExperience) { 
        var service = clientAgentService().getOMSeviceData("AddEmployeeExperience");
        return $http({
            url: service.URL,
            method: "POST",
            data:  JSON.stringify(EmployeeExperience) 
        }).success(callback);
    }



    }

});