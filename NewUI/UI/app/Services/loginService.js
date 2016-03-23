var loginService = (function ($http, $q, $rootScope, $state, $log) {
    "use strict";
    return {
        Login: function () {
            //var tokenCookie = clientAgentService().getCookie("token");
            //var userCookie = clientAgentService().getCookie("user");
            //var perms = clientAgentService().getDataCache("perms");
            //if (tokenCookie == null || userCookie == null || perms == null) {
            //    var service = clientAgentService().getCoreServiceData("Login");
            //    $q.when($http.get(clientAgentService().baseUrl + service.URL)).then(function (token) {
            //        if (token != null && token.data != null && token.data != "") {
            //            clientAgentService().addCookiewithExpiry("token", token.data.Value, token.data.Expiry);
            //            clientAgentService().addCookiewithExpiry("user", token.data.User, token.data.Expiry);
            //            if (perms != null) {
            //                clientAgentService().clearDataCache("perms");
            //            }
            //            clientAgentService().addDataCache("perms", token.data.Perms);
            //            $rootScope.user = token.data.User;
            //            $state.go("app.dashboard");
            //        }
            //        else {
            //            window.location.href = "app/shared/unauthorization/unauthorization.html";
            //        }
            //    });
            //}
            //else {
            //    $rootScope.user = userCookie;
            //}
            debugger;
            return true;
        },
        AuthorizeUser: function (event, toState) {
            debugger;            
            $rootScope.CanView = true;
            $rootScope.CanAdd = true;
            $rootScope.CanEdit = true;
            $rootScope.CanDelete = true;
            var authorized = true;// false;
            //var tokenCookie = clientAgentService().getCookie("token");
            //var userCookie = clientAgentService().getCookie("user");
            //var perms = clientAgentService().getDataCache("perms");
            //if (tokenCookie == null || userCookie == null || perms == null) {
            //    return $q.when(this.Login()).then(function () {
            //    });
            //}
            //if (toState != null && perms != null && perms.length > 0) {
            //    var controller = toState.controller;
            //    if (controller != null) {
            //        for (var perm in perms) {
            //            if (perms.hasOwnProperty(perm)) {
            //                var prm = perms[perm];
            //                if (prm.Name == controller) {
            //                    var actions = prm.Action;
            //                    $rootScope.CanView = actions.indexOf("View") != -1;
            //                    $rootScope.CanAdd = actions.indexOf("Add") != -1;
            //                    $rootScope.CanEdit = actions.indexOf("Edit") != -1;
            //                    $rootScope.CanDelete = actions.indexOf("Delete") != -1;
            //                    authorized = $rootScope.CanView;
            //                    break;
            //                }
            //            }
            //        }
            //    }
            //}
            if (authorized || (toState != null && toState.url == "/dashboard") || (toState != null && toState.url == "/error") ||
                (toState != null && toState.url == "/error/:unauthorized")) {
                return true;
            }
            if (event != null && !authorized) {
                // $log.error("You are unauthorized ! Access is denied due to invalid credentials/permissions");
                // event.preventDefault();
                // event.currentScope.$state.go("app.error", { unauthorized: "unauthorized"  });
                return true;
            }
        }
    }
});