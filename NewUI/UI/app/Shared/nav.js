app.controller('nav', ['$scope', '$translate', function ($scope, $translate) {
    debugger;
    //ShowData = function ()
    //{
    //    return $http.get('http://localhost:16161/api/Async/menuElements');
    //}

    ////$http.get('http://localhost:16161/api/Async/menuElements').then(function (result) {
    ////    $scope.navData = result;
    ////});  

    //$q.all([ShowData()]).then(function (result) {
    //    $scope.navData = result[0].data;
    //});

    $scope.navData = [{
        name: $translate.instant('MP.aHome'),
        url: "app.dashboard",
        icon: "fa fa-home  bg-light",
        sub: []
    },


                    {
                        name: $translate.instant('MP.PersonnelManagement'),
                        url: "app.PersonnelManagement",
                        icon: "fa fa-users bg-success text-white",
                        sub: [


                            {
                                name: $translate.instant('MP.Hiring'),
                                url: "app.PersonnelManagement.Hiring",
                                icon: "fa fa-home text-white bg-danger",
                                sub: [


                                        {
                                            name: $translate.instant('MP.EmployeeProfile'),
                                            url: "app.PersonnelManagement.Hiring.EmployeeProfile",
                                            icon: "fa fa-home text-white bg-danger",
                                            sub: []
                                        },

                                ]
                            },




                            {
                                name: $translate.instant('MP.Termination'),
                                url: "app.PersonnelManagement.Termination",
                                icon: "fa fa-home text-white bg-danger",
                                sub: [

                            {
                                name: $translate.instant('MP.EmployeeTermination'),
                                url: "app.PersonnelManagement.Hiring.QuickEmployeeTermination",
                                icon: "fa fa-home text-white bg-danger",
                                sub: []
                            },

                                {
                                    name: $translate.instant("MP.TerminatedEmployeeManagement"),
                                    url: "app.PersonnelManagement.Hiring.RehireEmployee",
                                    icon: "glyphicon-file",
                                    sub: []
                                }

                                ]
                            },
                        ]
                    },

                    {
                        name: $translate.instant('MP.Attendance'),
                        url: "app.Attendance",
                        icon: "fa fa-book text-white bg-warning",
                        sub: [


                            {
                                name: $translate.instant('MP.AttendanceAdministration'),
                                url: "app.Attendance.AttendanceAdministration",
                                icon: "fa fa-home text-white bg-danger",
                                sub: [


                                    {
                                        name: $translate.instant('MP.AttendanceProcessingCyclePeriods'),
                                        url: "app.Attendance.AttendanceAdministration.closingMonth",
                                        icon: "fa fa-home text-white bg-danger",
                                        sub: []
                                    }, {
                                        name: $translate.instant('MP.PolicySetup'),
                                        url: "app.Attendance.AttendanceAdministration.TimeAndAttendancePolicy",
                                        icon: "fa fa-home text-white bg-danger",
                                        sub: []
                                    }, {
                                        name: $translate.instant('MP.PolicyAssignment'),
                                        url: "app.Attendance.AttendanceAdministration.PolicyList",
                                        icon: "fa fa-home text-white bg-danger",
                                        sub: []
                                    },

                                ]
                            },



                            {
                                name: $translate.instant('MP.AttendanceManagement'),
                                url: "app.Attendance.AttendanceManagement",
                                icon: "fa fa-home text-white bg-danger",
                                sub: [



                                    {
                                        name: $translate.instant('MP.EmployeeSelfAttendance'),
                                        url: "app.Attendance.AttendanceManagement.EmployeeSign",
                                        icon: "fa fa-home text-white bg-danger",
                                        sub: []
                                    },




                                     {
                                         name: $translate.instant('MP.ManualEmployeesAttendance'),
                                         url: "app.Attendance.AttendanceManagement.manualAttendance",
                                         icon: "fa fa-home text-white bg-danger",
                                         sub: []
                                     },

                                    // {
                                    //     name: "Time Keeper Attendance",
                                    //     url: "app.dashboardFake",
                                    //     icon: "fa fa-home text-white bg-danger",
                                    //     sub: []
                                    // },

                                ]
                            }, {
                                name: $translate.instant('MP.AttendanceProcessing'),
                                url: "app.Attendance.AttendanceProcessing",
                                icon: "fa fa-home text-white bg-danger",
                                sub: [

                                    {
                                        name: $translate.instant('MP.TimeEvaluation'),
                                        url: "app.Attendance.AttendanceProcessing.conflictDetection",
                                        icon: "fa fa-home text-white bg-danger",
                                        sub: []
                                    },

                                    {
                                        name: $translate.instant('MP.ProcessAttendance'),
                                        url: "app.Attendance.AttendanceProcessing.processAttendance",
                                        icon: "fa fa-home text-white bg-danger",
                                        sub: []
                                    },

                                ]
                            }, {
                                name: $translate.instant('MP.SchedulingManagement'),
                                url: "app.Attendance.SchedulingManagement",
                                icon: "fa fa-home text-white bg-danger",
                                sub: [

                                    {
                                        name: $translate.instant('MP.WorkingSchedulepermissions'),
                                        url: "app.Attendance.SchedulingManagement.ForwardEdit",
                                        icon: "fa fa-home text-white bg-danger",
                                        sub: []
                                    }, {
                                        name: $translate.instant('MP.EmployeesSchedule'),
                                        url: "app.Attendance.SchedulingManagement.shiftAssignment",
                                        icon: "fa fa-home text-white bg-danger",
                                        sub: []
                                    },

                                ]
                            },

                        ]
                    },


            {
                name: $translate.instant('MP.Leaves'),
                url: "app.Leaves",
                icon: "fa fa-automobile text-white bg-info",
                sub: [


                {
                    name: $translate.instant('MP.LeavesSetup'),
                    url: "app.Leaves.LeavesSetup",
                    icon: "fa fa-home text-white bg-danger",
                    sub: [{
                        name: $translate.instant('MP.HolidaysSetup'),
                        url: "app.Leaves.LeavesSetup.HolidaysSetup",
                        icon: "fa fa-home text-white bg-danger",
                        sub: []
                    }, ]
                }, {
                    name: $translate.instant('MP.LeavesManagement'),
                    url: "app.Leavesmanagement",
                    icon: "fa fa-home text-white bg-danger",
                    sub: [{
                        name: $translate.instant('MP.LeaveRequest'),
                        url: "app.Leaves.Leavesmanagement.leaveRequestList",
                        icon: "fa fa-home text-white bg-danger",
                        sub: []
                    }, {
                        name: $translate.instant('MP.ManualLeaveBalance'),
                        url: "app.Leaves.Leavesmanagement.leaveBalance",
                        icon: "fa fa-home text-white bg-danger",
                        sub: []
                    },

                         {
                             name: $translate.instant('MP.LeavePosting'),
                             url: "app.Leaves.Leavesmanagement.leavePosting",
                             icon: "fa fa-home text-white bg-danger",
                             sub: []
                         },

                    ]
                },

                ]
            },




            {
                name: $translate.instant('MP.Overtime'),
                url: "app.Overtime",
                icon: "fa fa-clock-o text-white bg-primary",
                sub: [

                    {
                        name: $translate.instant('MP.Overtime'),
                        url: "app.Overtime.Overtimesetup",
                        icon: "fa fa-home text-white bg-danger",
                        sub: [

                    {
                        name: $translate.instant('MP.OvertimeRateSetup'),
                        url: "app.Overtime.Overtimesetup.overTimeList",
                        icon: "fa fa-home text-white bg-danger",
                        sub: []
                    },
                     {
                         name: $translate.instant('MP.ForcedOvertime'),
                         url: "app.Overtime.Overtimesetup.ForcedOvertime",
                         icon: "fa fa-home text-white bg-danger",
                         sub: []
                     },

                            //{
                            //    name: $translate.instant('MP.OvertimeApproval'),
                            //    url: "app.Overtime.Overtimesetup.overTimeListApproval",
                            //    icon: "fa fa-home text-white bg-danger",
                            //    sub: []
                            //},






                        ]
                    },
                ]
            },


 {
     name: $translate.instant('MP.Penalties'),
     url: "app.Penalties",
     icon: "fa  fa-legal bg-success text-white",
     sub: [

         {
             name: $translate.instant('MP.PenaltiesManagement'),
             url: "app.Penalties.PenaltiesManagement",
             icon: "fa fa-home text-white bg-danger",
             sub: [

                 {
                     name: $translate.instant('MP.PenaltyRequest'),
                     url: "app.Penalties.PenaltiesManagement.PenaltyList",
                     icon: "fa fa-home text-white bg-danger",
                     sub: []
                 },
                 {
                     name: $translate.instant('MP.EmployeePenaltyApproval'),
                     url: "app.Penalties.PenaltiesManagement.EmployeePenaltyApproval",
                     icon: "fa fa-home text-white bg-danger",
                     sub: []
                 },

                  {
                      name: $translate.instant('MP.HoursDeductionRequest'),
                      url: "app.Penalties.PenaltiesManagement.DeductionList",
                      icon: "fa fa-home text-white bg-danger",
                      sub: []
                  },

             ]
         }

     ]
 },

                   



      {
          name: $translate.instant('MP.payroll'),
          url: "app.payroll",
          icon: "fa fa-money text-white  bg-warning ",
          sub: [


              {
                  name: $translate.instant('MP.payrollsetup'),
                  url: "app.payroll.payrollsetup",
                  icon: "fa fa-home text-white bg-danger",
                  sub: [{
                      name: $translate.instant('MP.UnHoldEmployeeSalary'),
                      url: "app.payroll.payrollsetup.UnHoldEmployeeSalary",
                      icon: "fa fa-home text-white bg-danger",
                      sub: []
                  },

                  {
                      name: $translate.instant('MP.payrolldataentry'),
                      url: "app.payroll.payrollsetup.payrolldataentry",
                      icon: "fa fa-home text-white bg-danger",
                      sub: []
                  },

                  ]
              },




        

          ]
      },

        {
            name: $translate.instant('MP.Administration'),
            url: "app.Administration",
            icon: "fa fa-gear text-white  bg-danger ",
            sub: [


                {
                    name: $translate.instant('MP.accessManagement'),
                    url: "app.Administration.accessManagement",
                    icon: "fa fa-home text-white bg-danger",
                    sub: [{
                        name: $translate.instant('MP.UsersList'),
                        url: "app.Administration.accessManagement.UsersList",
                        icon: "fa fa-home text-white bg-danger",
                        sub: []
                    },

                   

                    ]
                },






            ]
        },












            {
                name: $translate.instant('MP.HRReports'),
                url: "app.HRReports",
                icon: "fa fa-table text-white bg-dark lter",
                sub: [


                           {
                               name: $translate.instant('MP.Schedule'),
                               url: "app.HRReports.Schedule",
                               icon: "fa fa-home text-white bg-danger",
                               sub: [{
                                   name: $translate.instant('MP.EmployeesScheduleReport'),
                                   url: "app.HRReports.Schedule.EmployeesScheduleReport",
                                   icon: "fa fa-home text-white bg-danger",
                                   sub: []
                               },
                              

                               ]
                           },


                    {
                        name: $translate.instant('MP.Personnel'),
                        url: "app.HRReports.Personnel",
                        icon: "fa fa-home text-white bg-danger",
                        sub: [
                        {
                            name: $translate.instant('MP.ExpiredEmployeeContracts'),
                            url: "app.HRReports.Personnel.ContractExpiresReport",
                            icon: "fa fa-home text-white bg-danger",
                            sub: []
                        },

                        {
                            name: $translate.instant('MP.ExportEmployeeData'),
                            url: "app.HRReports.Personnel.ExportEmployeeData",
                            icon: "fa fa-home text-white bg-danger",
                            sub: []
                        },

                        ]
                    },

                       {
                           name: $translate.instant('MP.Leaves'),
                           url: "app.HRReports.Leaves",
                           icon: "fa fa-home text-white bg-danger",
                           sub: [
                               {
                                   name: $translate.instant('MP.LeaveBalanceReport'),
                                   url: "app.HRReports.Attendance.LeaveBalanceReport",
                                   icon: "fa fa-home text-white bg-danger",
                                   sub: []
                               },
                           {
                               name: $translate.instant('MP.LeaveTransactionReport'),
                               url: "app.HRReports.Leaves.LeaveTransactionReport",
                               icon: "fa fa-home text-white bg-danger",
                               sub: []
                           },

                           ]
                       },


                    {
                        name: $translate.instant('MP.Attendance'),
                        url: "app.HRReports.Attendance",
                        icon: "fa fa-home text-white bg-danger",
                        sub: [
                            {
                                name: $translate.instant('MP.processAttendanceReport'),
                                url: "app.HRReports.Attendance.processAttendanceReport",
                                icon: "fa fa-home text-white bg-danger",
                                sub: []
                            },
                            {
                            name: $translate.instant('MP.EmployeesAttendance'),
                            url: "app.HRReports.Attendance.AttendanceReport",
                            icon: "fa fa-home text-white bg-danger",
                            sub: []
                        },

                            {
                                name: $translate.instant('MP.AttendanceReport2'),
                                url: "app.HRReports.Attendance.SubordinatesAttendanceReport",
                                icon: "fa fa-home text-white bg-danger",
                                sub: []
                            },

                            


                             {
                                 name: $translate.instant('MP.EmployeeswithmissingsignOut'),
                                 url: "app.HRReports.Attendance.InWithoutOutReport",
                                 icon: "fa fa-home text-white bg-danger",
                                 sub: []
                             },

                            {
                                name: $translate.instant('MP.NightShiftEmployees'),
                                url: "app.HRReports.Attendance.NightShift",
                                icon: "fa fa-home text-white bg-danger",
                                sub: []
                            },

                            
                        ]
                    },

                ]
            }



    ];
}]);
