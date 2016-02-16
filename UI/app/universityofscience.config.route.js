var unsRoute = (function () {
    "use strict";
    var vm = {
        unsRoutes: unsRoutes
    };

    return vm;

    // This function return time Management module routes
    function unsRoutes() {
        return [





              {
                  name: 'app.Attendance',
                  config: {
                      url: '/Attendance',
                      template: '<div ui-view class="fade-in"></div>',
                      data: {
                          displayName: '{{"MP.Attendance"|translate}}'
                      },
                      resolve: {
                          deps: ['uiLoad', '$translatePartialLoader', '$translate', function (uiLoad, $translatePartialLoader, $translate) {
                              $translatePartialLoader.addPart('TimeManagement');
                              // $translate.refresh();
                              uiLoad.load(['app/Services/employeeService.js']);
                          }]
                      }
                  }
              }


                ,

    {
        name: 'app.Attendance.AttendanceAdministration.PolicyList',
        config: {
            url: '/PolicyAssignment',
            templateUrl: 'app/TimeManagement/policyAssigment/policyList.html',
            data: {
                displayName: '{{"MP.TimeAndAttendancepolicyassignment"|translate}}'
            },
            controller: 'policyListCtrl',
            resolve: {
                deps: ['uiLoad', '$translatePartialLoader', '$translate', function (uiLoad, $translatePartialLoader, $translate) {
                    $translatePartialLoader.addPart('TimeManagement');
                    // uiLoad.load(['app/Services/conflictDetectionService.js']);
                    // uiLoad.load(['app/Services/AttendanceService.js']);  
                    uiLoad.load(['app/Services/PositionService.js']);
                    uiLoad.load(['app/Services/PolicyService.js']);
                    uiLoad.load(['app/Services/PolicyAssignmentService.js']);
                    uiLoad.load(['app/Services/manAttAdjServ.js']);
                    uiLoad.load(['app/Services/CommonService.js']);
                    uiLoad.load(['app/TimeManagement/policyAssigment/updatePolicyModal.js']);
                    uiLoad.load(['app/Services/conflictDetectionService.js']);
                    uiLoad.load(['app/Services/OrganizationUnitService.js']);
                    return uiLoad.load(['app/TimeManagement/policyAssigment/policyList.js']);
                }]
            }
        }
    },

        ];
    };
});
