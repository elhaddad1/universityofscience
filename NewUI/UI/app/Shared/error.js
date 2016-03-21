app.controller('errorCtrl',['$scope','$stateParams',function($scope,$stateParams){


$scope.unauthorized=$stateParams.unauthorized=="unauthorized";


}])