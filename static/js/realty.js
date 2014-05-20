var mod = angular.module('realty', []);

mod.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{$');
  $interpolateProvider.endSymbol('$}');
});


function MyCtrl($scope,  RealtyRestApi) {
    $scope.realties = []
    $scope.load = function () {
        RealtyRestApi.all().success(function (data) {
            $scope.realties = data;
        });
    };
}
