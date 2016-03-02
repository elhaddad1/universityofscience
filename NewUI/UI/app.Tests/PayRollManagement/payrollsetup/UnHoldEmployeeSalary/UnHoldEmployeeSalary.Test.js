/// <reference path="../../../../app/PayRollManagement/payrollsetup/UnHoldEmployeeSalary/UnHoldEmployeeSalary.js" />




describe('Story[9186] : Testing UnHoldEmployeeSalary Controller', function () {
    //initialize Angular
    //define scope variable to hold cuurent controller scope
    var scope;
    //define app module beforeeach test(it)
    beforeEach(module('app'));
    //define controller and pass its dependency beforeeach test (it)
    beforeEach(inject(function ($controller, $rootScope, $q) {
        scope = $rootScope.$new();
        //define target controller 
        var ctrl = $controller('UnHoldEmployeeSalary', { $scope: scope });

    }));
    //Dummy Test just for make sure that configuration done right 
    //Devloper have to delete it 
    it('dummyTest', function () {
        expect(1).toEqual(1);
    });

});
