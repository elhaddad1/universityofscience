app.controller('UnHoldEmployeeSalary', ['$scope', '$translate', '$q', 'toaster', 'CommonService', 'EmployeeSalaryHoldService',
     function ($scope, $translate, $q, toaster, CommonService, EmployeeSalaryHoldService) {

         $scope.UnHoldSalary = function () {
             EmployeeSalaryHoldService.UnHoldSalary(this.dataItem.ID, function (data) {
                 if (data == true) {
                     $scope.PageLoad();
                     $scope.UnHoldEmployeeSalary.refresh();
                     toaster.pop('success', $translate.instant('PR.unhold.UnHoldSalarySuccess'), null, '50000', 'toast-top-full-width');
                 }
                 else {
                     toaster.pop('error', $translate.instant('PR.unhold.UnHoldSalaryError'), null, '50000', 'toast-top-full-width');
                 }
             });
         }

         $scope.PageLoad = function () {
             if ($scope.Configurations == undefined) {
                 $q.all([CommonService.GetConfigurations()]).then(function (data) {
                     $scope.Configurations = data;
                     $scope.FillUnHoldEmployeeSalaryGrid();
                 });
             } else {
                 $scope.FillUnHoldEmployeeSalaryGrid();
             }
         }

         $scope.FillUnHoldEmployeeSalaryGrid = function () {
             $scope.GridPageSize = CommonService.GetPageSize($scope.Configurations);
             $scope.UnHoldEmployeeSalaryOptions = {
                 pageable: true,
                 sortable: true,
                 filterable: { mode: 'row' },

                 dataSource: {
                     page: $scope.currentPage || 1,
                     type: "json",
                     serverPaging: true,
                     serverSorting: true,
                     serverFiltering: true,
                     pageSize: parseInt($scope.GridPageSize),
                     transport: {
                         read: { url: EmployeeSalaryHoldService.GetEmployeesSalaryHoldListServiceUrl(), dataType: "json" }
                     },
                     schema: {
                         data: this.data,
                         total: function () {
                             return $scope.gridRowsCount;
                         },
                     },
                     batch: true,
                 },
                 columns: [
                     {
                         field: "EmployeeCode",
                         title: $translate.instant('PR.unhold.EmployeeCode'),
                         template: tooltip('EmployeeCode'),
                         width: 120,
                         filterable: {
                             cell: {
                                 operator: "contains",
                                 showOperators: false,
                                 suggestionOperator: "contains"
                             }
                         }

                     },
                     {
                         field: "EmployeeName",
                         title: $translate.instant('PR.unhold.EmployeeName'),
                         template: tooltip('EmployeeName'),
                         width: 230,
                         filterable: {
                             cell: {
                                 operator: "contains",
                                 showOperators: false,
                                 suggestionOperator: "contains"
                             }
                         }
                     },
      {
          field: "EmployeeDepartment",
          title: $translate.instant('PR.unhold.Department'),
          width: 125,
          template: tooltip('EmployeeDepartment'),
          filterable: {
              cell: {
                  operator: "contains",
                  showOperators: false,
                  suggestionOperator: "contains"
              }
          }
      },


        {
            field: "EmployeeSection",
            title: $translate.instant('PR.unhold.Section'),
            width: 125,
            template: tooltip('EmployeeSection'),
            filterable: {
                cell: {
                    operator: "contains",
                    showOperators: false,
                    suggestionOperator: "contains"
                }
            }
        },
                     {
                         field: "EmployeePosition",
                         title: $translate.instant('PR.unhold.Position'),
                         width: 125,
                         template: tooltip('EmployeePosition'),
                         filterable: {
                             cell: {
                                 operator: "contains",
                                 showOperators: false,
                                 suggestionOperator: "contains"
                             }
                         }

                     },
                     {
                         field: "StartDate",
                         title: $translate.instant('PR.unhold.StartholdingDate'),
                         template: '#:kendo.toString(StartDate,"dd-MMM-yyyy")#',
                         width: 130,
                         type: "date",
                         filterable: {
                             cell: {
                                 template: function (args) {
                                     args.element.kendoDatePicker({
                                         format: DATEFORMAT
                                     })
                                 },
                                 operator: "contains",
                                 showOperators: true
                             }
                         }
                     },
                     {
                         filterable: false, sortable: false,
                         width: 60,
                         template: '<button ng-confirmation-title=\'{{ "PR.unhold.confirmationtitle" | translate }}\' ng-confirmation-message= \'{{ "PR.unhold.message" | translate }}\' ng-confirmation-yes=\'{{ "PR.unhold.yes" | translate }}\'  ng-confirmation-no= \'{{ "PR.unhold.no" | translate }}\' ng-confirmation-click="UnHoldSalary()"  tooltip="Un-Hold" tooltip-trigger="mouseenter"  tooltip-placement="bottom" class="btn btn-sm btn-icon btn-danger"><i class="fa  fa-lock"></i></button >'
                     }

                 ],


             };
         }

     }


]);





