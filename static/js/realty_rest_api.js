mod.factory('RealtyRestApi', function ($http) {
    function all() {
        return $http.get('/images/');
    };
    function get(id) {
        return $http.get('/images/' + id + '/');
    };
    return {
        all: all,
        get: get
    };
});