'use strict';
app.factory('HolidayService', function ($http) {
    return {

        /********************************** M E T H O D S **************************************/
        //Define Methods To Call API 
        //Call InitData for Old DropDownList Compatability for Now Only
        InitScreen: function (id, year) {
            if (id == undefined && year == undefined)
                return [];

            var service = clientAgentService().getSeviceData(enums().TMServicesName.GetAllHolidayData);
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: { id: id, year: year }
            });
        },
        GetAllHolidayDataCount: function (id, year) {
            if (id == undefined && year == undefined)
                return [];

            var service = clientAgentService().getSeviceData(enums().TMServicesName.GetAllHolidayDataCount);
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET",
                params: { id: id, year: year }
            });
        },
        InitListScreen: function () {
            //  debugger;
            var service = clientAgentService().getSeviceData(enums().TMServicesName.GetAllHolidayData);
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET"
            });
        },
        LoadHolidayInfo: function () {
            //  debugger;
            var service = clientAgentService().getSeviceData(enums().TMServicesName.GetAllHolidayInfo);
            return $http({
                url: clientAgentService().baseUrl + service.URL,
                method: "GET"
            });
        },
        SaveHoliday: function (HolidayJson) {
            var service = clientAgentService().getSeviceData(enums().TMServicesName.AddNewHolidayData);
            return $http.post(service.URL, HolidayJson);
        },
        InitEntity: function () {
            var HolidayModel = {
                ID: null,
                HolidayID: null,
                HolidayDate: null
            };
            return HolidayModel;
        },
        DeleteHoliday: function (id) {
            var service = clientAgentService().getSeviceData(enums().TMServicesName.DeleteHolidayData);
            return $http.post(service.URL, id);
        },
        CheckOnHolidayBeforeDelete: function (HolidayID)
        {
            var service = clientAgentService().getSeviceData("CheckOnHolidayBeforeDelete");
           return $http({
                url: service.URL,
                method: "GET",
                params: {
                    HolidayID: HolidayID
                }
            });
        },
        getUrlVars: function () {
            var vars = [], hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }

            if (vars && vars.ID)
                return vars.ID;

            return vars;
        }
    }
});