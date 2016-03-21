

/// <reference path="../../../app/Services/CommonService.js" />
/// <reference path="../../../app/Services/EmployeeList.js" />
/// <reference path="../../../app/Services/manageSalaryService.js" />

/// <reference path="../../../app/OrganizationManagement/AddNewEffectDate/AddNewEffectiveDateModel.js" />



describe('Test Add Employee Salary Data', function () {
    //initialize Angular
    beforeEach(module('app'));
  
    
    // parse out the scope for use in our unit tests.
    var scope;
    var modalInstanceMock;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
      
        modalInstanceMock = {
            close: function (result) {

            }
        };
        var ctrl = $controller('AddNewEffectiveDateCtrl', {
            $scope: scope, $modalInstance: modalInstanceMock,
            GetEmployeeID: { EmployeeId: 12 }
        });
       
    }));

    it('Check That Salary Items Contains At Least One Value', function () {
        debugger;
        var salaryBenefits = [];
        salaryBenefits.push({ Type: "Salary", Value: 1 }, { Type: "Salary", Value: 0 }, { Type: "Salary", Value: 0 }, { Type: "Salary", Value: 0 }, { Type: "Benefit", Value: 0 });
        var counter = scope.CheckThatAtLeastOneSalaryHasValue(salaryBenefits);
        expect(1).toBe(counter);
    });


});