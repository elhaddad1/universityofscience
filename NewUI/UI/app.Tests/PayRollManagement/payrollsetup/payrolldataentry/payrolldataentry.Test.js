
/// <reference path="../../../../app/Services/PayrollItemService.js" />
/// <reference path="../../../../app/Services/MonthPayrollService.js" />
/// <reference path="../../../../app/Services/CommonService.js" />
/// <reference path="../../../../app/Services/ClosingMonthPayrollService.js" />
/// <reference path="../../../../app/Services/OrganizationUnitService.js" />

/// <reference path="../../../../app/PayRollManagement/payrollsetup/payrolldataentry/payrolldataentry.js" />
/// <reference path="../../../../app/Services/PayrollItemDataEntryService.js" />




describe('Story[9073] : Testing payrolldataentry Controller', function () {
    var scope;
    var q;

    //initialize Angular
    beforeEach(module('app'));

    beforeEach(inject(function ($controller, $rootScope) {
        
        scope = $rootScope.$new();
        
        //_PayrollItemService = PayrollItemService;
        //_MonthPayrollService = MonthPayrollService;
        //_OrganizationUnitService = OrganizationUnitService;
        //_CommonService = CommonService;
       // this.PayrollItemService = PayrollItemService;
        scope.noData =  function(source, haveHeader) {
            
        }

        scope.fixFiltrationDelete = function (scope, gridName, fn) {
            if (gridName.indexOf('#') != -1) {
                $scope.fixFiltrationDeleteById(scope, gridName)
                return
            }

            scope.$watch('gridRowsCount', function (newValue, oldValue, scope) {
                if (getProp(scope, gridName)) {
                    try {
                        getProp(scope, gridName).dataSource.read();
                        fn();

                    } catch (e) { }
                }
            });
            //END

        }
        var ctrl = $controller('payrolldataentry', { $scope: scope });
      
    }));
 
   
    //it('LoadData', function () {
        
    //    q.all([
    //            _MonthPayrollService.GetMonthDataOnly()]).then(function (data) {
    //                //  debugger;
    //                //done();
    //                $scope.MonthData = data[0].data;
    //                expect(1).toEqual(0);
    //            });
    ////    scope.$apply();
    //            });

    it('CheckNotNullData', function () {

        
        expect(true).toBe(scope.ValidateForm(1, 5,6,70));
                });

        

});