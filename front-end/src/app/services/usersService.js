var usersFactory = function ($http, $httpParamSerializer, API_USERS, store, tokenService) {
    return {
        findAll: function() {
            return $http.get(tokenService.concatToken(API_USERS + '/api/users'));
        },
        findByID: function (id) {
            return $http.get(tokenService.concatToken(API_USERS + '/api/user/' + id));
        },
        updateUser: function (user) {
            return $http.put(tokenService.concatToken(API_USERS + '/api/user'), user);
        }
    };
};

usersFactory.$inject = ['$http', '$httpParamSerializer', 'API_USERS', 'store', 'tokenService'];

export default usersFactory