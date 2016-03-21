

app.directive('makeHeightEqual', function () {

    return {
        link: function ($scope, iElm, iAttrs) {

            iAttrs.makeHeightEqual = iAttrs.makeHeightEqual.split(',');



            var lastHeight = $(iAttrs.makeHeightEqual[1]).height();

            var interval = setInterval(function () {
               

                // if ($(iAttrs.makeHeightEqual[1]).height() == lastHeight)
                //     return


                lastHeight = $(iAttrs.makeHeightEqual[1]).height();
                $(iAttrs.makeHeightEqual[0]).height($(iAttrs.makeHeightEqual[1]).height() - parseFloat(iAttrs.makeHeightEqual[2]));

            }, 100)

            $scope.$on('$destroy', function () {

                clearInterval(interval);

            })
            // })



        }
    };
});


app.directive('makeHeightEqualTest', function () {

    return {
        link: function ($scope, iElm, iAttrs) {

            iAttrs.makeHeightEqualTest = iAttrs.makeHeightEqualTest.split(',');



            var lastHeight = $(iAttrs.makeHeightEqualTest[1]).height();

            var interval = setInterval(function () {
               

                if ($(iAttrs.makeHeightEqualTest[1]).height() == lastHeight)
                    return


                lastHeight = $(iAttrs.makeHeightEqualTest[1]).height();
                $(iAttrs.makeHeightEqualTest[0]).height($(iAttrs.makeHeightEqualTest[1]).height() - parseFloat(iAttrs.makeHeightEqualTest[2]));

            }, 100)

            $scope.$on('$destroy', function () {

                clearInterval(interval);

            })
            // })



        }
    };
});