var newsFactory = function ($http, $httpParamSerializer, API_NEWS, store, tokenService) {
    return {
        findAll: function() {
            return $http.get(tokenService.concatToken(API_NEWS + '/api/news'));
        },
        findImportant:function () {
            return $http.get(tokenService.concatToken(API_NEWS + "/api/news/important"));
        },
        findDaily:function () {
            return $http.get(tokenService.concatToken(API_NEWS + "/api/news/daily"));
        },
        updateNews: function (id, news) {
            return $http.put(tokenService.concatToken(API_NEWS + '/api/news/' + id), news);
        },
        deleteNews: function (id) {
            return $http.delete(tokenService.concatToken(API_NEWS + '/api/news/' + id));
        },
        saveNews: function (news) {
            return $http.post(tokenService.concatToken(API_NEWS + '/api/news'), news);
        },
        findByID: function (id) {
            return $http.get(tokenService.concatToken(API_NEWS + '/api/news/' + id));
        }
    };
};
newsFactory.$inject = ['$http', '$httpParamSerializer', 'API_NEWS', 'store', 'tokenService'];

export default newsFactory