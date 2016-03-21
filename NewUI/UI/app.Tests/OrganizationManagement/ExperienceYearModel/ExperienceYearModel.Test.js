
/// <reference path="../../../app/OrganizationManagement/ExperienceYearModel/ExperienceYearModel.js" />
/// <reference path="../../../app/Services/EmployeeList.js" />


describe('Story[9064] : Testing ExperienceYearModel Controller', function () {
    var scope;
    var modalInstanceMock;
    //initialize Angular
    beforeEach(module('app'));

    beforeEach(inject(function ($controller, $rootScope, $q) {
        scope = $rootScope.$new();
        modalInstanceMock = {
            close: function (result) {

            }
        };
        var ctrl = $controller('ExperienceYearCtrl', { $scope: scope,$modalInstance: modalInstanceMock ,
            emp: { empID: 12 }
        });

    }));

    it('dummytest', function () {
        expect(scope.empID).toBe(12);
    });

    it('FormatDecimalNormalDecimalNumber', function () {
        expect(scope.FormatDecimal(2.5)).toBe('02.50');
    });
  
    it('FormatDecimalbiggerthan10', function () {
        expect(scope.FormatDecimal(20.5)).toBe('20.50');
    });

    it('FormatDecimalNormalIntNum', function () {
        expect(scope.FormatDecimal(2)).toBe('02.00');
    });

    it('FormatDecimal0Return0', function () {
        expect(scope.FormatDecimal(0)).toBe('00.00');
    });

});