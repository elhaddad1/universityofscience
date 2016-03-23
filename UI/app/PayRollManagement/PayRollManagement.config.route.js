var payRollManagementRoute = (function () {
    "use strict";
    var vm = {
        payRollManagementRoutes: payRollManagementRoutes
    };

    return vm;

    // This function return PayRoll Management module routes
    function payRollManagementRoutes() {
        return [



                                 {
                                     name: 'app.payroll',
                                     config: {
                                         url: '/payroll',
                                         template: '<div ui-view class="fade-in"></div>',
                                         data: {
                                             displayName: '{{"MP.payroll"|translate}}'
                                         },
                                         resolve: {
                                             deps: ['uiLoad', '$translatePartialLoader', '$translate', function (uiLoad, $translatePartialLoader, $translate) {
                                                 $translatePartialLoader.addPart('PayRollManagement');
                                             
                                             }]
                                         }
                                     }
                                 },

                                  {
                                      name: 'app.payroll.payrollsetup',
                                      config: {
                                          url: '/payrollsetup',
                                          template: '<div ui-view class="fade-in"></div>',
                                          data: {
                                              displayName: '{{"MP.payrollsetup"|translate}}'
                                          },
                                          resolve: {
                                              deps: ['uiLoad', '$translatePartialLoader', '$translate', function (uiLoad, $translatePartialLoader, $translate) {
                                                  $translatePartialLoader.addPart('PayRollManagement');
                                                 
                                              }]
                                          }
                                      }
                                  },
                



         {
             name: 'app.payroll.payrollsetup.UnHoldEmployeeSalary',
             config: {
                 url: '/UnHoldEmployeeSalary',
                 templateUrl: 'app/PayRollManagement/payrollsetup/UnHoldEmployeeSalary/UnHoldEmployeeSalary.html',
                 data: {
                     displayName: '{{"MP.UnHoldEmployeeSalary"|translate}}'
                 },
                 controller: 'UnHoldEmployeeSalary',
                 resolve: {
                     deps: ['uiLoad', '$translatePartialLoader', '$translate', function (uiLoad, $translatePartialLoader, $translate) {
                         $translatePartialLoader.addPart('PayRollManagement');
                         uiLoad.load(['app/Services/CommonService.js']);
                         uiLoad.load(['app/Services/EmployeeSalaryHoldService.js']);
                         // $translate.refresh();
                         return uiLoad.load(['app/PayRollManagement/payrollsetup/UnHoldEmployeeSalary/UnHoldEmployeeSalary.js']);
                     
                     }]
                 }
             }
         },



         {
             name: 'app.payroll.payrollsetup.UnHoldEmployeeSalaryaddnew',
             config: {
                 url: '/UnHoldEmployeeSalaryaddnew',
                 templateUrl: 'app/PayRollManagement/payrollsetup/UnHoldEmployeeSalary/UnHoldEmployeeSalaryaddnew.html',
                 data: {
                     displayName: '{{"MP.UnHoldEmployeeSalary"|translate}}'
                 },
                 controller: 'UnHoldEmployeeSalaryaddnew',
                 resolve: {
                     deps: ['uiLoad', '$translatePartialLoader', '$translate', function (uiLoad, $translatePartialLoader, $translate) {
                         $translatePartialLoader.addPart('PayRollManagement');
                         // $translate.refresh();
                         uiLoad.load(['app/Services/EmployeeSalaryHoldService.js']);
                         uiLoad.load(['app/Services/OrganizationUnitService.js']);
                         return uiLoad.load(['app/PayRollManagement/payrollsetup/UnHoldEmployeeSalary/UnHoldEmployeeSalaryaddnew.js']);

                     }]
                 }
             }
         },

           {
               name: 'app.payroll.payrollsetup.payrolldataentry',
               config: {
                   url: '/payrolldataentry',
                   templateUrl: 'app/PayRollManagement/payrollsetup/payrolldataentry/payrolldataentry.html',
                   data: {
                       displayName: '{{"MP.payrolldataentry"|translate}}'
                   },
                   controller: 'payrolldataentry',
                   resolve: {
                       deps: ['uiLoad', '$translatePartialLoader', '$translate', function (uiLoad, $translatePartialLoader, $translate) {
                           $translatePartialLoader.addPart('PayRollManagement');
              
                           uiLoad.load(['app/Services/PayrollItemService.js']);
                           uiLoad.load(['app/Services/MonthPayrollService.js']);
                           uiLoad.load(['app/Services/CommonService.js']);
                           uiLoad.load(['app/Services/ClosingMonthPayrollService.js']);
                           uiLoad.load(['app/Services/OrganizationUnitService.js']);
                           uiLoad.load(['app/Services/PayrollItemDataEntryService.js']);
                           //
                           return uiLoad.load(['app/PayRollManagement/payrollsetup/payrolldataentry/payrolldataentry.js']);

                       }]
                   }
               }
           },
                



          
        ];
    };
});