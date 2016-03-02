app.controller('payrolldataentry', ['$scope', '$translate', '$modal', 'PayrollItemService', 'MonthPayrollService',
    '$q','CommonService','ClosingMonthPayrollService','OrganizationUnitService','PayrollItemDataEntryService',
    function ($scope, $translate, $modal, PayrollItemService, MonthPayrollService, $q, CommonService,
        ClosingMonthPayrollService, OrganizationUnitService, PayrollItemDataEntryService) {

        window.scope = $scope;

        var currentDate = new Date();

        var currentYear = currentDate.getFullYear();



        $scope.InitScreen = function () {
            // getting all policies, orgs and positions
            return $q.all([PayrollItemService.GetPayrollItemWithTemplate(),
                MonthPayrollService.GetMonthDataOnly(), OrganizationUnitService.GetDepartmentType(),
                CommonService.GetConfigurations()]).then(function (data) {

                $scope.ItemList = new kendo.data.DataSource({
                    data: data[0].data
                });

                $scope.ParollItemData = data[0].data;

                $scope.MonthList = new kendo.data.DataSource({
                    data: data[1].data
                });

                $scope.MonthData = data[1].data;

                $scope.DepartmentList = new kendo.data.DataSource({
                    data: data[2].data
                });

                $scope.DepartmentData = data[2].data;

                $scope.Configurations = data[3].data;
                $scope.GridPageSize = CommonService.GetPageSizeData(data[3].data);
                $scope.currentPage = 1;

            });
        };

        $scope.payrolldataentryPopup = function () {
        

            var modalInstance = $modal.open({
                templateUrl: 'app/PayRollManagement/payrollsetup/payrolldataentry/payrolldataentryPopup.html',
                controller: 'payrolldataentryPopup',
                backdrop: 'static',
                keyboard: false,
                size: 'lg',
                resolve: {

                   
                    deps: ['uiLoad',
                        function (uiLoad) {
                            
                            return uiLoad.load(['app/PayRollManagement/payrollsetup/payrolldataentry/payrolldataentryPopup.js']);
                        }
                    ]
                }
            });


       

        }

//---------------------------------


        $scope.GetData = function (form) {
            var isFormValid = true;
            if (form.$error.required !== undefined)
                form.$error.required.forEach(function (item) {
                    item.$setDirty();
                    isFormValid = false;

                });

            if (!isFormValid)
                return;
            $scope.showloading = true;
            $q.all([ClosingMonthPayrollService.CheckClosingMonthByDepartmentAndPayrollItem($scope.DepartmentID, $scope.YearID, $scope.MonthID, $scope.payrollItemID),
           PayrollItemDataEntryService.GetPayrollItemDataEntryCount($scope.DepartmentID, $scope.YearID, $scope.MonthID, $scope.payrollItemID)]).then(function (data) {

                if (data != null && data != undefined && data[0]!=null && data[0]!=undefined)
                    $scope.IsClosed = data[0].data;

                if (data != null && data != undefined && data[1] != null && data[1] != undefined && (data[1].data == null || data[1].data == 0)) {
                    $scope.EmployeesItemsGridOptions.dataSource = [];
                    // reset Option to grid
                    $scope.EmployeesItemsGrid.setOptions($scope.EmployeesItemsGridOptions);
                    $scope.EmployeesItemsGrid.trigger('change');

                }
                else {
                    $scope.EmployeesItemsGridOptions.dataSource = [];
                    // reset Option to grid
                    $scope.EmployeesItemsGrid.setOptions($scope.EmployeesItemsGridOptions);
                    $scope.EmployeesItemsGrid.trigger('change');
                    //   $scope.Employees = data;
                    $scope.EmployeesItemsGridOptions.dataSource = {
                        page: $scope.currentPage || 1,
                        type: "json",
                        serverPaging: true,
                        serverSorting: true,
                        serverFiltering: true,
                        pageSize: parseInt($scope.GridPageSize),
                        transport: { 
                            read: 
                                { 
                                    url: clientAgentService().getPayrollSeviceData("GetPayrollItemDataEntry").URL + "?departmentID=" + $scope.DepartmentID + "&year=" + $scope.YearID + "&monthID=" + $scope.MonthID+ "&payrollItemID="+$scope.payrollItemID, dataType: "json"
                                }
                        },
                        schema: {
                            data: this.data,
                            total: function () {
                                return $scope.gridRowsCount;
                            }
                        },
                        batch: true,
                    },
                    // reset Option to grid
                    $scope.EmployeesItemsGrid.setOptions($scope.EmployeesItemsGridOptions);
                    $scope.EmployeesItemsGrid.trigger('change');






                    //re overriding  filter method
                    var orginalFilter = $scope.EmployeesItemsGrid.dataSource.filter;
                    $scope.EmployeesItemsGrid.dataSource.filter = function () {

                        if (arguments.length > 0) {

                            $scope.filtered = true;
                            $scope.fixScrollOnArabic('EmployeesItemsGrid');
                        }
                        return orginalFilter.apply(this, arguments);
                    }
                    //end
                }
                $scope.showloading = false;


            });
      
        }

        $scope.ValidateForm = function (YearID, MonthID, payrollItemID,DepartmentID) {
            var isFormValid = false;
            if (YearID > 0 && MonthID > 0 && payrollItemID > 0 && DepartmentID>0)
               
                    isFormValid = true;

               

           
            return isFormValid;
        }
        $scope.$watch('gridRowsCount', function () {


            // var grid = scope.GridObject.GVAttend;
            // if (grid && grid.setOptions) {
            if ($scope.filtered) {
                try {

                    $scope.EmployeesItemsGrid.setDataSource($scope.EmployeesItemsGrid.dataSource);
                    $scope.filtered = false;
                } catch (e) { }
            }
        });
        //Define Options for Department Drop Down List
        $scope.DepartmentOptions = {
            optionLabel: $translate.instant('PR.unhold.selectDepartment'),           
            dataTextField: "EnName",
            dataValueField: "ID",
            valuePrimitive: true,
            autoBind: false,
            autoClose: false,
            filter: "contains",
            serverFiltering: false,
            headerTemplate: $scope.noData('organizationUnit.dataSource._total<=0')
            
        };



   
  

        $scope.yearselect = {
            optionLabel: $translate.instant('PR.unhold.SelectYear'),
            dataTextField: "Name",
            dataValueField: "ID",
            valuePrimitive: true,
            autoClose: false,
            highlightFirst: false,
            filter: "contains",
            dataSource: [
                       { Name: currentYear-1, ID: currentYear-1 },
                       { Name: currentYear, ID: currentYear },
                       { Name: currentYear+1,ID: currentYear+1 },
                      
            ],
            headerTemplate: $scope.noData('ddlYears.dataSource._total<=0'),
        };

        $scope.monthselect = {
            optionLabel: $translate.instant('PR.unhold.SelectMonth'),
            dataTextField: "EnName",
            dataValueField: "ID",
            valuePrimitive: true,
            autoClose: false,
            highlightFirst: false,
            filter: "contains",
            headerTemplate: $scope.noData('ddlMonths.dataSource._total<=0')
        };


        $scope.itemSelectOptions = {
            optionLabel: $translate.instant('PR.unhold.Selectpayrollitem'),
            dataTextField: "EnName",
            dataValueField: "ID",
            valuePrimitive: true,
            autoClose: false,
            highlightFirst: false,
            filter: "contains",
            headerTemplate: $scope.noData('ddlItems.dataSource._total<=0')
           
        };


     
        $scope.EmployeesItemsGridOptions = {
            columns: [
                {
                    field: "EmployeeCode",
                title: $translate.instant('PR.unhold.EmployeeCode'),
                width: 115,
                filterable: {
                    cell: {
                        showOperators: false,
                        operator: "contains",
                        suggestionOperator: "contains"
                    }
                }
            }, {
                field: "EmployeeEnglishName",
                title: $translate.instant('PR.unhold.EmployeeName'),
                width: 150,
                filterable: {
                    cell: {
                        showOperators: false,
                        operator: "contains",
                        suggestionOperator: "contains"
                    }
                }
            }, {
                field: "EmployeeDepartmentEnglishName",
                ttitle: $translate.instant('PR.unhold.Department'),
                width: 120,
                filterable: {
                    cell: {
                        showOperators: false,
                        operator: "contains",
                        suggestionOperator: "contains"
                    }
                }
            }, {
                field: "EmployeeSectionEnglishName",
                title: $translate.instant('PR.unhold.Section'),
                width: 115,
                filterable: {
                    cell: {
                        operator: "contains",
                        showOperators: false,
                        suggestionOperator: "contains"
                    }
                }
            }, {
                field: "Amount",
                title: $translate.instant('PR.unhold.Amount'),
                width: 115,
                filterable: {
                    cell: {
                        operator: "contains",
                        showOperators: false,
                        suggestionOperator: "contains"
                    }
                }
            },
            {
                field: "Remarks",

                title: $translate.instant('PR.unhold.Remarks'),

                width: 115,
                filterable: {
                    cell: {
                        operator: "contains",
                        showOperators: false,
                        suggestionOperator: "contains"
                    }
                }


            }

            ],

            pageable: true,
            sortable: true,
            filterable: {
                mode: 'row'
            }
        }

        $scope.fixFiltrationDelete($scope, 'EmployeesItemsGrid');





    }

]);





