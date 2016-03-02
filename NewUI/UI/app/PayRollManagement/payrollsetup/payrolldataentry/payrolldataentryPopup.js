app.controller('payrolldataentryPopup', ['$scope', '$translate','$modalInstance',
    function ($scope, $translate,$modalInstance) {

        window.scope = $scope;

        $scope.ok = function (form) {
            if (form.$error.required !== undefined)
                form.$error.required.forEach(function (item) {
                    item.$setDirty();
                    isFormValid = false;

                });
      
        }


        


        $scope.cancel = function () {
   
            $modalInstance.dismiss('cancel');
        };


        $scope.yearselect = {
            optionLabel:$translate.instant('PR.PayrollDataEntry.SelectYear'),
            dataTextField: "Name",
            dataValueField: "ID",
            valuePrimitive: true,
            autoClose: false,
            highlightFirst: false,
            filter: "contains",
            dataSource: [
                       { Name: "2015" },
                       { Name: "2016" },
                       { Name: "2017" }
            ]
        };

        $scope.monthselect = {
            optionLabel:$translate.instant('PR.PayrollDataEntry.MonthSelect'),
            dataTextField: "Name",
            dataValueField: "ID",
            valuePrimitive: true,
            autoClose: false,
            highlightFirst: false,
            filter: "contains",
            dataSource: [
                       { Name: "December" },
                       { Name: "March" },
                       { Name: "May"}
            ]
        };


        $scope.itemselect = {
            optionLabel:$translate.instant('PR.PayrollDataEntry.Selectpayrollitem'), 
            dataTextField: "Name",
            dataValueField: "ID",
            valuePrimitive: true,
            autoClose: false,
            highlightFirst: false,
            filter: "contains",
            dataSource: [
                       { Name: "item1" },
                       { Name: "item2"},
                       { Name: "item3" }
            ]
        };


        $scope.empcode = {
            optionLabel:$translate.instant('PR.PayrollDataEntry.SelectEmployeeCode'), 
            dataTextField: "Name",
            dataValueField: "ID",
            valuePrimitive: true,
            autoClose: false,
            highlightFirst: false,
            filter: "contains",
            dataSource: [
                       { Name: "code1" },
                       { Name: "code2" },
                       { Name: "code3" }
            ]
        };


        $scope.amount = {
            optionLabel:$translate.instant('PR.PayrollDataEntry.SelectAmount'), 
            dataTextField: "Name",
            dataValueField: "ID",
            valuePrimitive: true,
            autoClose: false,
            highlightFirst: false,
            filter: "contains",
            dataSource: [
                       { Name: "Amount1" },
                       { Name: "Amount2" },
                       { Name: "Amount3" }
            ]
        };


        $scope.remarks = {
            optionLabel:$translate.instant('PR.PayrollDataEntry.SelectRemarks'),  
            dataTextField: "Name",
            dataValueField: "ID",
            valuePrimitive: true,
            autoClose: false,
            highlightFirst: false,
            filter: "contains",
            dataSource: [
                       { Name: "Remarks1" },
                       { Name: "Remarks2" },
                       { Name: "Remarks3" }
            ]
        };


     


 


    }

]);





