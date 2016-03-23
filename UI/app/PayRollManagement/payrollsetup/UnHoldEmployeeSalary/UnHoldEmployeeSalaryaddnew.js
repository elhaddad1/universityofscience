

app.controller('UnHoldEmployeeSalaryaddnew', ['$scope', '$q', 'toaster', '$translate', 'EmployeeSalaryHoldService', function ($scope, $q, toaster, $translate, EmployeeSalaryHoldService) {


    $scope.DepartmentList = new kendo.data.DataSource({
        data: [
        ]
    });
    $scope.PositionList = new kendo.data.DataSource({
        data: [
        ]
    });
    $scope.EmployeeList = new kendo.data.DataSource({
        data: [
        ]
    });
    $scope.ReasonList = new kendo.data.DataSource({
        data: [
        ]
    });

    $scope.objSalaryHold = {
        HoldReasonID: 0, EmployeeID: 0,
        DepartmentID: undefined, PositionID: undefined,
        Note: ''
    };

    $scope.PageLoad = function (w) {
        $scope.showloading = true;
        $q.all([EmployeeSalaryHoldService.InitScreen()]).then(function (data) {
            var objData = data[0].data;
            $scope.DepartmentList = new kendo.data.DataSource({
                data: objData.Departments
            });
            $scope.PostionsData = objData.Postions;
            $scope.PositionList = new kendo.data.DataSource({
                data: objData.Postions
            });
            $scope.EmpsData = objData.Employees;
            $scope.EmployeeList = new kendo.data.DataSource({
                data: objData.Employees
            });
            $scope.ReasonList = new kendo.data.DataSource({
                data: objData.SalaryHoldReasons
            });
            $scope.showloading = false;
        });

    };

    $scope.EmployeeOptions = {
        optionLabel: $translate.instant('PR.unhold.selectEmployee'),
        dataTextField: "EnName",
        dataValueField: "ID",
        autoBind: false,
        valuePrimitive: true,
        autoClose: false,
        filter: "contains",
    };

    $scope.PositionOptions = {
        dataTextField: "EnName",
        dataValueField: "ID",
        valuePrimitive: true,
        autoClose: false,
        autoBind: false,
        optionLabel: $translate.instant('PR.unhold.selectposition'),
        filter: "contains",
        change: function () { $scope.onPositionClick(); }
    };

    $scope.DepartmentOptions = {
        dataTextField: "EnName",
        dataValueField: "ID",
        valuePrimitive: true,
        autoBind: false,
        autoClose: false,
        optionLabel: $translate.instant('PR.unhold.selectDepartment'),
        filter: "contains",
        change: function () { $scope.onDepartmentChange(); }
    };

    $scope.ReasonOptions = {
        dataTextField: "Reason",
        dataValueField: "ID",
        valuePrimitive: true,
        autoBind: false,
        autoClose: false,
        optionLabel: $translate.instant('PR.unhold.selectreason'),
        filter: "contains"
    };

    $scope.onPositionClick = function () {

        var filteredEmployeesDataSource = [];
        if (!$scope.objSalaryHold.PositionID) {
            filteredEmployeesDataSource = $scope.EmpsData.filter(function (item) {
                if ($scope.objSalaryHold.DepartmentID == undefined || $scope.objSalaryHold.DepartmentID == '' ||
                    $scope.objSalaryHold.DepartmentID == null || $scope.objSalaryHold.DepartmentID.length == 0) {
                    return true;
                }
                else {
                    var exixt = false;

                    if ($scope.objSalaryHold.DepartmentID.indexOf(item.FirstFilterID) != -1) {
                        return true;
                    }

                    return false;
                }
            });
        }
        else {
            filteredEmployeesDataSource = $scope.EmpsData.filter(function (item) {
                if ($scope.objSalaryHold.PositionID == undefined || $scope.objSalaryHold.PositionID == '') {
                    return true;
                }
                else {
                    var exixt = false;

                    if (item.SecondFilterID == $scope.objSalaryHold.PositionID) {
                        return true;
                    }

                    return false;
                }
            });
        }
        $scope.EmployeeList = filteredEmployeesDataSource;

        // Clear Employee selected
        $scope.objSalaryHold.EmployeeID = null;

        if (!$scope.$$phase) $scope.$apply();
    }

    // Filter After Select Department 
    $scope.onDepartmentChange = function (selectedIDS) {
        //applying tree
        if (selectedIDS == null) {
            $scope.objSalaryHold.DepartmentID = [];

        }
        else {
            $scope.objSalaryHold.DepartmentID = selectedIDS;
        }

        var filteredPostionDataSource = $scope.PostionsData.filter(function (item) {
            if (typeof $scope.objSalaryHold.DepartmentID === 'undefined') {
                return true;
            }
            else {
                var exixt = false;

                if ($scope.objSalaryHold.DepartmentID.indexOf(item.FirstFilterID) != -1) {
                    return true;
                }

                return false;
            }
        });
        $scope.PositionList = filteredPostionDataSource;

        // Clear Position selected
        $scope.objSalaryHold.PositionID = null;
        if (!$scope.$$phase) $scope.$apply();

        var filteredEmployeesDataSource = $scope.EmpsData.filter(function (item) {
            if ($scope.objSalaryHold.DepartmentID == undefined || $scope.objSalaryHold.DepartmentID == '' || $scope.objSalaryHold.DepartmentID.length == 0) {
                return true;
            }
            else {
                var exixt = false;
                //applying tree
                if ($scope.objSalaryHold.DepartmentID.indexOf(item.FirstFilterID) != -1) {
                    return true;
                }

                return false;
            }
        });

        $scope.EmployeeList = filteredEmployeesDataSource;

        // Clear Employee selected
        $scope.objSalaryHold.EmployeeID = null;

        if ($scope.objSalaryHold.DepartmentID == "" || $scope.objSalaryHold.DepartmentID == undefined || $scope.objSalaryHold.DepartmentID.length == 0) {
            $scope.PositionList = $scope.PostionsData;
            $scope.EmployeeList = $scope.EmpsData;
        }
        if (!$scope.$$phase) $scope.$apply();
    }
    // UnSelectAll  in list and clear scope selected After Select Department
    $scope.ClearForDepartment = function () {
        $scope.objSalaryHold.PositionID = null;
        $scope.objSalaryHold.EmployeeID = null;
        $scope.PositionList = $scope.PostionsData;
        $scope.EmployeeList = $scope.EmpsData;
        if (!$scope.$$phase) $scope.$apply();
    };

    $scope.$on("kendoWidgetCreated", function (e, w) {
        if ($scope.depTree && w.options.headerTemplate && w.options.headerTemplate.indexOf('abn-tree') != -1) {
            $scope.PageLoad(w);
        }
    });

    $scope.ClearData = function () {

        $scope.myform.$setPristine();

        $scope.objSalaryHold.HoldReasonID = null;
        $scope.objSalaryHold.DepartmentID = null;
        $scope.objSalaryHold.PositionID = null;
        $scope.objSalaryHold.EmployeeID = null;
        $scope.objSalaryHold.Note = null;

        $scope.ClearForDepartment();
        $scope.depTree.clear();
    }

    function ReloadScreenAfterSave(result) {
        if (result) {
            $scope.ClearData();
            toaster.pop('success', '', $translate.instant('PR.toaster.success'));
            if ($scope.Close == true) {
                $scope.$state.go('app.payroll.payrollsetup.UnHoldEmployeeSalary');
            }
        }
        else {
            toaster.pop('error', '', $translate.instant('PR.toaster.error'));
        }
    }

    $scope.Save = function (form) {
        if (!form.$valid) {
            if (form.$error.required !== undefined) {
                form.$error.required.forEach(function (item) {
                    item.$setDirty();
                });
                return;
            }
        }

        $scope.showloading = true;

        var objSalaryHoldJson = {

            EmployeeID: $scope.objSalaryHold.EmployeeID,
            HoldReasonID: $scope.objSalaryHold.HoldReasonID,
            Note: $scope.objSalaryHold.Note,
            IsHold: true
        };

        var Data = EmployeeSalaryHoldService.AddSalaryHold(objSalaryHoldJson,function (result) {

            ReloadScreenAfterSave(result);
            $scope.showloading = false;
        });
    }

    $scope.SaveAndClose = function () {
        $scope.Close = true;
    }
    $scope.SaveOnly = function () {
        $scope.Close = false;
    }

    $scope.Cancel = function () {
        $scope.ClearData();
        $scope.$state.go('app.payroll.payrollsetup.UnHoldEmployeeSalary');
    }


}])



