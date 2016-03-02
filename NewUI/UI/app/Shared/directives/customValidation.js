app.directive('preventSpaces', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {

            scope.$watch(attrs.ngModel, function() {

                if (scope[attrs.ngModel] && scope[attrs.ngModel].split) {
                    scope[attrs.ngModel] = scope[attrs.ngModel].split(' ').join('');
                }
            })
        }
    };
});



app.directive('onlyDDecimal', function() {
    return {
        restrict: 'A',
        scope: {
            value: "=ngModel",
            length: "=length"
        },
        controller: function($scope) {
            $scope.$watch("value", function(newValue, oldValue) {

                // console.log($scope.value)
                if ($scope.value && $scope.value.replace) {
                    if ($scope.value.length > parseInt($scope.length) || !(/^\d*\.?\d*$/).test($scope.value)) {

                        $scope.value = oldValue;
                    }
                }
            })
        }
    };
});

app.directive('noLeadingZeros', function() {

    return {

        link: function(scope, elem, attrs) {

            elem.keyup(function() {

                var parsed = parseInt(elem.val(), 10);
                elem.val((parsed > 0) ? parsed : '')
                scope.$apply();

            })

        }
    }

})



app.directive('onlyNumeric', function() {
    //it's supposed to make the validation behaviour for normal and number input in Sync 
    //but as the time is limited we ad-hock it on each case needed
    return {
        restrict: 'A',
        scope: {
            value: "=ngModel",
            length: "=length",
            type: "=type",
            allowDecimal: '=',
            allowNegative:'=',
            max: '='
        },
        controller: function($scope) {
     $scope.$watch("value", function(newValue, oldValue) {
         if ($scope.value && $scope.value.replace) {
             if ($scope.value.replace(/[-.]/g, "").length > parseInt($scope.length) || $scope.value > parseInt($scope.max)) {
                 $scope.value = oldValue;
             }

             if ($scope.allowDecimal == true) {
                 if ($scope.allowNegative == true) {
                     $scope.value = $scope.value.match(/^-?\d*\.?\d*/)[0];
                 } else {

                     $scope.value = $scope.value.match(/\d*\.?\d*/)[0];
                 }

             } else {
                 if ($scope.allowNegative == true) {
                     $scope.value = $scope.value.replace(/[^0-9-]/g, '').replace(/(?!^)-/g, '');

                 } else {

                     $scope.value = $scope.value.replace(/\D/, "");

                 }
             }
         }
     });
 },


        link: function(scope, elem, attrs) {
             //try not to use that directive on input with type="number"
            if (attrs.type = 'number') {
                var oldValue = 0;
                elem.bind('keyup', function(e) {
                    if (elem[0].validity.badInput || elem[0].validity.rangeUnderflow) {
                        elem[0].value = oldValue;
                        scope.value = parseFloat(oldValue);
                        scope.$apply();
                    } else {
                        oldValue = elem[0].value;
                    }
                });
            }
        }
    };
});

app.directive('numeric', function() {
    return {

        link: function($scope, elem, attrs) {
            //  !! => to convert to boolean 
            $(elem).numericInput({
                allowFloat: !!attrs.allowDecimal,
                allowNegative: !!attrs.allowNegative
            });

        }


    };
})


app.factory('forceLength', function() {
    return function(input, length) {

        var stringNum = (input).toString();
        return parseFloat(stringNum.slice(0, length));
    };
});

//check if number of numbers after decimal more than 2
app.factory('moreThanTwo', function() {
    return function(input) {

        var stringNum = (input).toString();
        var PointIndex = stringNum.indexOf('.');

        if (PointIndex == -1)
            return false;

        var lengthAfterPoint = stringNum.slice(PointIndex).length;
        return lengthAfterPoint > 3;
    };
});



app.directive('onlyInteger', ['forceLength', function(forceLength) {
    return {
        restrict: 'A',
        scope: {
            value: "=ngModel",
            length: "=length",
            type: "=type"
        },
        controller: function($scope) {
            $scope.$watch("value", function(newValue, oldValue) {
                if ($scope.value) {

                    if ($scope.value.replace)
                        $scope.value = $scope.value.replace(/\D/, "");



                    $scope.value = parseInt(forceLength($scope.value, $scope.length));

                }
            });
        },
        link: function(scope, elem, attrs) {
            if (attrs.type = 'number') {
                var oldValue = 0;
                elem.bind('keyup', function(e) {
                    if (elem[0].validity.badInput) {
                        elem[0].value = oldValue;
                    } else {
                        oldValue = elem[0].value;
                    }
                    elem[0].value = parseInt(forceLength(elem[0].value, attrs.length));
                });
            }
        }
    };
}]);


// app.directive('numbersOnly', function(){
//    return {
//      require: 'ngModel',
//      link: function(scope, element, attrs, modelCtrl) {
//        modelCtrl.$parsers.push(function (inputValue) {
//         console.log(inputValue)
//         // inputValue=(inputValue).toString();
//            // this next if is necessary for when using ng-required on your input. 
//            // In such cases, when a letter is typed first, this parser will be called
//            // again, and the 2nd time, the value will be undefined
//            if (inputValue == undefined) return '' 
//            var transformedInput = inputValue.toString().replace(/(?!\.)[^0-9]*/g, ''); 
//            if (transformedInput!=inputValue) {
//               modelCtrl.$setViewValue(transformedInput);
//               modelCtrl.$render();
//            }         

//            return transformedInput;         
//        });
//      }
//    };
// });



app.directive('onlyDecimal', ['moreThanTwo', function(moreThanTwo) {
    return {
        restrict: 'A',
        link: function($scope, elem, attrs) {

        

            var oldValue = '';
            var max = parseFloat(attrs.max);
            var min = parseFloat(attrs.min);


            $scope.$watch(attrs.ngModel, function(newValue, oldValue) {

                setTimeout(function(){ff(newValue, oldValue)},angular.isDefined(min)?700:1)
            });



            function ff(newValue, oldValue) {
                if (isNaN(parseFloat(elem[0].value))&&elem[0].value.length!=0 || parseFloat(elem[0].value) > max || parseFloat(elem[0].value) < min || moreThanTwo(elem[0].value)) {
                    setProp($scope, attrs.ngModel, oldValue);
                    $scope.$apply();
                } else {;
                }


            }



        }

    };
}]);



app.directive('specialCharacter', function() {
    return {
        // restrict to an attribute type.
        restrict: 'A',

        // element must have ng-model attribute.
        require: 'ngModel',

        // scope = the parent scope
        // elem = the element the directive is on
        // attr = a dictionary of attributes on the element
        // ctrl = the controller for ngModel.
        link: function(scope, elem, attr, ctrl) {

            //get the regex flags from the regex-validate-flags="" attribute (optional)
            var flags = attr.regexValidateFlags || '';

            // create the regex obj.
            var regex = new RegExp(attr.regexValidate, flags);

            // add a parser that will process each time the value is 
            // parsed into the model when the user updates it.
            ctrl.$parsers.unshift(function(value) {
                // test and set the validity after update.
                var valid = true;
                if (value.indexOf('//') >= 0 || value.indexOf('./') >= 0 || value.indexOf('/.') >= 0 || value.indexOf('/*') >= 0 || value.indexOf('*.') >= 0 || value.indexOf('~') >= 0 || value.indexOf('\\') >= 0)
                    valid = false;
                ctrl.$setValidity('specialCharacter', valid);
                // ctrl.$setDirty();

                // if it's valid, return the value to the model, 
                // otherwise return undefined.
                return valid ? value : undefined;
            });

            // add a formatter that will process each time the value 
            // is updated on the DOM element.
            ctrl.$formatters.unshift(function(value) {
                // validate.
                var valid = true;
                if (value !== undefined && value !== null && (value.indexOf('//') >= 0 || value.indexOf('./') >= 0 || value.indexOf('/.') >= 0 || value.indexOf('/*') >= 0 || value.indexOf('*.') >= 0 || value.indexOf('~') >= 0 || value.indexOf('\\') >= 0))
                    valid = false;
                ctrl.$setValidity('specialCharacter', valid);
                // ctrl.$setDirty();

                // return the value or nothing will be written to the DOM.
                return value;
            });
        }
    };
});

app.directive('onlyPattern', function() {
    return {
        restrict: 'A',
        scope: {
            value: "=ngModel",
            length: "=length",
            pattern: "=onlyPattern"
        },
        controller: function($scope) {
            $scope.$watch("value", function(newValue, oldValue) {

                // console.log($scope.value)
                if ($scope.value && $scope.value.replace) {
                    if ($scope.value.length > parseInt($scope.length) || !($scope.pattern).test($scope.value)) {

                        $scope.value = oldValue;
                    }
                }
            })
        }
    };
});

app.directive('kNgModel', function() {
    return {
        scope: {
            value: '=kNgModel'
        },
        link: function($scope, iElm, attr, ctrl) {

            parent = $scope.$parent;

            parent.$watch(attr.kNgModel, function() {

                try {
                    if (attr.required) {
                        parent[iElm[0].form.name][attr.name].$setValidity('required', (angular.isDefined($scope.value) && $scope.value.length != 0) ? true : false);
                    }

                } catch (e) {

                }
            })
        }
    };
});



app.directive('afterDecimal', function() {
    return {

        link: function($scope, iElm, iAttrs, controller) {
            //up,down,left,right keys and ctrl;
           var allowedKeys = [38, 37, 39, 40,17];
if(iAttrs.ngModel){


            $scope.$watch(iAttrs.ngModel, function () {


                var value=getProp($scope,iAttrs.ngModel);

                if (value.toString().indexOf(".") != -1) {

                    setProp($scope, iAttrs.ngModel, iElm[0].value.slice(0, (iElm[0].value.indexOf(".")) + parseInt(iAttrs.afterDecimal) + 1));
                   // $scope.$apply();
                }

               

            });

    
}
else{


           iElm.bind('keyup', function(e) {
               // it test if the key pressed is not from the allowedkeys or ctrl then process the logic 
                if (!(allowedKeys.indexOf(e.keyCode) + 1 || e.ctrlKey) && iElm[0].value.indexOf(".") != -1){
                   iElm[0].value = iElm[0].value.slice(0, (iElm[0].value.indexOf(".")) + parseInt(iAttrs.afterDecimal) + 1);
                }

           })

    
}




        }
    };
});


app.directive('notEmptyArray', function() {

    return {

        require: '^form',
        link: function($scope, iElm, iAttrs, controller) {


            $scope.$watch(iAttrs.ngModel, function() {

                try {
                    if (iAttrs.required) {
                        //   console.log(($scope[iAttrs.ngModel] && $scope[iAttrs.ngModel].length > 0));
                        // $scope[iElm[0].form.name][iAttrs.name].$setValidity('required', ($scope[iAttrs.ngModel]&&$scope[iAttrs.ngModel].length>0) ? true : false);

                        controller[iAttrs.name].$setValidity('required', ($scope[iAttrs.ngModel] && $scope[iAttrs.ngModel].length > 0) ? true : false);
                    }

                } catch (e) {

                }
            })

        }
    };
});



app.directive('kendoDateTimePicker', [function() {
    // Runs during compile
    return {

        scope: {

            ngModel: '=',
            validateDateTime: '='
        },
        require: '^form',
        restrict: 'A',

        link: function($scope, iElm, iAttrs, form) {

            if (angular.isDefined($scope.validateDateTime)) {


                $scope.$parent.$watchGroup([iAttrs.ngModel, iAttrs.validateDateTime], function() {
                 
                    try {

                        if ($scope.validateDateTime && $scope.ngModel) {

                            form[iAttrs.name].$setValidity('validDateTime', (kendo.parseDate($scope.ngModel, "dd-MMM-yyyy hh:mm tt") instanceof Date) ? true : false);
                            form[iAttrs.name].$setDirty();


                            // var validClass = 'ng-valid-valid-date-time';
                            // var invalidClass = 'ng-invalid-valid-date-time';


                            // $('[name="' + [iAttrs.name] + '"]').each(function() {


                            //     if (!($(this).hasClass(validClass) || $(this).hasClass(invalidClass))) {


                            //         if (form[iAttrs.name].$valid) {
                            //             $(this).addClass(validClass);
                            //         } else {
                            //             $(this).addClass(invalidClass);
                            //         }

                            //     }


                            // })

                            // console.log('visible', form[iAttrs.name].$valid);

                        } else {
                             form[iAttrs.name].$setValidity('validDateTime', true);
                            // console.log('hidden');
                        }


                        //    console.log('visible and ',form[iAttrs.name].$valid);

                        // console.log('INvisible and ',form[iAttrs.name].$valid);    

                    } catch (e) {

                    }
                })

            }


        }
    };
}]);




app.directive('afterBeforeDecimal', function () {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, model) {

            var length = parseInt(attrs.afterBeforeDecimal);
            var oldValue;
            angular.element(elem).keyup(function () {
                var elem = angular.element(this);
                var valid = true;
                elem.val().split('.').forEach(function (item) {

                    if (item.length > length)
                        valid = false;



                })
                if (valid) {
                    oldValue = elem.val();
                } else {
                    elem.val(oldValue);
                }

                setProp(scope, attrs.ngModel, elem.val());
                scope.$apply();
            })

        }

    }



})
// //Removing after, before ,equals to, etc from filter menu
// app.directive('kendoGrid', function() {
//         return {

//             link: function(scope, elem, attrs) {


//                 function hideOtherAndPosition() {


//                     // $('.k-list-container:visible ul li:not([data-offset-index=2]):not([data-offset-index=4])').hide()
//                     // $('.k-animation-container').css('top', 271);
//                 }


//                 $(document).one('click', function(e) {
//                     if (e.toElement.closest('.k-dropdown-operator')) {


//                         var interval=setInterval(function() {
// console.log('executed');
//                             hideOtherAndPosition();

//                         }, 10)

//                         setTimeout(function() {
// console.log('canceled');
//                            clearInterval(interval)

//                         }, 2000)

//                     }
//                 })

//             }

//         }
//     })
//End




// app.directive('onBlurValidateNum', ['$scope', function($scope){

//     return {
//         link: function($scope, iElm, iAttrs, controller) {
//             iElm.blur(function(){

//                 console.log('blu')
//             })
//         }
//     };
// }]);




//numeric plugin for manual leave balance
;(function ($) {
    // Plugin defaults
    var defaults = {
        allowFloat: false,
        allowNegative: false
    };

    // Plugin definition
    //        allowFloat: (boolean) Allows floating point (real) numbers. If set to false only integers will be allowed. Default: false.
    //        allowNegative: (boolean) Allows negative values. If set to false only positive number input will be allowed. Default: false.
    $.fn.numericInput = function (options) {
        var settings = $.extend({}, defaults, options);
        var allowFloat = settings.allowFloat;
        var allowNegative = settings.allowNegative;

        this.keypress(function (event) {
            var inputCode = event.which;
            var currentValue = $(this).val();

            if (inputCode > 0 && (inputCode < 48 || inputCode > 57))        // Checks the if the character code is not a digit
            {
                if (allowFloat == true && inputCode == 46)        // Conditions for a period (decimal point)
                {
                    //Disallows a period before a negative
                    if (allowNegative == true && getCaret(this) == 0 && currentValue.charAt(0) == '-')
                        return false;

                    //Disallows more than one decimal point.
                    if (currentValue.match(/[.]/))
                        return false;
                }

                else if (allowNegative == true && inputCode == 45)        // Conditions for a decimal point
                {
                    if (currentValue.charAt(0) == '-')
                        return false;

                    if (getCaret(this) != 0)
                        return false;
                }

                else if (inputCode == 8)         // Allows backspace
                    return true;

                else                                                                // Disallow non-numeric
                    return false;
            }

            else if (inputCode > 0 && (inputCode >= 48 && inputCode <= 57))        // Disallows numbers before a negative.
            {
                if (allowNegative == true && currentValue.charAt(0) == '-' && getCaret(this) == 0)
                    return false;
            }
        });

        return this;
    };


    // Private function for selecting cursor position. Makes IE play nice.
    //        http://stackoverflow.com/questions/263743/how-to-get-caret-position-in-textarea
    function getCaret(element) {
        if (element.selectionStart)
            return element.selectionStart;

        else if (document.selection) //IE specific
        {
            element.focus();

            var r = document.selection.createRange();
            if (r == null)
                return 0;

            var re = element.createTextRange(),
            rc = re.duplicate();
            re.moveToBookmark(r.getBookmark());
            rc.setEndPoint('EndToStart', re);
            return rc.text.length;
        }

        return 0;
    };
}(jQuery));