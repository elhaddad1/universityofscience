
app.controller('nav', ['$scope', function ($scope) {

    $scope.navData =
         [
         { name: "Dashboard", url: "app.dashboard", icon: "fa fa-th-large text-info", sub: [] },
          {
              name: "Time And Attendance", url: "app.TimeManagement", icon: "fa  fa-clock-o fs20 text-danger", sub:
                  [

                {
                    name: "Setup", url: "app.TimeManagement", icon: "glyphicon-briefcase", sub: [


                      { name: "Shift SetUp", url: "app.TimeManagement.Setup.shiftSetup", icon: "glyphicon-file", sub: [] },

                    ]
                },


                 {
                     name: "Rules", url: "app.TimeManagement", icon: "glyphicon-briefcase", sub: [


                         { name: "Working Schedule Permission", url: "", icon: "glyphicon-file", sub: [] },

                     ]
                 },


                 

                    {
                        name: "Scheduling", url: "app.TimeManagement", icon: "glyphicon-briefcase", sub: [


                                             { name: "Employees Scheduling", url: "", icon: "glyphicon-briefcase", sub: [] },
                        ]
                    },


                       {
                           name: "Leaves Management", url: "app.TimeManagement", icon: "glyphicon-briefcase", sub: [


                                                { name: "Leave Request", url: "", icon: "glyphicon-briefcase", sub: [] },
                                                { name: "Add Employee Leave Balance", url: "", icon: "glyphicon-briefcase", sub: [] },
                                                { name: "Holidays setup", url: "", icon: "glyphicon-briefcase", sub: [] },

                           ]
                       },


                    {
                        name: "Attendance Management", url: "app.TimeManagement", icon: "glyphicon-briefcase", sub: [


                                 { name: "Manual Attendance", url: "app.Attendance.AttendanceManagement.manualAttendance", icon: "glyphicon-briefcase", sub: [] },

             

                   { name: " Time Evaluation", url: "app.Attendance.AttendanceProcessing.conflictDetection", icon: "glyphicon-briefcase", sub: [] },

                        { name: "Time Keeper", url: "app.TimeManagement.timeKeeper", icon: "glyphicon-file", sub: [] },


                                                ]
                    }



              
                   
                      
                  ]
          },
           {
               name: "Personnel Management", url: "app.OrganizationManagement", icon:  "fa fa-users text-warning", sub:
                  [

                        { name: "Employee Profile", url: "app.PersonnelManagement.Hiring.EmployeeProfile", icon: "glyphicon-file", sub: [] },

                  { name: "Employee Termination", url: "app.OrganizationManagement.QuickEmployeeTermination", icon: "glyphicon-file", sub: [] },



                      
                  ]
           },
            {
                name: "Payroll Management", url: "/", icon: "fa  fa-suitcase text-success", sub:
                   [

                //{ name: "Home", url: "/", icon: "", sub: [] },
                //       { name: "About", url: "/about", icon: "glyphicon-file", sub: [] },
                       
                       
                   ]
            },
            


         ]
    ;




}]);






//  { name: "Manual Attendance", url: "app.TimeManagement.manualAttendance", icon: "glyphicon-briefcase", sub: []},

//  { name: "Time Keeper", url: "app.TimeManagement.timeKeeper", icon: "glyphicon-file", sub: [] },

// { name: " Clock conflicts Detection", url: "app.TimeManagement.conflictDetection", icon: "glyphicon-briefcase", sub: [] },

// { name: "Shift SetUp", url: "app.TimeManagement.shiftSetup", icon: "glyphicon-file", sub: [] },
// { name: "Shift Assignment", url: "app.TimeManagement.shiftAssignment", icon: "glyphicon-briefcase", sub: [] },



// { name: "Backward Edit", url: "app.TimeManagement.BackwardEdit", icon: "glyphicon-file", sub: [] },
//{ name: "Backward Edit", url: "app.TimeManagement.BackwardEdit", icon: "glyphicon-file", sub: [] },

//{ name: "Forward Edit", url: "app.TimeManagement.ForwardEdit", icon: "glyphicon-file", sub: [] },

// { name: "Working Schdule Permission", url: "app.TimeManagement.ForwardEdit", icon: "glyphicon-file", sub: [] },


// { name: " Manual Attendance Adjust Clock", url: "app.TimeManagement.manualAttendanceAdjustClock", icon: "glyphicon-briefcase", sub: [] },

// { name: "validation example", url: "app.TimeManagement.validation", icon: "glyphicon-briefcase", sub: [] },