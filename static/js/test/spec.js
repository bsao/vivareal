describe('Testing a controller', function () {
    var $scope, ctrl, $timeout;
    var RealtyRestApi;
    beforeEach(function () {
        RealtyRestApi = jasmine.createSpyObj('RealtyRestApi', ['all', 'get']);
        module('realty');
        inject(function ($rootScope, $controller, $q, _$timeout_) {
            $scope = $rootScope.$new();
            RealtyRestApi.all.andReturn([
                {"id": 2, "image": "static/photos/cha.jpg", "description": "descripiton of image"},
                {"id": 3, "image": "static/photos/2.jpeg", "description": "Imovel 2"},
                {"id": 4, "image": "static/photos/7.jpeg", "description": "Imovel 3"}
            ]);

            RealtyRestApi.get.andReturn({
                "id": 4, "image": "static/photos/7.jpeg", "description": "Imovel 3"
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
        expect($scope.realties).toEqual([
            {"id": 2, "image": "static/photos/cha.jpg", "description": "descripiton of image"},
            {"id": 3, "image": "static/photos/2.jpeg", "description": "Imovel 2"},
            {"id": 4, "image": "static/photos/7.jpeg", "description": "Imovel 3"}
        ]);
    });

    it('should retrive one image', function () {
        $scope.select(4);
        expect(RealtyRestApi.get).toHaveBeenCalled();
        expect($scope.selected_realty).toEqual({
            "id": 4, "image": "static/photos/7.jpeg", "description": "Imovel 3"
        });
    });

});