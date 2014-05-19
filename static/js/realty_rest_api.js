mod.factory('RealtyRestApi', function ($http) {
    function all() {
        return $http.get('/images/');
    };

    return {
        all: all
    };
});