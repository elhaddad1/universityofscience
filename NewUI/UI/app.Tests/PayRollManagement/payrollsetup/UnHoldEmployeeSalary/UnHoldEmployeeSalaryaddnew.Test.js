
/// <reference path="../../../../app/PayRollManagement/payrollsetup/UnHoldEmployeeSalary/UnHoldEmployeeSalaryaddnew.js" />


describe('Story[9082] : Testing UnHoldEmployeeSalaryaddnew Controller', function () {
    //initialize Angular

    var scope;


    beforeEach(module('app'));

    beforeEach(inject(function ($controller, $rootScope, $q) {
        scope = $rootScope.$new();
        var ctrl = $controller('UnHoldEmployeeSalaryaddnew', { $scope: scope });

    }));


    it('dummyTest', function () {
        expect(1).toEqual(1);
    });

});