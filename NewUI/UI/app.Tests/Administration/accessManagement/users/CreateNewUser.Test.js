/// <reference path="../../../../app/Administration/accessManagement/users/CreateNewUser.js" />

/// <reference path="../../../../app/Services/OrganizationUnitService.js" />
/// <reference path="../../../../Scripts/bsDuallistbox.js" />


describe('Story[9368] : Testing CreateNewUser Controller', function () {
    //initialize Angular
    //define scope variable to hold cuurent controller scope
    var scope;
    //define app module beforeeach test(it)
    beforeEach(module('app'));
    //define controller and pass its dependency beforeeach test (it)
    beforeEach(inject(function ($controller, $rootScope, $q) {
        scope = $rootScope.$new();
        //define target controller 
        var ctrl = $controller('CreateNewUser', { $scope: scope });

    }));
    //Dummy Test just for make sure that configuration done right 
    //Devloper have to delete it 
    it('dummyTest', function () {
        expect(1).toEqual(1);
    });

});



