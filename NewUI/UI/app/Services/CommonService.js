'use strict';
app.factory('CommonService', function ($http) {

    return {
        GetConfigurations: function () {
            var service = clientAgentService().getCommonSeviceData("GetConfigurations");

            return $http.get(clientAgentService().baseUrl + service.URL);
        },
        GetPageSize: function (data) {
            var returnedPageSize = data[0].data.filter(function (item) {
                return item.Name == "GridPageSize";
            });
            console.log(returnedPageSize);
            if (returnedPageSize.length > 0)
                return returnedPageSize[0].Value;

        },
        GetPageSizeData: function (data) {
            var returnedPageSize = data.filter(function (item) {
                return item.Name == "GridPageSize";
            });
            console.log(returnedPageSize);
            if (returnedPageSize.length > 0)
                return returnedPageSize[0].Value;

        }


    }



});