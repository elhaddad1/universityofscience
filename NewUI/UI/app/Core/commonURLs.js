var commonURLs = (function () {
    "use strict";

    // for service config
    var baseUrl = "";
    var SecurityServiceUrl = "/Security.Service/api/";
    var TMServiceUrl = "/TM.Service/api/";
    var TMSEngineServiceUrl = "/TM.Engine.Service/api/";
    var OMServiceUrl = "/OM.Service/api/";
    var CommonServiceUrl = "/Common.Service/api/";
    var PayrollServiceUrl = "/PR.Service/api/";
    // array for time management services url
    var timeManagementServicesList = timeManagementServiceURLs();
    // array for core services url
    var coreServicesList = coreServiceURLs();
    // array for employee management services url
    var organizationManagementServicesList = organizationManagementServiceURLs();

    var commonManagementServicesList = commonManagementServiceURLs();
    // array for payroll services url
    var payRollServicesList = payRollManagementServiceURLs();
    var vm = {
        baseUrl: baseUrl,
        SecurityServiceUrl: SecurityServiceUrl,
        TMServiceUrl: TMServiceUrl,
        timeManagementServicesList: timeManagementServicesList,
        coreServicesList: coreServicesList,
        organizationManagementServicesList: organizationManagementServicesList,
        payRollServicesList: payRollServicesList,
        commonManagementServicesList: commonManagementServicesList
    };

    return vm;
    // This function return services data for time management module
    function timeManagementServiceURLs() {
        return [
            {
                name: 'ClockDetectionLoadData',
                data: {
                    Method: 'GET',
                    URL: TMServiceUrl + 'ClockInOutConflictDetection/Init',

                }
            },
            {
                name: 'ProccessAttendanceLoadData',
                data: {
                    Method: 'GET',
                    URL: TMSEngineServiceUrl + 'ProccessAttendance/Init',

                }
            },
             {
                 name: 'GenerateEngineResults',
                 data: {
                     Method: 'GET',
                     URL: TMSEngineServiceUrl + 'EmployeeAttendance/GenerateEngineResults',

                 }
             },
            
                    {
                        name: 'ExportToExcelToGetLeaveInfo',
                        data: {
                            Method: 'POST',
                            URL: TMServiceUrl + 'LeaveRequest/ExportToExcelToGetLeaveInfo',
                        }
                    },
                       {
                           name: 'ExportToExcelToGetLeaveData',
                           data: {
                               Method: 'POST',
                               URL: TMServiceUrl + 'LeaveRequest/ExportToExcelToGetLeaveData',
                           }
                       },
                    
                     {
                         name: 'ExportToExcelToEmployeePenaltyReview',
                         data: {
                             Method: 'POST',
                             URL: TMServiceUrl + 'PenaltyApproval/ExportToExcelToEmployeePenaltyReview',
                         }
                     },
                     {
                         name: 'GetPendingPenaltyApprovals',
                         data: {
                             Method: 'GET',
                             URL: TMServiceUrl + 'PenaltyApproval/GetPendingPenaltyApprovals',
                         }
                     },
                     {
                         name: 'GetApprovedPenaltyApprovals',
                         data: {
                             Method: 'GET',
                             URL: TMServiceUrl + 'PenaltyApproval/GetApprovedPenaltyApprovals',
                         }
                     },
                     {
                         name: 'ApproveRejectEmployeePenalty',
                         data: {
                             Method: 'POST',
                             URL: TMServiceUrl + 'PenaltyApproval/ApproveRejectEmployeePenalty',
                         }
                     },
                      {
                          name: 'GetAttendEmployeesInHoliday',
                          data: {
                              Method: 'GET',
                              URL: TMServiceUrl + 'LeaveRequest/GetAttendEmployeesInHoliday',
                          }
                      },

                            {
                                name: 'ExportToExcelEmployeesOverTimeReportForSpecificMonth',
                                data: {
                                    Method: 'POST',
                                    URL: TMServiceUrl + 'OverTimeApproval/ExportToExcelEmployeesOverTimeReportForSpecificMonth',
                                }
                            },
  
                        {
                            name: 'GetOverTimeMonthData',
                            data: {
                                Method: 'GET',
                                URL: TMServiceUrl + 'OverTimeApproval/GetOverTimeMonthData',
                            }
                        },
                                            
                       {
                           name: 'AddManualBalanceToEmployees',
                           data: {
                               Method: 'POST',
                               URL: TMServiceUrl + 'LeaveEmployeeBalance/AddManualBalanceToEmployees',
                           }
                       },
                      
                     {
                         name: 'UpdatePenaltyApprovals',
                         data: {
                             Method: 'POST',
                             URL: TMServiceUrl + 'PenaltyApproval/UpdatePenaltyApprovals',
                         }
                     },
                      
        {
            name: 'CheckLeaveInClosedDepartmentOrNot',
            data: {
            Method: 'GET',
            URL: TMServiceUrl + 'LeaveRequest/CheckLeaveInClosedDepartmentOrNot',
            }
    },
        {
            name: 'GetForcedOverTimesOnly',
            data: {
                Method: 'GET',
                URL: TMServiceUrl + 'OverTimeApproval/GetForcedOverTimesOnly',
            }
        },
                {
                    name: 'DeleteOverTime',
                    data: {
                        Method: 'GET',
                        URL: TMServiceUrl + 'OverTimeApproval/Delete',
                    }
                },
                      
        {
            name: 'TotalUnApprovedOverTimeHours',
            data: {
            Method: 'GET',
            URL: TMServiceUrl + 'OverTimeApproval/TotalUnApprovedOverTimeHours',
            }
        },
        
        {
            name: 'GetCurrentAndLastYear',
            data: {
            Method: 'GET',
            URL: TMServiceUrl + 'LeaveRequest/GetCurrentAndLastYear',
            }
    },
        {
            name: 'ApproveAndRejectEmployeesHours',
            data: {
            Method: 'POST',
            URL: TMServiceUrl + 'OverTimeApproval/ApproveAndRejectEmployeesHours',
            }
    },
        {
            name: 'ExportToExcelOverTimeReport',
            data: {
            Method: 'POST',
            URL: TMServiceUrl + 'OverTimeApproval/ExportToExcelOverTimeReport',
            }
    },
                      {
                          name: 'GetPenaltyList',
                          data: {
                              Method: 'POST',
                              URL: TMServiceUrl + 'PenaltyApproval/GetPenaltyList',
                          }
                      },
                     
                   {
                       name: 'InitSubOrdinAttendance',
                       data: {
                           Method: 'GET',
                           URL: TMServiceUrl + 'ClockInOutConflictDetection/InitSub',

                       }
                   },
        {
            name: 'GetDeptPosEmpData',
            data: {
            Method: 'GET',
            URL: TMServiceUrl + 'ClockInOutConflictDetection/GetDeptPosEmpData',

            }
        },
         
        {
            name: 'GetAllPositions',
            data: {
            Method: 'GET',
            URL: TMServiceUrl + 'ClockInOutConflictDetection/GetAllPositions',

            }
    },
    {
        name: 'AddNewShift',
        data: {
            Method: 'POST',
            URL: TMServiceUrl + 'ShiftSetup/AddNewShift',

        }
    },
    {
        name: 'UpdateShift',
        data: {
            Method: 'POST',
            URL: TMServiceUrl + 'ShiftSetup/UpdateShift',

        }
    },
    {
        name: 'GetSpecificShiftDetails',
        data: {
            Method: 'GET',
            URL: TMServiceUrl + 'ShiftSetup/GetSpecificShiftDetails',

        }
    },
    {
        name: 'GetShifts',
        data: {
            Method: 'GET',
            URL: TMServiceUrl + 'ShiftSetup/GetAllShifts',

        }
    },
      {
          name: 'GetRejectedPenaltyApprovals',
          data: {
              Method: 'POST',
              URL: TMServiceUrl + 'PenaltyApproval/GetRejectedPenaltyApprovals',

          }
      },

    {
        name: 'InitManAttData',
        data: {
            Method: 'GET',
            URL: TMServiceUrl + 'ManualAttendance/InitManAtt',

        }
    }, 
        {
            name: 'GetShiftMaxTime',
            data: {
            Method: 'GET',
            URL: TMServiceUrl + 'ManualAttendance/GetShiftMaxTime',

            }
        },
         {
             name: 'DeleteBulkAttendance',
             data: {
                 Method: 'GET',
                 URL: TMServiceUrl + 'ManualAttendance/DeleteBulkAttendance'
             }
         },

     {
         name: 'ImportFromExcell',
         data: {
             Method: 'POST',
             URL: TMServiceUrl + 'ManualAttendance/ImportFromExcell',

         }
     },

       
        {
            name: 'GetCurrentUser',
            data: {
            Method: 'GET',
            URL: TMServiceUrl + 'ManualAttendance/GetCurrentUser',

            }
        },
         
        {
            name: 'EmployeeSignIn',
            data: {
            Method: 'POST',
            URL: TMServiceUrl + 'ManualAttendance/EmployeeSignIn',
            }
        },
        
        {
            name: 'EmployeeSignOut',
            data: {
            Method: 'POST',
            URL: TMServiceUrl + 'ManualAttendance/EmployeeSignOut',
            }
        },
         
        {
            name: 'UpdateStartDateFullTimeForNextYear',
            data: {
            Method: 'POST',
            URL: TMServiceUrl + 'ClosingMonth/UpdateStartDateFullTimeForNextYear',
            }
        },
           {
               name: 'UpdateStartDatePartTimeForNextYear',
               data: {
                   Method: 'POST',
                   URL: TMServiceUrl + 'ClosingMonth/UpdateStartDatePartTimeForNextYear',
               }
           },
             
        {
            name: 'getFullTimeMonths',
            data: {
            Method: 'GET',
            URL: TMServiceUrl + 'ClosingMonth/getFullTimeMonths',
            }
        },
         
        {
            name: 'getPartTimeMonths',
            data: {
            Method: 'GET',
            URL: TMServiceUrl + 'ClosingMonth/getPartTimeMonths',
            }
        },
         {
             name: 'GetColsingMonthData',
             data: {
                 Method: 'GET',
                 URL: TMServiceUrl + 'ClosingMonth/GetColsingMonthData',
             }
         },
           {
               name: 'GetOpenedMonths',
               data: {
                   Method: 'GET',
                   URL: TMServiceUrl + 'ClosingMonth/GetOpenedMonths',
               }
           },
           {
               name: 'GetLastClosedMonthAndOpenedMonths',
               data: {
                   Method: 'GET',
                   URL: TMServiceUrl + 'ClosingMonth/GetLastClosedMonthAndOpenedMonths',
               }
           },
        {
            name: 'GetEmployeesAttendanceHaveInWithOutOut',
            data: {
            Method: 'GET',
            URL: TMServiceUrl + 'AttendenceReport/GetEmployeesAttendanceHaveInWithOutOut',
            }
    },
         
        {
            name: 'ProcessAttendneceInit',
            data: {
            Method: 'GET',
            URL: TMSEngineServiceUrl + 'EmployeeAttendance/ProcessAttendneceInit',
            }
    },
  
        {
            name: 'RunAttendanceEngine',
            data: {
            Method: 'GET',
            URL: TMSEngineServiceUrl + 'EmployeeAttendance/RunAttendanceEngine',
            }
        },
         
        {
            name: 'GetNotFinalDepartments',
            data: {
            Method: 'GET',
            URL: TMSEngineServiceUrl + 'EmployeeAttendance/GetNotFinalDepartments',
            }
        },
         {
             name: 'GetFinalMonth',
             data: {
                 Method: 'GET',
                 URL: TMSEngineServiceUrl + 'EmployeeAttendance/GetFinalMonth',
             }
         },




         {
             name: 'GetFinalMonthPartTime',
             data: {
                 Method: 'GET',
                 URL: TMSEngineServiceUrl + 'EmployeeAttendance/GetFinalMonthPartTime',
             }
         },
          {
              name: 'GetDepartments',
              data: {
                  Method: 'GET',
                  URL: TMSEngineServiceUrl + 'EmployeeAttendance/GetDepartments',
              }
          },
           
        {
            name: 'GetDraftMonths',
            data: {
            Method: 'GET',
            URL: TMSEngineServiceUrl + 'EmployeeAttendance/GetDraftMonths',
            }
    },

            {
                name: 'GetDepartment',
                data: {
                    Method: 'GET',
                    URL: TMServiceUrl + 'ManualAttendance/GetDepartmentLookup',

                }
            },
            
            {
                name: 'GetPosition',
                data: {
                    Method: 'GET',
                    URL: TMServiceUrl + 'ManualAttendance/GetPositionLookup',

                }
            },
             {
                 name: 'GetEmployee',
                 data: {
                     Method: 'GET',
                     URL: TMServiceUrl + 'ManualAttendance/GetEmployeeLookup',

                 }
             },
            {
                name: 'GetManualAttendanceRow',
                data: {
                    Method: 'GET',
                    URL: TMServiceUrl + 'ManualAttendance/GetManualAttendanceRow',

                }
            },
            {
                name: 'GetReason',
                data: {
                    Method: 'GET',
                    URL: TMServiceUrl + 'ManualAttendance/GetReasons',

                }
            },
             {
                 name: 'DeleteAttendance',
                 data: {
                     Method: 'Post',
                     URL: TMServiceUrl + 'ManualAttendance/DeleteAttend',

                 }
             },
             {
                 name: 'SaveAttendance',
                 data: {
                     Method: 'Post',
                     URL: TMServiceUrl + 'ManualAttendance/SaveAttendance',

                 }
             },
              {
                  name: 'UpdateAttendance',
                  data: {
                      Method: 'Post',
                      URL: TMServiceUrl + 'ManualAttendance/UpdateAttendance',

                  }
              },
             {
                 name: 'GetManualNotProccessedAttendence',
                 data: {
                     Method: 'Post',
                     URL: TMServiceUrl + 'ManualAttendance/GetManualNotProccessedAttendence',

                 }
             },
             {
                 name: 'GetManualNotProccessedAttendenceCount',
                 data: {
                     Method: 'Post',
                     URL: TMServiceUrl + 'ManualAttendance/GetManualNotProccessedAttendenceCount',

                 }
             },
            {
                name: 'GetShifts',
                data: {
                    Method: 'GET',
                    URL: baseUrl + 'ShiftSetup/GetAllShifts',

                }
            },
            {
                name: "ProcessRecords",
                data: {
                    Method: "POST",
                    URL: TMServiceUrl + "ClockInOutConflictDetection/ProcessRecords"
                }
            },
    {
        name: "ProcessEmployeeAttendence",
        data: {
            Method: "GET",
            URL: TMServiceUrl + "ClockInOutConflictDetection/ProcessEmployeeAttendence"
        }
    },
     {
         name: "ProcessEmployeeAttendenceCount",
         data: {
             Method: "GET",
             URL: TMServiceUrl + "ClockInOutConflictDetection/ProcessEmployeeAttendenceCount"
         }
     },

    {
        name: 'InitTimeKeeperClockInOut',
        data: {
            Method: 'GET',
            URL: TMServiceUrl + 'TimeKeeperClockInOut/Init',

        }
    },
    {
        name: 'SaveTimeKeeperClockInOut',
        data: {
            Method: 'POST',
            URL: TMServiceUrl + 'TimeKeeperClockInOut/Post',

        }
    },
    {
        name: 'EmployeesListTimeKeeperClockInOut',
        data: {
            Method: 'GET',
            URL: TMServiceUrl + 'TimeKeeperClockInOut/GetEmployeesList',

        }
    },
    {
        name: 'AttendanceListTimeKeeperClockInOut',
        data: {
            Method: 'GET',
            URL: TMServiceUrl + 'TimeKeeperClockInOut/GetAttendanceList',

        }
    },
    {
        name: 'PairEmployeeAttendance',
        data: {
            Method: 'GET',
            URL: TMServiceUrl + 'ClockInOutConflictDetection/PairEmployeeAttendance',

        }
    },
    {
        name: 'UpdateShiftStatus',
        data: {
            Method: 'POST',
            URL: TMServiceUrl + 'ShiftSetup/UpdateShiftStatus',

        }
    },
    {
        name: 'GetViewPairAttendance',
        data: {
            Method: 'GET',
            URL: TMServiceUrl + 'ClockInOutConflictDetection/GetViewPairAttendance',

        }
    },
                        {
                            name: 'CommitEmployeeDetails',
                            data: {
                                Method: 'POST',
                                URL: TMServiceUrl + 'ClockInOutConflictDetection/CommitEmpDetails',

                            }
                        },
    {
        name: 'SaveConflictPairingResult',
        data: {
            Method: 'Post',
            URL: TMServiceUrl + 'ClockInOutConflictDetection/SaveConflictPairingResult',

        }
    },
            {
                name: 'ValidateBundle',
                data: {
                    Method: 'GET',
                    URL: TMServiceUrl + 'ClockInOutConflictDetection/ValidateBundle',

                }
            },
    {
        name: 'LoadSchedular',
        data: {
            Method: 'GET',
            URL: TMServiceUrl + 'ShiftAssignment/LoadSchedulerData',

        }
    },
    {
        name: 'CopyShiftAssignment',
        data: {
            Method: 'GET',
            URL: TMServiceUrl + 'ShiftAssignment/CopyShiftAssignment',

        }
    },
    {
           name: 'ExportRoasterReport',
           data: {
               Method: 'GET',
               URL: TMServiceUrl + 'ShiftAssignment/ExportRoasterReport',

           }
    },
    
        {
            name: 'ExportshiftExcelReport',
            data: {
            Method: 'GET',
            URL: TMServiceUrl + 'ShiftAssignment/ExportshiftExcelReport',

            }
    },
       {
           name: 'GetActualSchedulePermssion',
           data: {
               Method: 'GET',
               URL: TMServiceUrl + 'ShiftAssignment/GetActualSchedulePermssion',

           }
       },
    
    {
        name: 'LoadSchedulerForwardPermission',
        data: {
            Method: 'GET',
            URL: TMServiceUrl + 'ForwardEdit/Init',

        }
    },
    {
        name: 'SchedularEmployeeInit',
        data: {
            Method: 'GET',
            URL: TMServiceUrl + 'ShiftAssignment/Init',

        }
    },
    {
        name: 'SaveOvertime',
        data: {
            Method: 'POST',
            URL: TMServiceUrl + 'Overtime/SaveOvertime',

        }
    },
    {
        name: 'GetOvertime',
        data: {
            Method: 'GET',
            URL: TMServiceUrl + 'Overtime/GET',

        }
    },
        {
            name: 'GetShiftsForShiftAssignment',
            data: {
                Method: 'GET',
                URL: TMServiceUrl + 'ShiftAssignment/GetShiftsForShiftAssignment',
            }
        },
     {
         name: 'SaveShiftAssignmentData',
         data: {
             Method: 'Post',
             URL: TMServiceUrl + 'ShiftAssignment/SaveShiftAssignmentData',

         }
     },
       {
           name: 'SaveandOverrideShiftAssignmentData',
           data: {
               Method: 'Post',
               URL: TMServiceUrl + 'ShiftAssignment/SaveandOverrideShiftAssignmentData',

           }
       },

     {
         name: 'DeleteShiftAssignment',
         data: {
             Method: 'GET',
             URL: TMServiceUrl + 'ShiftAssignment/DeleteShiftAssignment',
         }
     },

            {
                name: 'AddNewOvertime',
                data: {
                    Method: 'POST',
                    URL: TMServiceUrl + 'Overtime/AddNewOvertime',

                }
            },
     {
         name: 'AddBackWord',
         data: {
             Method: 'POST',
             URL: TMServiceUrl + 'BackWord/AddBackWord'
         }
     },
          {
              name: 'GetForwardPermissionEmployees',
              data: {
                  Method: 'GET',
                  URL: TMServiceUrl + 'BackWord/GetForwardPermissionEmployees'
              }
          },
          {
              name: 'GetEmployeeByForwarderId',
              data: {
                  Method: 'POST',
                  URL: TMServiceUrl + 'BackWord/GetEmployeeByForwarderId'
              }
          },

           {
               name: 'GetListOfBackwordWithEmpID',
               data: {
                   Method: 'POST',
                   URL: TMServiceUrl + 'BackWord/GetListOfBackwordWithEmpID'
               }
           },

            {
                name: 'GetAllBackWorddata',
                data: {
                    Method: 'GET',
                    URL: TMServiceUrl + 'BackWord/GetAllBackWorddata'
                }
            },
            {
                name: 'GetAllBackWorddataCount',
                data: {
                    Method: 'GET',
                    URL: TMServiceUrl + 'BackWord/GetAllBackWorddataCount'
                }
            },
             {
                 name: 'DeleteBulkBackward',
                 data: {
                     Method: 'GET',
                     URL: TMServiceUrl + 'BackWord/DeleteBulkBackward'
                 }
             },

        {
            name: 'GetAllTimeAndAttendanceData',
            data: {
                Method: 'GET',
                URL: TMServiceUrl + 'TimeAndAttendancePolicy/GetAllTimeAndAttendanceData'
            }
        },

            {
                name: 'GetAllHolidayInfo',
                data: {
                    Method: 'GET',
                    URL: TMServiceUrl + 'HolidayInfo/GetHolidays'
                }
            },
             
        {
            name: 'CheckOnHolidayBeforeDelete',
            data: {
            Method: 'GET',
            URL: TMServiceUrl + 'LeaveEmployeeBalance/CheckOnHolidayBeforeDelete'
            }
        },

         
        {
            name: 'GetCurrentAndPreviousYears',
            data: {
            Method: 'GET',
            URL: TMServiceUrl + 'BalancerEngine/GetCurrentAndPreviousYears'
            }
        },
            {
                name: 'AddLeavePost',
                data: {
                    Method: 'POST',
                    URL: TMServiceUrl + 'BalancerEngine/AddLeavePost'
                }
            },



            {
                name: 'GetHolidayData',
                data: {
                    Method: 'GET',
                    URL: TMServiceUrl + 'HolidayData/GetHolidayData'
                }
            },
             {
                 name: 'GetAllTimeAndPolicyCount',
                 data: {
                     Method: 'GET',
                     URL: TMServiceUrl + 'TimeAndAttendancePolicy/GetAllTimeAndPolicyCount'
                 }
             },

              {
                  name: 'GetAllTimeAssignmentCount',
                  data: {
                      Method: 'GET',
                      URL: TMServiceUrl + 'TimeAttendancePolicyAssignment/GetAllTimeAssignmentCount'
                  }
              },



        {
            name: 'GetAllHolidayData',
            data: {
                Method: 'GET',
                URL: TMServiceUrl + 'HolidayData/GetAllHolidayData'
            }
        },
        {
            name: 'GetAllHolidayDataCount',
            data: {
                Method: 'GET',
                URL: TMServiceUrl + 'HolidayData/GetAllHolidayDataCount'
            }
        },
        {
            name: 'AddNewHolidayData',
            data: {
                Method: 'POST',
                URL: TMServiceUrl + 'HolidayData/Add'
            }
        },
            {
                name: 'DeleteBackWord',
                data: {
                    Method: 'POST',
                    URL: TMServiceUrl + 'BackWord/DeleteBackWord'
                }
            },
             
        {
            name: 'GetClosingMonthAndAddYearIfNotExists',
            data: {
            Method: 'POST',
            URL: TMServiceUrl + 'ClosingMonth/GetClosingMonthAndAddYearIfNotExists'
            }
        }, 
        {
            name: 'UpdateClosingMonth',
            data: {
            Method: 'POST',
            URL: TMServiceUrl + 'ClosingMonth/UpdateClosingMonth'
            }
    },

        {
            name: 'DeleteHolidayData',
            data: {
                Method: 'POST',
                URL: TMServiceUrl + 'HolidayData/Delete'
            }
        },
        {
            name: 'UpdateHolidayData',
            data: {
                Method: 'POST',
                URL: TMServiceUrl + 'HolidayData/Update'
            }
        },
            {
                name: 'SaveSchedulerForwardPermission',
                data: {
                    Method: 'POST',
                    URL: TMServiceUrl + 'ForwardEdit/Post',

                }
            },
    {
        name: 'GetAttendenceReport',
        data: {
            Method: 'GET',
            URL: TMServiceUrl + 'AttendenceReport/GetAttendenceReport'
        }
    },
    {
        name: 'GetMissingEmployeeCount',
        data: {
            Method: 'POST',
            URL: TMServiceUrl + 'AttendenceReport/GetMissingEmployeeCount'
        }
    },
        {
            name: 'ExportToExcel',
            data: {
                Method: 'POST',
                URL: TMServiceUrl + 'AttendenceReport/ExportToExcel'
            }
        },
      {
          name: 'ExportAttendanceReport',
          data: {
              Method: 'POST',
              URL: TMServiceUrl + 'AttendenceReport/ExportAttendanceReport'
          }
      },
       {
           name: 'ExportAttendanceReportWithSync',
           data: {
               Method: 'POST',
               URL: TMServiceUrl + 'AttendenceReport/ExportAttendanceReportWithSync'
           }
       },
      
             {
                 name: 'GetEmployeeForwardData',
                 data: {
                     Method: 'GET',
                     URL: TMServiceUrl + 'ForwardEdit/GetEmployeeForwardData',
                 }
             },
             {
                 name: 'GetEmployeeForwardDataCount',
                 data: {
                     Method: 'GET',
                     URL: TMServiceUrl + 'ForwardEdit/GetEmployeeForwardDataCount',
                 }
             },
             {
                 name: 'DeleteForward',
                 data: {
                     Method: 'POST',
                     URL: TMServiceUrl + 'ForwardEdit/DeleteForward',
                 }
             },
              {
                  name: 'CheckToDeleteForward',
                  data: {
                      Method: 'POST',
                      URL: TMServiceUrl + 'ForwardEdit/CheckToDeleteForward',
                  }
              },
              {
                  name: 'DeleteBulkForward',
                  data: {
                      Method: 'GET',
                      URL: TMServiceUrl + 'ForwardEdit/DeleteBulkForward'
                  }
              },
              {
                  name: 'CheckAndDeleteBulkForward',
                  data: {
                      Method: 'GET',
                      URL: TMServiceUrl + 'ForwardEdit/CheckAndDeleteBulkForward'
                  }
              },

             {
                 name: 'GetLeaveBalanceByEmployee',
                 data: {
                     Method: 'GET',
                     URL: TMServiceUrl + 'LeaveEmployeeBalance/GetByEmployeeId',
                 }
             },
              {
                  name: 'GetAllLeaveRequestList',
                  data: {
                      Method: 'GET',
                      URL: TMServiceUrl + 'LeaveRequest/GetAllLeaveRequestList',
                  }
              },
              {
                  name: 'GetAllLeaveRequestListCount',
                  data: {
                      Method: 'GET',
                      URL: TMServiceUrl + 'LeaveRequest/GetAllLeaveRequestListCount',
                  }
              },
              {
                  name: 'GetLeaves',
                  data: {
                      Method: 'GET',
                      URL: TMServiceUrl + 'Leave/GetLeaves',
                  }
              },
              {
                  name: 'GetHolidays',
                  data: {
                      Method: 'GET',
                      URL: TMServiceUrl + 'HolidayInfo/GetHolidays',
                  }
              },
              {
                  name: 'SaveLeaverequest',
                  data: {
                      Method: 'Post',
                      URL: TMServiceUrl + 'LeaveRequest/SaveLeaverequest',

                  }
              },

               {
                   name: 'GetAlternativeEmployeeLookup',
                   data: {
                       Method: 'GET',
                       URL: TMServiceUrl + 'LeaveRequest/GetAlternativeEmployeeLookup',

                   }
               },
               {
                   name: 'GetEmployeeOffShiftsCount',
                   data: {
                       Method: 'GET',
                       URL: TMServiceUrl + 'LeaveRequest/GetEmployeeOffShiftsCount',

                   }
               },
               {
                   name: 'GetLeaveUnitID',
                   data: {
                       Method: 'GET',
                       URL: TMServiceUrl + 'LeaveRequest/GetLeaveUnitID',

                   }
               },
              {
                  name: 'GetPermisionType',
                  data: {
                      Method: 'GET',
                      URL: TMServiceUrl + 'PermisionType/GetPermisionType',
                  }
              },

              {
                  name: 'GetAllLeave',
                  data: {
                      Method: 'GET',
                      URL: TMServiceUrl + 'Leave/GetManualLeave',
                  }
              },
              {
                  name: 'AddNewLeaveBalance',
                  data: {
                      Method: 'GET',
                      URL: TMServiceUrl + 'LeaveEmployeeBalance/AddBalanceToEmplyees',
                  }
              },

        {
            name: 'DeleteLeaveRequest',
            data: {
                Method: 'POST',
                URL: TMServiceUrl + 'LeaveRequest/DeleteLeaveRequest',
            }
        },
               {
                   name: 'InitTimeAndAttendancePolicyAdd',
                   data: {
                       Method: 'GET',
                       URL: TMServiceUrl + 'TimeAndAttendancePolicy/InitTimeAndAttendancePolicyAdd'
                   }
               }
       , {
           name: 'GetTimeAndAttendancePolicy',
           data: {
               Method: 'GET',
               URL: TMServiceUrl + 'TimeAndAttendancePolicy/GetTimeAndAttendancePolicy'
           }
       }
               , {
                   name: 'SaveTimeAndAttendancePolicy',
                   data: {
                       Method: 'POST',
                       URL: TMServiceUrl + 'TimeAndAttendancePolicy/SaveTimeAndAttendancePolicy'
                   }
               },
                {
                    name: 'GetAllPositions',
                    data: {
                        Method: 'GET',
                        URL: TMServiceUrl + 'TimeAndAttendancePolicyAssignment/GetAllPositions'
                    }
                },
                 {
                     name: 'GetAllTimeAssignmentCount',
                     data: {
                         Method: 'GET',
                         URL: TMServiceUrl + 'TimeAndAttendancePolicyAssignment/GetAllTimeAssignmentCount'
                     }
                 },
                 {
                     name: 'GetTimeAssignmentsRelatedToPolicyAndPositions',
                     data: {
                         Method: 'GET',
                         URL: TMServiceUrl + 'TimeAttendancePolicyAssignment/GetTimeAssignmentsRelatedToPolicyAndPositions'

                     }
                 },
                  {
                      name: 'GetAllAttendenceNightShiftList',
                      data: {
                          Method: 'GET',
                          URL: TMServiceUrl + 'AttendenceNightShift/GetAllAttendenceNightShiftList'

                      }
                  },
                   {
                       name: 'GetAllAttendenceNightShiftListCount',
                       data: {
                           Method: 'GET',
                           URL: TMServiceUrl + 'AttendenceNightShift/GetAllAttendenceNightShiftListCount'

                       }
                   },
               {
                   name: 'GetAllPolicies',
                   data: {
                       Method: 'GET',
                       URL: TMServiceUrl + 'TimeAndAttendancePolicy/GetAllPolicies',
                   }
               },
               {
                   name: enums().TMServicesName.GetAssignedPositionsByPolicyID,
                   data: {
                       Method: 'GET',
                       URL: TMServiceUrl + 'TimeAndAttendancePolicy/GetAssignedPositionsByPolicyID',
                   }
               },
               {
                   name: "GetAllEmployeesNotAssignedToPolicy",
                   data: {
                       Method: 'GET',
                       URL: TMServiceUrl + 'TimeAttendancePolicyAssignment/GetAllEmployeesNotAssignedToPolicy',
                   }
               },
                
        {
            name: "GetEmployeesAssignedToSpecificPolicy",
            data: {
            Method: 'GET',
            URL: TMServiceUrl + 'TimeAttendancePolicyAssignment/GetEmployeesAssignedToSpecificPolicy',
            }
    },
               {
                   name: enums().TMServicesName.SaveNewTimeAndAttendancePolicyAssignment,
                   data: {
                       Method: 'POST',
                       URL: TMServiceUrl + 'TimeAttendancePolicyAssignment/SaveNewTimeAndAttendancePolicyAssignment'
                   }
               },
               {
                   name: enums().TMServicesName.GetAllPoliciesExceptCurrent,
                   data: {
                       Method: 'GET',
                       URL: TMServiceUrl + 'TimeAndAttendancePolicy/GetAllPoliciesExceptCurrent'
                   }
               },
               {
                   name: enums().TMServicesName.UpdateAttendancePolicyAssignment,
                   data: {
                       Method: 'POST',
                       URL: TMServiceUrl + 'TimeAttendancePolicyAssignment/UpdateAttendancePolicyAssignment'
                   }
               },
             {
                 name: 'GetAllOvertimeCount',
                 data: {
                     Method: 'GET',
                     URL: TMServiceUrl + 'Overtime/GetAllOvertimeCount'
                 }
             },
             {
                 name: 'GetAllOvertimeData',
                 data: {
                     Method: 'GET',
                     URL: TMServiceUrl + 'Overtime/GetAllOvertimeData'
                 }
             },
        {
            name: 'GetOvertimeRateById',
            data: {
                Method: 'GET',
                URL: TMServiceUrl + 'Overtime/Get'
            }
               },
               

        {
            name: 'PermanentBackwardGetEmployee',
            data: {
            Method: 'GET',
            URL: TMServiceUrl + 'PermanentBackwardEdit/GetForwardEditEmployess',

               }
        },
               
        {
            name: 'PermanentBackwardGetAll',
            data: {
                Method: 'GET',
                URL: TMServiceUrl + 'PermanentBackwardEdit/GetAllPermanentBackWorddata',

            }
        },
            {
                name: 'PermanentBackwardGetAllCount',
                data: {
                    Method: 'GET',
                    URL: TMServiceUrl + 'PermanentBackwardEdit/GetAllPermanentBackWorddataCount',

                }
            },
             {
                 name: 'PermanentBackwardDelete',
                 data: {
                     Method: 'GET',
                     URL: TMServiceUrl + 'PermanentBackwardEdit/Delete',

                 }
             },
             {
                 name: 'PermanentBackwardAdd',
                 data: {
                     Method: 'GET',
                     URL: TMServiceUrl + 'PermanentBackwardEdit/AddPermenantPermission',

                 }

             },

 {
     name: 'DeleteBulkPermenantBackward',
     data: {
         Method: 'GET',
         URL: TMServiceUrl + 'PermanentBackwardEdit/DeleteBulkPermenantBackward'
     }
 },
             {
                 name: enums().TMServicesName.GetPositionsByPolicyTypeID,
                 data: {
                     Method: 'GET',
                     URL: TMServiceUrl + 'TimeAttendancePolicyAssignment/GetPositionsByPolicyTypeID'
                 }
             }, {
                 name: 'GetInWithouOutReport',
                 data: {
                     Method: 'GET',
                     URL: TMServiceUrl + 'AttendenceReport/GetInWithouOutReport'
                 }
             }, {
                 name: 'GetEmployeesAttendanceInWithoutOut',
                 data: {
                     Method: 'POST',
                     URL: TMServiceUrl + 'AttendenceReport/GetEmployeesAttendanceInWithoutOut'
                 }
             }, 
             {
                 name: 'CheckIfThePolicyHaveEmployees',
                 data: {
                     Method: 'GET',
                     URL: TMServiceUrl + 'TimeAttendancePolicyAssignment/CheckIfThePolicyHaveEmployees'
                 }
             },
               
             {
                 name: 'GetEmployeesAttendance',
                 data: {
                     Method: 'POST',
                     URL: TMServiceUrl + 'AttendenceReport/GetEmployeesAttendance'
                 }
             },
                {
                    name: 'Addnewforced',
                    data: {
                        Method: 'POST',
                        URL: TMServiceUrl + 'OverTimeApproval/Addnewforced'
                    }
             }

        ];
    };


    // This function return services data for core module
    function coreServiceURLs() {
        return [
            {
                name: 'Login',
                data: {
                    Method: 'GET',
                    URL: SecurityServiceUrl + 'security/login',
                }
            },
            {
                name: enums().CoreServicesName.LockUserByEmployeeID,
                data: {
                    Method: 'GET',
                    URL: SecurityServiceUrl + 'Security/LockUserByEmployeeID',
                }
            },
            {
                name: enums().CoreServicesName.AddUser,
                data: {
                    Method: 'POST',
                    URL: SecurityServiceUrl + 'Security/AddUser',
                }
            },
            {
                name: enums().CoreServicesName.CheckEmployeeUserExists,
                data: {
                    Method: 'GET',
                    URL: SecurityServiceUrl + 'Security/CheckEmployeeUserExists',
                }
            },
            {
                name: enums().CoreServicesName.CheckUserNameExists,
                data: {
                    Method: 'GET',
                    URL: SecurityServiceUrl + 'Security/CheckUserNameExists',
                }
            },
            {
                name: enums().CoreServicesName.GetGroupRoleNames,
                data: {
                    Method: 'GET',
                    URL: SecurityServiceUrl + 'Security/GetGroupRoleNames',
                }
            },
              {
                  name: "GetUserRoles",
                  data: {
                      Method: 'GET',
                      URL: SecurityServiceUrl + 'User/GetUserRoles',
                  }
              },
                          {
                              name: "GetUserEmployeeIDs",
                              data: {
                                  Method: 'GET',
                                  URL: SecurityServiceUrl + 'User/GetUserEmployeeIDs',
                              }
                          },
                          {
                              name: "GetGroupRoleNames",
                              data: {
                                  Method: 'GET',
                                  URL: SecurityServiceUrl + 'GroupRole/GetGroupRoleNames',
                              }
                          },
                          {
                              name: "GetAuthenticatedEmail",
                              data: {
                                  Method: 'GET',
                                  URL: SecurityServiceUrl + 'Security/GetAuthenticatedEmail',
                              }
                          },
                          //
                          //


        ];
    };

    // This function return services data for organization management module
    function organizationManagementServiceURLs() {
        return [
             {
                 name: 'GetEmployees',
                 data: {
                     Method: 'GET',
                     URL: OMServiceUrl + 'EmployeeProfile/GetEmployees'
                 }
             },
             {
                 name: 'GetEmployeesWithContractTypes',
                 data: {
                     Method: 'GET',
                     URL: OMServiceUrl + 'EmployeeProfile/GetEmployeesWithContractTypes'
                 }
             },
             {
                 name: enums().OMServicesName.EmployeesCount,
                 data: {
                     Method: 'GET',
                     URL: OMServiceUrl + 'EmployeeProfile/GetEmployeesByCriteriaCount'
                 }
             },
             {
                 name: enums().OMServicesName.Lookups,
                 data: {
                     Method: 'GET',
                     URL: OMServiceUrl + 'Lookup/GetLookups',
                 }
             },
             {
                 name: enums().OMServicesName.CitiesByCountryId,
                 data: {
                     Method: 'GET',
                     URL: OMServiceUrl + 'EmployeeProfile/GetCitiesByCountryId',
                 }
             },
             {
                 name: enums().OMServicesName.RegionsByCityId,
                 data: {
                     Method: 'GET',
                     URL: OMServiceUrl + 'EmployeeProfile/GetRegionsByCityId',
                 }
             },
             {
                 name: enums().OMServicesName.SaveEmployee,
                 data: {
                     Method: 'Post',
                     URL: OMServiceUrl + 'EmployeeProfile/SaveEmployee',
                 }
             },
        {
            name: enums().OMServicesName.UpdateEmployee,
            data: {
                Method: 'Post',
                URL: OMServiceUrl + 'EmployeeProfile/UpdateEmployee',
            }
        },
        {
            name: 'GetEmployeeMapping',
            data: {
                Method: 'GET',
                URL: OMServiceUrl + 'FingerPrintMapping/GetEmployeeMapping'
            }
        },
            {
                name: 'SaveMapping',
                data: {
                    Method: 'GET',
                    URL: OMServiceUrl + 'FingerPrintMapping/SaveMapping'
                }
            },
             {
                 name: 'GetDevices',
                 data: {
                     Method: 'GET',
                     URL: OMServiceUrl + 'FingerPrintMapping/GetDevices'
                 }
             },
             {
                 name: 'DeleteMapping',
                 data: {
                     Method: 'POST',
                     URL: OMServiceUrl + 'FingerPrintMapping/DeleteMapping'
                 }
             },
        {
            name: 'GETEmployeeTermination',
            data: {
                Method: 'GET',
                URL: OMServiceUrl + 'EmployeeTermination/GET'
            }
        },
        {
            name: 'POSTEmployeeTermination',
            data: {
                Method: 'POST',
                URL: OMServiceUrl + 'EmployeeTermination/Post'
            }
        },
        {
            name: 'RollbackEmployeeTermination',
            data: {
                Method: 'POST',
                URL: OMServiceUrl + 'EmployeeTermination/RollbackEmployeeTermination'
            }
        },
        {
            name: 'PUTEmployeeTermination',
            data: {
                Method: 'PUT',
                URL: OMServiceUrl + 'EmployeeTermination/PUT'
            }
        },
        {
            name: 'DELETEEmployeeTermination',
            data: {
                Method: 'DELETE',
                URL: OMServiceUrl + 'EmployeeTermination/DELETE'
            }
        }
        ,
     {
         name: 'GetEmployeeDataforEdit',
         data: {
             Method: 'POST',
             URL: OMServiceUrl + 'EmployeeProfile/GetEmployeeDataforEdit'
         }
     },
     {
         name: enums().OMServicesName.Upload,
         data: {
             Method: 'POST',
             URL: OMServiceUrl + 'EmployeeProfile/Upload',
         }
     },
     {
         name: enums().OMServicesName.GetOrganizationUnits,
         data: {
             Method: 'GET',
             URL: OMServiceUrl + 'OrganizationUnit/GetOrganizationUnits',
         }
     },
     {
         name: enums().OMServicesName.GetPositionsByDepartmentsID,
         data: {
             Method: 'GET',
             URL: OMServiceUrl + 'Position/GetPositionsByDepartmentsID',
         }
     },
     {
         name: enums().OMServicesName.GetPositionsLookup,
         data: {
             Method: 'GET',
             URL: OMServiceUrl + 'Position/GetPositionsLookup',
         }
     },
     {
         name: enums().OMServicesName.GetEmployees,
         data: {
             Method: 'GET',
             URL: OMServiceUrl + 'EmployeeProfile/GetEmployees',
         }
     },
     {
         name: enums().OMServicesName.GetPenaltyActionGroups,
         data: {
             Method: 'GET',
             URL: OMServiceUrl + 'PenaltyActionGroup/GetPenaltyActionGroups',
         }
     },
     {
         name: enums().OMServicesName.GetPenaltyActionGroupsNoAttendence,
         data: {
             Method: 'GET',
             URL: OMServiceUrl + 'PenaltyActionGroup/GetPenaltyActionGroupsNoAttendence',
         }
     },
     {
         name: enums().OMServicesName.GetPenaltyActions,
         data: {
             Method: 'GET',
             URL: OMServiceUrl + 'PenaltyAction/GetPenaltyActions',
         }
     },
     {
         name: enums().OMServicesName.GetPenaltyActionsByActionGroupId,
         data: {
             Method: 'GET',
             URL: OMServiceUrl + 'PenaltyAction/GetPenaltyActionsByActionGroupId',
         }
     },
          {
              name: enums().OMServicesName.GetRecomendedPenalty,
              data: {
                  Method: 'GET',
                  URL: OMServiceUrl + 'EmployeePenalty/GetRecomendedPenalty',
              }
          },

          {
              name: enums().OMServicesName.GetActivePenalties,
              data: {
                  Method: 'GET',
                  URL: OMServiceUrl + 'Penalty/GetActivePenalties',
              }
          },
               {
                   name: enums().OMServicesName.SaveNewEmployeePenalty,
                   data: {
                       Method: 'POST',
                       URL: OMServiceUrl + 'EmployeePenalty/SaveNewEmployeePenalty',
                   }
               },
               {
                   name: enums().OMServicesName.GetDirectManagerEmployeeInTheSamePositionLookup,
                   data: {
                       Method: 'GET',
                       URL: OMServiceUrl + 'EmployeeProfile/GetDirectManagerEmployeeInTheSamePositionLookup',
                   }
               },
               {
                   name: enums().OMServicesName.GetEmployeePositionsByDirectManagerIDCount,
                   data: {
                       Method: 'GET',
                       URL: OMServiceUrl + 'EmployeeProfile/GetEmployeePositionsByDirectManagerIDCount',
                   }
               },
               {
                   name: 'GetDepartmentType',
                   data: {
                       Method: 'GET',
                       URL: OMServiceUrl + 'OrganizationUnit/GetDepartmentTypes',

                   }
               },
            {
                name: 'GetSectionType',
                data: {
                    Method: 'GET',
                    URL: OMServiceUrl + 'OrganizationUnit/GetSectionTypes',

                }
               },
               {
                   name: enums().OMServicesName.GetContractExpiresAfter,
                   data: {
                       Method: 'GET',
                       URL: OMServiceUrl + 'EmployeeReport/GetContractExpiresAfter',
                   }
               },
               {
                   name: enums().OMServicesName.ExportContractExpiresAfterReport,
                   data: {
                       Method: 'GET',
                       URL: OMServiceUrl + 'EmployeeReport/ExportContractExpiresAfterReport',
                   }
               },
               {
                   name: enums().OMServicesName.SaveNewEmployeeDeduction,
                   data: {
                       Method: 'POST',
                       URL: OMServiceUrl + 'EmployeeDeduction/SaveNewEmployeeDeduction',
                   }
               },
                {
                    name: 'GetAllPenaltyCount',
                    data: {
                        Method: 'GET',
                        URL: OMServiceUrl + 'EmployeePenalty/GetAllPenaltyCount',
                    }
                },
                
        {
            name: 'GetEmployeesPenalities',
            data: {
            Method: 'GET',
            URL: OMServiceUrl + 'EmployeePenalty/GetEmployeesPenalities',
            }
        },
        
        {
            name: 'DeletePenalty',
            data: {
            Method: 'POST',
            URL: OMServiceUrl + 'EmployeePenalty/DeletePenalty',
            }
        },
        {
            name: 'GetEmployeesDeductionsCount',
            data: {
                Method: 'GET',
                URL: OMServiceUrl + 'EmployeeDeduction/GetEmployeesDeductionsCount',
            }
        },
        {
            name: 'GetEmployeesDeductions',
            data: {
                Method: 'GET',
                URL: OMServiceUrl + 'EmployeeDeduction/GetEmployeesDeductions',
            }
        },
        {
            name: 'DeleteDeduction',
            data: {
                Method: 'POST',
                URL: OMServiceUrl + 'EmployeeDeduction/DeleteDeduction',
            }
        },
        {
            name: 'GetEmployeeDeduction',
            data: {
                Method: 'GET',
                URL: OMServiceUrl + 'EmployeeDeduction/Get',
            }
        },
        {
            name: "UpdateEmployeeDeduction",
            data: {
                Method: 'POST',
                URL: OMServiceUrl + 'EmployeeDeduction/Update',
            }
        },

        {
            name: 'SaveAutoMapping',
            data: {
                Method: 'POST',
                URL: OMServiceUrl + 'FingerPrintMapping/SaveAutoMapping',
            }
        },
        
        {
            name: 'GetSalaryItems',
            data: {
            Method: 'GET',
            URL: OMServiceUrl + 'EmployeeSalary/GetSalaryItems',
            }
        },
          {
              name: 'AddSalaryToSpecificEmployee',
              data: {
                  Method: 'POST',
                  URL: OMServiceUrl + 'EmployeeSalary/AddSalaryToSpecificEmployee',
              }
          },

          {
              name: 'CheckSalaryItems',
              data: {
                  Method: 'GET',
                  URL: OMServiceUrl + 'EmployeeSalary/CheckSalaryItems',
              }
          },
                 {
                     name: 'GetTerminatedEmployees',
                     data: {
                         Method: 'GET',
                         URL: OMServiceUrl + 'EmployeeTermination/GetEmployeesByCriteria',
                     }
                 },
                 


{
    name: 'GetTerminatedEmployeesCount',
    data: {
        Method: 'GET',
        URL: OMServiceUrl + 'EmployeeTermination/GetEmployeesByCriteriaCount'
    }
},
{
    name: 'ReHireEmployee',
    data: {
        Method: 'Post',
        URL: OMServiceUrl + 'EmployeeProfile/ReHireEmployee',
    }
},
{
    name: 'GetEmployeeExperience',
    data: {
        Method: 'Get',
        URL: OMServiceUrl + 'EmployeeExperience/GetEmployeeExperience',
    }
},
{
    name: 'AddEmployeeExperience',
    data: {
        Method: 'Post',
        URL: OMServiceUrl + 'EmployeeExperience/SaveEmployeeExperience',
    }
},
{
    name: 'GetEmployeeBasicDataLookup',
    data: {
        Method: 'Get',
        URL: OMServiceUrl + 'EmployeeInformation/GetEmployeeBasicDataLookup',
}
},
{
    name: 'ExportEmployeeInformation',
    data: {
        Method: 'Post',
        URL: OMServiceUrl + 'EmployeeInformation/ExportEmployeeInformation',
    }
},
//

//ReHireEmployee
        //UpdateEmployeeDeduction

       
               
        ];
    };

    // This function return services data for payroll management module
    function payRollManagementServiceURLs() {
        return [
        {
            name: 'GetOpenedMonthsByEmployee',
            data: {
                Method: 'GET',
                URL: PayrollServiceUrl + 'ClosingMonth/GetOpenedMonthsByEmployee'
            }
        },

        {
            name: 'GetEmployeeSalary',
            data: {
                Method: 'GET',
                URL: PayrollServiceUrl + 'EmployeeSalary/GetEmployeeSalary'
            }
        },
        
        {
            name: 'GetSalaryAndBenefit',
            data: {
            Method: 'GET',
            URL: PayrollServiceUrl + 'EmployeeSalary/GetSalaryAndBenefit'
            }
        },
          
        {
            name: 'CheckEffectiveDate',
            data: {
            Method: 'GET',
            URL: PayrollServiceUrl + 'EmployeeSalary/CheckEffectiveDate'
            }
    },
        
        {
            name: 'SaveEmployeeSalaryData',
            data: {
            Method: 'POST',
            URL: PayrollServiceUrl + 'EmployeeSalary/SaveEmployeeSalaryData'
            }
    },

        {
            name: 'GetEmployeesSalaryHoldList',
            data: {
                Method: 'GET',
                URL: PayrollServiceUrl + 'SalaryHold/Get'
            }
        },

        {
            name: 'UnHoldSalary',
            data: {
                Method: 'PUT',
                URL: PayrollServiceUrl + 'SalaryHold/UnHoldSalary'
            }
        },
        {
                    name: 'InitScreen',
                    data: {
                        Method: 'GET',
                        URL: PayrollServiceUrl + 'SalaryHold/InitScreen'
                    }
                },
                                {
                                    name: 'AddSalaryHold',
                                    data: {
                                        Method: 'POST',
                                        URL: PayrollServiceUrl + 'SalaryHold/AddSalaryHold'
                                    }
                                },
        {
            name: 'GetMonthDataOnly',
            data: {
                Method: 'GET',
                URL: PayrollServiceUrl + 'Month/GetMonthDataOnly'
            }
        },
        {
            name: 'GetPayrollItemWithTemplate',
            data: {
                Method: 'GET',
                URL: PayrollServiceUrl + 'PayrollItem/GetPayrollItemWithTemplate'
            }
        },
        {
            name: 'CheckClosingMonthByDepartmentAndPayrollItem',
            data: {
                Method: 'GET',
                URL: PayrollServiceUrl + 'ClosingMonth/CheckClosingMonthByDepartmentAndPayrollItem'
            }
        },
        {
            name: 'GetPayrollItemDataEntry',
            data: {
                Method: 'GET',
                URL: PayrollServiceUrl + 'PayrollItemDataEntry/GetPayrollItemDataEntry'
            }
        },
        {
            name: 'GetPayrollItemDataEntryCount',
            data: {
                Method: 'GET',
                URL: PayrollServiceUrl + 'PayrollItemDataEntry/GetPayrollItemDataEntryCount'
            }
        },
        //
        {
            name: 'GetSalaryAndBenefitToEdit',
            data: {
                Method: 'GET',
                URL: PayrollServiceUrl + 'EmployeeSalary/GetSalaryAndBenefitToEdit'
            }
        },
        
        {
            name: 'Update',
            data: {
            Method: 'PUT',
            URL: PayrollServiceUrl + 'EmployeeSalary/Update'
            }
        },
        
        {
            name: 'CheckEffectiveDateToEdit',
            data: {
            Method: 'GET',
            URL: PayrollServiceUrl + 'EmployeeSalary/CheckEffectiveDateToEdit'
            }
        },
        
        {
            name: 'Delete',
            data: {
            Method: 'POST',
            URL: PayrollServiceUrl + 'EmployeeSalary/Delete'
            }
        }
        //
        ];
    };

    // This function return services data for common management module
    function commonManagementServiceURLs() {
        return [
             {
                 name: 'GetConfigurations',
                 data: {
                     Method: 'GET',
                     URL: CommonServiceUrl + 'Configuration/GetConfigurations'
                 }
             }
        ];
    };



});
