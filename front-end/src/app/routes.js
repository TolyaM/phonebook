routes.$inject = ['$stateProvider','$locationProvider', '$urlRouterProvider','$httpProvider'];
export default function routes($stateProvider, $locationProvider,  $urlRouterProvider, $httpProvider) {
    $stateProvider
        .state({
            name: 'login',
            url: '/login',
            template: '<login>',
            controller: ['$scope', 'API_BASE', '$http', '$location', 'store',
                function ($scope, API_BASE, $http, $location, store, ) {
                    if(store.get('access_token') !== null){
                        $location.path('/news');
                    }
                    else{
                        $location.path('/login');
                    }
                }
            ]
        })

        .state({
            name:'users',
            url:'/users',
            template: '<users>',
            auth: true
        })

        .state({
            name:'user',
            url:'/user/:userId',
            template: '<user>',
            auth: true
        })

        .state('news',{
            name:'news/:newsId',
            url:'/news',
            template: '<news>',
            auth: true
        })

        .state('newsadd',{
            name:'newsadd',
            url:'/newsadd',
            template: '<newsadd>',
            auth: true
        })

        .state({
            name:'newsedit',
            url:'/newsedit/:newseditId',
            template: '<newsedit>',
            auth: true
        })

        .state({
            name:'logout',
            template: ' ',
            controller: ['$scope', 'API_BASE', '$http', '$location', 'store', '$rootScope',
                function ($scope, API_BASE, $http, $location, store, $rootScope) {
                    store.remove('access_token');
                    store.remove('employee');
                    store.remove('current_data');
                    $location.path('/login');
                }
            ]
        });

    $urlRouterProvider.otherwise('/login');

    $urlRouterProvider
        .when('/', ['$state', function ($state) {
            $state.go('login');
        }]).otherwise('/login');


/*    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });*/
}