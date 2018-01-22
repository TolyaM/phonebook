var tokenFactory = function ($http, $httpParamSerializer, store, $location) {
    return {
        concatToken: function(url) {
            if(!store.get('access_token')){
                    $location.path('/login');
                }
            else
                return url + '?access_token='+ store.get('access_token');
        },
    };
};

tokenFactory.$inject = ['$http', '$httpParamSerializer', 'store', '$location'];

export default tokenFactory;