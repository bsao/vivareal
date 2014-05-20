describe('Testing a controller', function () {
    var $scope, ctrl, $timeout;
    var RealtyRestApi;
    beforeEach(function () {
        RealtyRestApi = {
            all: function () {
            },
            get: function (id) {
            }
        };
        module('realty');
        inject(function ($rootScope, $controller, $q, _$timeout_) {
            $scope = $rootScope.$new();
            spyOn(RealtyRestApi, 'all');
            spyOn(RealtyRestApi, 'get');
            RealtyRestApi.all.andReturn({
                success: function () {
                }
            });
            RealtyRestApi.get.andReturn({
                success: function () {
                }
            });
            $timeout = _$timeout_;
            ctrl = $controller('MyCtrl', {
                $scope: $scope,
                RealtyRestApi: RealtyRestApi
            });
        });
    });

    it('should start with realties empty', function () {
        expect($scope.realties).toEqual([]);
        expect($scope.selected_realty).toEqual(undefined);
    });

    it('should load all images', function () {
        $scope.load();
        expect(RealtyRestApi.all).toHaveBeenCalled();
    });

    it('should retrive one image', function () {
        $scope.select(4);
        expect(RealtyRestApi.get).toHaveBeenCalled();
    });

});