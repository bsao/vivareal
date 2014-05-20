var mod = angular.module('realty', []);

mod.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
});


function MyCtrl($scope, RealtyRestApi) {
    $scope.realties = []

    $scope.select = function (id) {
        console.log(id)
        RealtyRestApi.get(id).success(function (data) {
            $scope.selected_realty = data;
        });
    };

    $scope.load = function () {
        RealtyRestApi.all().success(function (data) {
            $scope.realties = data;
        });
    };
}
