var mod = angular.module('realty', []);

function MyCtrl($scope,  RealtyRestApi) {
    $scope.realties = []
    $scope.load = function () {
        RealtyRestApi.all().success(function (data) {
            $scope.realties = data;
        });
    };
}
