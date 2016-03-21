
/// <reference path="../../../../app/TimeManagement/overTime/AddNewForcedOvertime/AddNewForcedOvertime.js" />

describe('Story[9072] : Testing AddNewForcedOvertimectr Controller', function () {

    //define scope variable to hold cuurent controller scope
    var scope;
    // define mock object to modalinstance just to have a close function
    var modalInstanceMock;
    //define app module beforeeach test(it)
    beforeEach(module('app'));
    //define controller and pass its dependency beforeeach test (it)
    beforeEach(inject(function ($controller, $rootScope) {
        //fill scope and modalinstancemock
        scope = $rootScope.$new();
        modalInstanceMock = {
            close: function (result) {
            }
        };
        //define target controller 
        var ctrl = $controller('AddNewForcedOvertimectr', {
            $scope: scope, $modalInstance: modalInstanceMock
        });
    }));
    //Dummy Test just for make sure that configuration done right 
    //Devloper have to delete it 
    it('dummyTest', function () {
        expect(1).toEqual(1);
    });





});