'use strict';
app.factory('EmployeeService', function ($http) {
    return {

        /********************************* D A T A ********************************************/
        // Define Shared Data between Controllers that Uses 
        GetLookupModelsData: function (data) {
            var OMLookupModel = {
                HR_ContactType: [],
                HR_ContractDuration: [],
                HR_ContractType: [],
                HR_Gender: [],
                HR_Religion: [],
                HR_MaritalStatus: [],
                HR_InsuranceStatus: [],
                HR_EmployeeStatus: [],
                Country: [],
                HR_JobType: [],
                Nationality: [],
                HR_Specialty: [],
                HR_TerminationReason: [],
                HR_TerminationStatus: [],
                HR_TerminationTypeL: [],
                HR_PaidOffDaysType: [],
                HR_WorkingHoursType: [],
                HR_MilitaryStatus: [],
                HR_EmployeeDeductionType: [],
                HR_EmployeeQualificationType: [],
                HR_EmployeeConfiguration:[]
            };
            $.each(data, function (index, item) {

                switch (item.LookupID) {
                    case enums().OMLookupModelEnums.HR_ContactType:
                        OMLookupModel.HR_ContactType = item.LookupData;
                        break;
                    case enums().OMLookupModelEnums.HR_ContractDuration:
                        OMLookupModel.HR_ContractDuration = item.LookupData;
                        break;
                    case enums().OMLookupModelEnums.HR_ContractType:
                        OMLookupModel.HR_ContractType = item.LookupData;
                        break;
                    case enums().OMLookupModelEnums.HR_Gender:
                        OMLookupModel.HR_Gender = item.LookupData;
                        break;
                    case enums().OMLookupModelEnums.HR_Religion:
                        OMLookupModel.HR_Religion = item.LookupData;
                        break;
                    case enums().OMLookupModelEnums.HR_MaritalStatus:
                        OMLookupModel.HR_MaritalStatus = item.LookupData;
                        break;
                    case enums().OMLookupModelEnums.HR_InsuranceStatus:
                        OMLookupModel.HR_InsuranceStatus = item.LookupData;
                        break;
                    case enums().OMLookupModelEnums.HR_EmployeeStatus:
                        OMLookupModel.HR_EmployeeStatus = item.LookupData;
                        break;
                    case enums().OMLookupModelEnums.Country:
                        OMLookupModel.Country = item.LookupData;
                        break;
                    case enums().OMLookupModelEnums.HR_JobType:
                        OMLookupModel.HR_JobType = item.LookupData;
                        break;
                    case enums().OMLookupModelEnums.Nationality:
                        OMLookupModel.Nationality = item.LookupData;
                        break;
                    case enums().OMLookupModelEnums.HR_Specialty:
                        OMLookupModel.HR_Specialty = item.LookupData;
                        break;
                    case enums().OMLookupModelEnums.HR_TerminationReason:
                        OMLookupModel.HR_TerminationReason = item.LookupData;
                        break;
                    case enums().OMLookupModelEnums.HR_TerminationStatus:
                        OMLookupModel.HR_TerminationStatus = item.LookupData;
                        break;
                    case enums().OMLookupModelEnums.HR_TerminationType:
                        OMLookupModel.HR_TerminationType = item.LookupData;
                        break;
                    case enums().OMLookupModelEnums.HR_PaidOffDaysType:
                        OMLookupModel.HR_PaidOffDaysType = item.LookupData;
                        break;
                    case enums().OMLookupModelEnums.HR_WorkingHoursType:
                        OMLookupModel.HR_WorkingHoursType = item.LookupData;
                        break;
                    case enums().OMLookupModelEnums.HR_MilitaryStatus:
                        OMLookupModel.HR_MilitaryStatus = item.LookupData;
                        break;
                    case enums().OMLookupModelEnums.HR_EmployeeDeductionType:
                        OMLookupModel.HR_EmployeeDeductionType = item.LookupData;
                        break;
                    case enums().OMLookupModelEnums.HR_EmployeeQualificationType:
                        OMLookupModel.HR_EmployeeQualificationType = item.LookupData;
                        break;
                    case enums().OMLookupModelEnums.HR_EmployeeConfiguration:
                        OMLookupModel.HR_EmployeeConfiguration = item.LookupData;
                        break;
                        //


                }
            });
            return OMLookupModel;

        },

        /********************************** M E T H O D S **************************************/
        //Define Methods To Call API 
        //Call InitData for Old DropDownList Compatability for Now Only
        InitScreen: function (callback, ids) {
            //  debugger;
            var service = clientAgentService().getOMSeviceData(enums().OMServicesName.Lookups);
            $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: { ids: ids }
            }).success(callback);
        },
        GetEmployees: function () {
            var service = clientAgentService().getOMSeviceData(enums().OMServicesName.GetEmployees);
            return $http.get(clientAgentService().baseUrl + service.URL);
        },
        GetEmployeesWithContractTypes: function () {
            var service = clientAgentService().getOMSeviceData(enums().OMServicesName.GetEmployeesWithContractTypes);
            return $http.get(clientAgentService().baseUrl + service.URL);
        },
        InitScreenWithpoutCallbck: function (ids) {
            //  debugger;
            var service = clientAgentService().getOMSeviceData(enums().OMServicesName.Lookups);
           return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: { ids: ids }
            });
        },
        LoadCitiesByCountry: function (callback, countryId) {
            //  debugger;
            var service = clientAgentService().getOMSeviceData(enums().OMServicesName.CitiesByCountryId);
            $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: { countryId: countryId }
            }).success(callback);
        },
        LoadRegionsByCity: function (callback, cityId) {
            //  debugger;
            var service = clientAgentService().getOMSeviceData(enums().OMServicesName.RegionsByCityId);
            $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: { cityId: cityId }
            }).success(callback);
        },
        SaveEmployee: function (callback, EmployeeJson) {
            var service = "";
            if (EmployeeJson.ID > 0)
                service = clientAgentService().getOMSeviceData(enums().OMServicesName.UpdateEmployee);
                
            else
                service = clientAgentService().getOMSeviceData(enums().OMServicesName.SaveEmployee);
            $http.post(clientAgentService().baseUrl + service.URL, EmployeeJson).success(callback);
        },
        SaveTerminationEmployee: function (callback, EmployeeTerminationJson) {

            var service = clientAgentService().getOMSeviceData(enums().OMServicesName.POSTEmployeeTermination);
            $http.post(service.URL, EmployeeTerminationJson).success(callback);
        },
        RollbackEmployeeTermination: function ( employeeId) {

            var service = clientAgentService().getOMSeviceData(enums().OMServicesName.RollbackEmployeeTermination);

            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "POST",
                params: {
                    employeeId : employeeId
                }
            });
        },
        Upload: function (callback, Files,EmployeeId) {

           var service = clientAgentService().getOMSeviceData(enums().OMServicesName.Upload);
           $http({
               url: clientAgentService().baseUrl + service.URL,
               method: 'POST',
               headers: { 'Content-Type': undefined, 'EmployeeId': EmployeeId },
               transformRequest: function (data) {
                   var formData = new FormData();
                   for (var i = 0; i < data.files.length; i++) {
                       formData.append('file' + i, data.files[i]);
                   }
                   return formData;
               },
               data: { files: Files }
           }).success(callback);
        },
        InitEntity: function () {
            var EmployeeModel = {
                ArFName: null,
                ArSName: null,
                ArThName: null,
                ArLName: null,
                EnFName: null,
                EnSName: null,
                EnThName: null,
                EnLName: null,
                Birthdate: null,
                GenderID: null,
                PID: null,
                MaritalStatusID: null,
                ReligionID: null,
                NoOfChildren: null,
                SpecialtyID: null,
                HR_Employeeaddresses: [],
                HR_EmployeeContacts: [],
                HR_Employeenationalities: [],
                HR_EmployeeQualifications: [],
                HR_EmployeeWorkingPeriods: []

            }
            return EmployeeModel;
        },
        InitTerminationEntity: function () {
            var TerminationModel = {
                EmployeeID: null,
                TerminationTypeID: null,
                TerminationReasonID: null,
                TerminationStatusID: null,
                WorkingPeriodID: null,
                LastWorkingDate: null,
                TerminationDate: null,
                Comments: null,
                IsBlackListed: null,
                IsDecease: null,
                DeceaseDate: null,
                HR_EmployeeWorkingPeriods: []

            }
            return TerminationModel;
        },
        GetDirectManagerEmployeeInTheSamePositionLookup: function (employeeID) {
            var service = clientAgentService().getOMSeviceData(enums().OMServicesName.GetDirectManagerEmployeeInTheSamePositionLookup);
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: {
                    employeeID: employeeID
                }
            });

        },
        GetEmployeePositionsByDirectManagerIDCount: function (employeeID) {
            var service = clientAgentService().getOMSeviceData(enums().OMServicesName.GetEmployeePositionsByDirectManagerIDCount);
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: {
                    employeeID: employeeID
                }
            });

        },
        GetContractExpiresAfter: function () {
            //var service = clientAgentService().getOMSeviceData(enums().OMServicesName.GetContractExpiresAfter);
            //return $http({
            //    url: clientAgentService().baseUrl + service.URL,
            //    method: "GET"
            //});

            var service = clientAgentService().getOMSeviceData("GetAllLeaveRequestList");
            //$http.get(service.URL, JSON.stringify(shiftobj)).success(callback);
           return $http({
                url: service.URL,
                method: "GET"

            })

        }        ,
        ExportContractExpiresAfterReport: function () {
            var service = clientAgentService().getOMSeviceData(enums().OMServicesName.ExportContractExpiresAfterReport);
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "POST"
            });
        },
        SaveAutoMapping: function (EmployeeMapping) {
            var service = clientAgentService().getOMSeviceData("SaveAutoMapping");
            return $http.post(clientAgentService().baseUrl + service.URL, EmployeeMapping);

        },
        ReHireEmployee: function (callback, EmployeeJson) {
            var service = "";
           
                service = clientAgentService().getOMSeviceData("ReHireEmployee");
                
            
            $http.post(clientAgentService().baseUrl + service.URL, EmployeeJson).success(callback);
        },
    }
});