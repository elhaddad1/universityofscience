'use strict';

/* Controllers */

angular.module('app')
    .controller('AppCtrl', ['$scope', '$translate', '$localStorage', '$window', '$rootScope', '$q', '$http', '$compile','kendoTranslate',
        function($scope, $translate, $localStorage, $window, $rootScope, $q, $http, $compile,kendoTranslate) {
            // add 'ie' classes to html
            var isIE = !!navigator.userAgent.match(/MSIE/i);
            isIE && angular.element($window.document.body).addClass('ie');
            isSmartDevice($window) && angular.element($window.document.body).addClass('smart');

            // config
            $scope.app = {
                name: 'Andalusia HMIS',
                version: 'Andalusia HMIS 1.0',
                // for chart colors
                color: {
                    primary: '#7266ba',
                    info: '#23b7e5',
                    success: '#27c24c',
                    warning: '#fad733',
                    danger: '#f05050',
                    light: '#e8eff0',
                    dark: '#3a3f51',
                    black: '#1c2b36'
                },
                settings: {


                    themeID: 7,
                    navbarHeaderColor: 'bg-black',
                    navbarCollapseColor: 'bg-info',
                    asideColor: 'bg-white b-r',

                    headerFixed: true,
                    asideFixed: false,
                    asideFolded: false,
                    asideDock: false,
                    container: false
                }
            }

            // save settings to local storage
            if (angular.isDefined($localStorage.settings)) {
                $scope.app.settings = $localStorage.settings;
            } else {
                $localStorage.settings = $scope.app.settings;
            }
            $scope.$watch('app.settings', function() {
                if ($scope.app.settings.asideDock && $scope.app.settings.asideFixed) {
                    // aside dock and fixed must set the header fixed.
                    $scope.app.settings.headerFixed = true;
                }
                // save to local storage
                $localStorage.settings = $scope.app.settings;
            }, true);

            // angular translate
            $scope.lang = {
                isopen: false
            };

            $scope.langs = {
                en: 'English',
                ar: 'Arabic',

            };



            $scope.selectLang = $scope.langs[$translate.proposedLanguage()] || "English";

            //if ($scope.selectLang == "Arabic") {
            //    kendo.culture("ar-EG");
            //    moment.locale('ar');
            //} else {
            //    kendo.culture("en-US");
            //    moment.locale('en');
            //}

            $scope.setLang = function(langKey, $event) {
                // set the current lang

                $scope.selectLang = $scope.langs[langKey];
                // You can change the language during runtime
                $translate.use(langKey);
                $scope.lang.isopen = !$scope.lang.isopen;


                $scope.app.settings.asideFixed = false;
                $scope.app.settings.asideDock = false;
                $scope.app.settings.asideFolded = false;

                setInterval(function() {

                    if ($scope.app.settings == $localStorage.settings)
                        window.location.reload();

                }, 100);
                //to refresh after changing lang to fix kendo label translation problem
                //$scope.$state.reload();
            };

            $rootScope.$on('loading:progress', function() {
                // show loading gif
                $rootScope.showloading = true;
                $scope.showloading = true;

                //to fix bug loading window appear under the tooltip in a case
                $('.tooltip').hide();
                //END

            });

            $rootScope.$on('loading:finish', function() {
                // hide loading gif
                $rootScope.showloading = false;
                $scope.showloading = false;
            });



            $rootScope.$on('$stateChangeStart', function() {
                //to fix issue (showloading hold appearring when navigating from page with error in service)
                $scope.showloading = false;
                kendo.culture("en-US");
                moment.locale('en');
            });


            //  $rootScope.$on('$stateChangeStart',
            //function (event, toState, toParams, fromState, fromParams) {

            //  //to fix issue (showloading hold appearring when navigating from page with error in service)
            //  $scope.showloading=false;

            //    //Any condition I need
            //  //  if (toState.name == 'app.TimeManagement.manualAttendanceAdjustClock') {

            //        if ($rootScope.loaded!=true) {

            //            event.preventDefault();
            //            console.log(toState.name);
            //            //after geting configuration put that in the promise 
            //            //  $rootScope.loaded = true;
            //            $q.all([GetConfigurations()]).then(function (data) {
            //                $scope.Configurations = data;
            //                console.log(data);
            //                $rootScope.loaded = true;
            //                $scope.$state.go(toState.name);


            //            });

            //            //END

            //        }
            //        else {

            //        }
            //   // }
            //})


            //to deal with displayName like '{{"MP.ggg"|translate}}' ==>> "MP.ggg"
            $scope.cutTranslateFilter = function(input) {
                    try {
                        return input.substring(3, input.length - 13)

                    } catch (e) {}

                }
                //translate a key
            $scope.translate = function(input) {

                try {

                    return $translate.instant(input)
                } catch (e) {}
            }
window.TRANSLATE=$scope.translate;

            $scope.compile = function(element, myscope) {

                $compile(element)(myscope);
            }



            $scope.pushUrl = function(item) {
                if (item.config.templateUrl) {
                    $scope.urls.push({
                        name: item.config.data.displayName,
                        url: item.name
                    })

                    genie({
                        magicWords: item.config.data.displayName,
                        action: function () {
                            $scope.$state.go(item.name)
                        }
                    });

                }
            }

            $scope.urls = [];

            $scope.systemModulesUrls = [OrganizationManagementRoute().OrganizationManagementRoutes(), AdministrationRoute().AdministrationRoutes(), payRollManagementRoute().payRollManagementRoutes(), timeManagementRoute().timeManagementRoutes()];
            $scope.systemModulesUrls.forEach(function(urlCollection) {

                urlCollection.forEach(function(u) {
                    $scope.pushUrl(u);

                });

            });

            // $rootScope.$on('$translatePartialLoaderStructureChanged',function(w,partName){
            //     if(partName=="Shared"){

            //     }
            // })


            $scope.expandAllNode = function(search) {
                // var el=angular.element('.navi ul.nav li')
                // if(search){

                // el.addClass('active');

                // }else{
                // el.removeClass('active');


                // }
            }

            function isSmartDevice($window) {
                // Adapted from http://www.detectmobilebrowsers.com
                var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
                // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
                return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
            }

            //$q.all([GetConfigurations()]).then(function (data) {
            //    $scope.Configurations = data;
            //    console.log(data);
            //    $rootScope.loaded = true;

            //});

            function GetConfigurations() {
                var service = clientAgentService().getCommonSeviceData("GetConfigurations");

                return $http.get(clientAgentService().baseUrl + service.URL);
            }


            $rootScope.noData = function(source, haveHeader) {
                if (!haveHeader) {
                    return '<div class="dropdown-header no-data text-center" ng-if="' + source + '">' +
                        '<div class="fs16" > ' + $translate.instant('MP.nodata') + '</div>' +
                        '</div>'
                } else {

                    return '<div class="fs16" ng-if="' + source + '"> ' + $translate.instant('MP.nodata') + '</div>'
                }
            }


//             $rootScope.noDataAndSelectTemplate=function(source, haveHeader,selectAllMethodName,unselectMethodName){


// return '<div class="dropdown-header no-data text-center" >' +

// ' <button class="btn m-b-xs btn-sm btn-primary btn-addon" ng-click ="'+selectAllMethodName+'()"><i class="fa fa-check"></i>'+$translate.instant("MP.SelectAll") +' </button>  ' +
//                         '<button class="btn m-b-xs btn-sm btn-info btn-addon" ng-click ="'+unselectMethodName+'()"><i class="fa fa-times"></i>'+$translate.instant("MP.UnSelectAll") +' </button>' +
//                         '<div class="fs16 fff" ng-show="' + source + '" > ' + $translate.instant('MP.nodata') + '</div>' +
//                         '</div>'
// }



            $scope.selectUnSelectTemplate = function(selectAllMethodName,unselectMethodName) {


                return  '<div class="dropdown-header select-unselect text-center">' +
                        ' <button class="btn m-b-xs btn-sm btn-primary btn-addon" ng-click ="'+selectAllMethodName+'()"><i class="fa fa-check"></i>'+$translate.instant("MP.SelectAll") +' </button>  ' +
                        '<button class="btn m-b-xs btn-sm btn-info btn-addon" ng-click ="'+unselectMethodName+'()"><i class="fa fa-times"></i>'+$translate.instant("MP.UnSelectAll") +' </button>' +
                        '</div>'

            }

          //compile header on opening
          // var originalOpen = kendo.ui.MultiSelect.fn.open;

          // kendo.ui.MultiSelect.fn.open = function() {
          //     // setTimeout(function(){


          //     $scope.compile(angular.element('div.k-animation-container > div > div.dropdown-header.select-unselect.text-center'),angular.element('.wrapper-md').scope());
          //     $scope.$apply()
          //     console.log(angular.element('.wrapper-md').scope().SelectAll)
                
          //     // },100);

          //      originalOpen.apply(this, arguments);
          // }


            $rootScope.putExcelBottom = function(gridSelector) {
                $(gridSelector).find(".k-grid-toolbar").insertAfter($(gridSelector + " .k-grid-pager"));
            }

            $scope.isApplying = function(scope) {

                return scope.$root.$$phase == '$apply' || scope.$root.$$phase == '$digest'
            }


            //to remove classes of all elements with that class
            $scope.removeAllClass = function(selector) {

                $('.' + selector).removeClass(selector);

            }


            //navigate multiple calendar directive to current month
            $scope.navigateToCurrentMonth = function(selector) {
                var s = angular.element(selector).children().first().scope();
                s.month = moment(new Date());
                s.generate();
                //s.$apply()
            }

            $(document).ajaxComplete(function(event, xhr, sett) {
                var t = xhr.getResponseHeader('total');
                if (t) {
                    $scope.gridRowsCount = parseInt(t);
                    $scope.$apply();
                }
            });


            $scope.showloadingOnExcelStart = function() {



                $(document).on('click', function(e) {

                    if ($(e.target).hasClass('k-grid-excel') && $(e.target).hasClass('k-button')) {
                        var myScope = angular.element(e.target).scope();
                        myScope.showloading = true;
                        myScope.$apply();
                    }
                })


            }


            $scope.hideProgressOnError = function(scope, toaster, booleansTohide) {


                scope.$on('loading:error', function() {

                    scope.showProgress = false;
                    scope.showloading = false;
                    toaster.pop('error', '', $translate.instant('MP.ERROR'));

                    if (booleansTohide) {
                        try {
                            angular.forEach(booleansTohide, function(value, key) {
                                scope[value] = false;
                            });
                        } catch (e) {}
                    }

                });


            }


            $(document).keydown(function(e) {

                if (e.keyCode == 13 && $(e.target).parents('.k-grid').length > 0) {
                    e.preventDefault();

                }

            })


            $scope.Utils = {
                empty: '<a tabindex="-1" class="k-link" style="color:\\#ccc;cursor:no-drop"  >#=data.value #</a>'

            }


            $scope.fixFiltrationDelete = function(scope, gridName,fn) {
                if(gridName.indexOf('#')!=-1){
                    $scope.fixFiltrationDeleteById(scope,gridName)
                    return
                }

                scope.$watch('gridRowsCount', function(newValue, oldValue, scope) {
                    if (getProp(scope, gridName)) {
                        try {
                            getProp(scope, gridName).dataSource.read();
                            fn();

                        } catch (e) {}
                    }
                });
                //END

            }

            $scope.fixFiltrationDeleteById = function(scope, gridId) {

                scope.$watch('gridRowsCount', function(newValue, oldValue, scope) {


                    try {

                        angular.element(gridId).data('kendoGrid').dataSource.read();


                    } catch (e){}


                });

                //END

            }

            kendoTranslate()

            //varaible to store Now value to use it on all system 
            $scope.today=new Date();





            // $rootScope.$on('$translatePartialLoaderStructureChanged', function(){
            //     [].push.call(arguments,'------');
            //     [].forEach.call(arguments,function(item){
            //         console.log(item);
            //     })
            // });


            // $(f).parents('.k-grid').length
            // $scope.$on('loading:error', function(){

            //                   $scope.targetScope.showProgress = false;
            //                   //$scope.currentScope.$apply()
            //                    //  toaster.pop('error', '', $translate.instant('MP.ERROR'));

            // });

            // $scope.$on('$viewContentLoaded', 
            // function(event){ 


            // });


            // $rootScope.$on('$stateChangeSuccess', 
            // function(event, toState, toParams, fromState, fromParams){ 

            // $scope.targetScope=event.targetScope;

            //  })
            //to disable submit and clear buttons in reports

            // $scope.$watch('showProgress', function(newValue, oldValue, scope) {

            //     angular.element('.wrapper-md')
            // }, true);

            //E N D

            // to use it in kendo widget template as it use global context
            window.selectedLang=$rootScope.selectedLang=$scope.selectLang
            // END



            
            $scope.fixScrollOnArabic = function(gridName) {


                if ($scope.selectLang == "Arabic") {


                    var elem = $('[kendo-grid=' + gridName + '] .k-grid-content');
                    var checkScroll=setInterval(function(){
                        if(elem.scrollLeft()==0){
                            elem.scrollLeft($(elem).width())
                            clearInterval(checkScroll)
                        }
                    },100)

                }

            }
// added to rootscope to include modal popups in it
// usage ui-keypress="{13:'preventsumbit()'}"
            $rootScope.preventSumbit = function() {
                    event.preventDefault();
                    return false;
            }


//Standard Datae format for system
window.DATEFORMAT=$rootScope.DATEFORMAT = "dd-MMM-yyyy";
window.KGRIDDATEFORMAT = "{0:dd-MMM-yyyy}";


        }
    ]);


