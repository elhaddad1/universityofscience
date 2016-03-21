app.directive('ngConfirmationClick', ['$modal',
    function ($modal) {



        return {
            restrict: 'A',
            scope: {
                ngConfirmationClick: "&",
                ngConfirmationTriggerIf: "&",
                item: "="
            },
            link: function (scope, element, attrs) {
                var showModal = function () {
                    // trigger after accepts a function from ui to validate something

                    var ModalInstanceCtrl = function ($scope, $modalInstance) {

                    $(document).keyup(function(e) {

                        if (e.keyCode == 13 && $('.confirmationDir').length != 0) {
                            $scope.ok();
                        }

                    });
                    
                        $scope.ok = function () {
                            $modalInstance.close();
                        };

                        $scope.cancel = function () {
                            $modalInstance.dismiss('cancel');
                        };

                        $scope.yes = attrs.ngConfirmationYes || TRANSLATE("HR.confirmmsg.Yes");
                        $scope.no = attrs.ngConfirmationNo || TRANSLATE("HR.confirmmsg.No");
                        $scope.title = attrs.ngConfirmationTitle || "";
                        $scope.message = attrs.ngConfirmationMessage || "";


//added an option to make normal modal 
                        if(attrs.onlyOk!=undefined){
                            $scope.onlyOk=true;
                        }
                        //END
                    };

                    if (scope.ngConfirmationTriggerIf() != undefined && !scope.ngConfirmationTriggerIf()) {
                        scope.ngConfirmationClick({ closePopup: true });
                        return true;
                    }

                    var modalInstance = $modal.open({
                        animation: true,
                        keyboard: false,
                        backdrop: 'static',
                        templateUrl: 'app/Shared/directives/confirmationMessage.html',
                        controller: ModalInstanceCtrl,
                        size: 150,
                        resolve: {

                        }

                    });

                    modalInstance.result.then(function () {
                        var value = {};
                        if (scope.ngConfirmationTriggerIf())
                            value = { closePopup: true };

                        scope.ngConfirmationClick(value); //raise an error : $digest already in progress
                    }, function () {
                        //Modal dismissed
                    });
                };
                element.bind('click', showModal);

            }
        }
    }
]);

