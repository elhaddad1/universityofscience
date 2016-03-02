var clientAgentService = (function () {
    "use strict";
    var baseUrl = commonURLs().baseUrl;
    var clientModel = {
        baseUrl: baseUrl,
        Login: Login,
        callService: callService,
        getSeviceData: getSeviceData,
        getOMSeviceData: getOMSeviceData,
        getCoreServiceData: getCoreServiceData,
        addDataCache: addDataCache,
        getDataCache: getDataCache,
        clearDataCache: clearDataCache,
        addCookie: addCookie,
        addCookiewithExpiry: addCookiewithExpiry,
        getCookie: getCookie,
        clearCookie: clearCookie,
        getCommonSeviceData: getCommonSeviceData,
        getPayrollSeviceData: getPayrollSeviceData
    };

    return clientModel;

    function Login() {
        var tokenCookie = this.getCookie("token");
        var userCookie = this.getCookie("user");
        var perms = this.getDataCache("perms");
        if (tokenCookie == null || userCookie == null || perms == null) {            
            return false;
        }
        return true;
    }

    // not implemented
    function callService(name, data) {
    }    

    //Get Service Data from json file that hold service Url and Segntiure
    function getSeviceData(serviceName) {
        //debugger;
        if (!this.Login()) {            
            window.location.href = "#/app/dashboard";
            window.location.reload(true);
            return undefined;
        }

        var serviceData = new Object();

        var returnedServices = commonURLs().timeManagementServicesList.filter(function (item) {
            return item.name == serviceName;
        });

        if (returnedServices.length > 0)
            serviceData = returnedServices[0].data;

        return serviceData;
    }


    //Get Service Data from json file that hold service Url and Segntiure for Organization Mangment Module 
    function getOMSeviceData(serviceName) {
        if (!this.Login()) {
            window.location.href = "#/app/dashboard";
            window.location.reload(true);
            return undefined;
        }

        var serviceData = new Object();

        var returnedServices = commonURLs().organizationManagementServicesList.filter(function (item) {
            return item.name == serviceName;
        });

        if (returnedServices.length > 0)
            serviceData = returnedServices[0].data;

        return serviceData;
    }

    function getPayrollSeviceData(serviceName) {
        if (!this.Login()) {
            window.location.href = "#/app/dashboard";
            window.location.reload(true);
            return undefined;
        }

        var serviceData = new Object();

        var returnedServices = commonURLs().payRollServicesList.filter(function (item) {
            return item.name == serviceName;
        });

        if (returnedServices.length > 0)
            serviceData = returnedServices[0].data;

        return serviceData;
    }
    function getCommonSeviceData(serviceName) {        
        if (!this.Login()) {
            window.location.href = "#/app/dashboard";
            window.location.reload(true);
            return undefined;
        }

        var serviceData = new Object();

        var returnedServices = commonURLs().commonManagementServicesList.filter(function (item) {
            return item.name == serviceName;
        });

        if (returnedServices.length > 0)
            serviceData = returnedServices[0].data;

        return serviceData;
    }
    //Get Service Data from json file that hold service Url and Segntiure for Core Module 
    function getCoreServiceData(serviceName) {
        var serviceData = new Object();

        var returnedServices = commonURLs().coreServicesList.filter(function (item) {
            return item.name == serviceName;
        });

        if (returnedServices.length > 0)
            serviceData = returnedServices[0].data;

        return serviceData;
    }


    /****************************** L O C A L  S T O R A G E   M E T H O D S ******************************/
    //add data cache
    function addDataCache(key, data) {
        //check if key and data has value
        if (!key || !data) { return; }
        //incase of data is an object then stringify it 
        if (typeof data === "object") {
            data = JSON.stringify(data);
        }
        //set key and data in Local Storage
        localStorage.setItem(key, data);
    }
    //get data cache
    function getDataCache(key) {
        //get Value from local Storage
        var value = localStorage.getItem(key);
        //if doesnot exist then return
        if (!value) { return null; }
        // assume it is an object that has been stringified
        if (value[0] === "{" || value[0] === "[") {
            value = JSON.parse(value);
        }
        return value;
    }
    //clear data cache
    function clearDataCache(key) {
        //Remove local Storage Item
        localStorage.removeItem(key);
    }


    /****************************** C O O K I E S   M E T H O D S ******************************/

    //add cookie
    function addCookie(key, data) {
        //just call addcookie with expiry and pass minutes with null
        addCookiewithExpiry(key, data, null);
    }
    //add cookie with expiry
    function addCookiewithExpiry(key, data, minutes) {
        var expires = "";
        //check if minutes not equal null
        if (minutes) {
            var date = new Date();
            date.setTime(date.getTime() + (minutes * 60 * 1000));
            //prepare expire info for cookie
            expires = "; expires=" + date.toGMTString();
        }
        //Add cookie to document cookies
        document.cookie = key + "=" + data + expires + "; path=/";
    }
    //get cookie
    function getCookie(key) {
        //define cookie Splitter String "key="
        var cookieNameSplitter = key + "=";
        //Get cookie Array
        var cookieArray = document.cookie.split(';');
        //itterate on cookie array to reach the desired cokkie
        for (var cookieIndex = 0; cookieIndex < cookieArray.length; cookieIndex++) {
            //assign cookie
            var cookie = cookieArray[cookieIndex];
            //Trim first Spaces
            while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length);
            //check if cookie starts with desiredkey splitter 
            if (cookie.indexOf(cookieNameSplitter) == 0)
                //return the value of the cookie
                return cookie.substring(cookieNameSplitter.length, cookie.length);
        }
        return null;
    }
    //clear cookie
    function clearCookie(key) {
        //to Clear cookie just add ot with empty value and expiry with -ve 1 
        addCookiewithExpiry(key, "", -1);
    }
});