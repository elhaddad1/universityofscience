app.directive('onFilter', function() {


    return {
        scope: {
            kendoGrid: '=',
            onFilter: '&',

        },
        link: function(scope, elem, attrs) {
            var grid;

            function checkGrid() {
                grid = getProp(scope.$parent, attrs.kendoGrid);
                if (grid) {
                    var orginalFilter = grid.dataSource.filter;
                    grid.dataSource.filter = function() {
                        if (arguments.length > 0) {

                            scope.onFilter(arguments);
                            scope.filtered = true;
                        }
                        return orginalFilter.apply(this, arguments);
                    }



                } else {
                    setTimeout(checkGrid, 100);
                }



            }



            checkGrid()

            // Filtration Fix
            scope.filtered = true;
            scope.$parent.$watch('gridRowsCount', function() {


                // var grid = scope.GridObject.GVAttend;
                // if (grid && grid.setOptions) {
                if (scope.filtered) {
                    try {

                        grid.setDataSource(grid.dataSource);
                        scope.filtered = false;
                    } catch (e) {}
                }else{
                    //addded to fix a case something affect count other than the filteration
                      try{
                         grid.dataSource.read(); 
                      }
                      catch(e){}
                }
            });



            //  END


        }
    }

})