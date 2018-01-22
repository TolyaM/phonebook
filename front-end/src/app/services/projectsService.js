var projectsFactory = function ($http, $httpParamSerializer, API_PROJECTS, store, tokenService) {
    return {
        findAll: function() {
            return $http.get(tokenService.concatToken(API_PROJECTS + '/api/projects'));
        },
        findByID: function (Id) {
            return $http.get(API_PROJECTS + '/api/project?userId=' + Id +'&access_token=' + store.get('access_token'));
        },
        updateProject: function (id, project) {
            return $http.put(tokenService.concatToken(API_PROJECTS + '/api/project/' + id),project);
        },
        saveProject: function (project) {
            return $http.post(tokenService.concatToken(API_PROJECTS + '/api/project'), project);
        },
        deleteProject: function (id) {
            return $http.delete(tokenService.concatToken(API_PROJECTS + '/api/project/' + id));
        }
    };
}
projectsFactory.$inject = ['$http', '$httpParamSerializer', 'API_PROJECTS', 'store', 'tokenService'];

export default projectsFactory
