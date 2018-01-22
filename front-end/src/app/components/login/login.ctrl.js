import logo from '../../../assets/icons/logo.svg'

class LoginCtrl {
    constructor($scope, $http, loginService, $location, store) {
        $scope.logo = logo;

        $scope.submit = () => {
            $scope.errorMessage = false;
            if (!$scope.loginForm.$valid) {
                $scope.errorMessage = 'Please, check your login and password.';
            }
            else {
                loginService.login($scope.name, $scope.password).then(function (result, status, headers, config) {
                    // Saves token to local storage and redirects to "news" page
                    store.set('access_token', result.data.access_token);


                    loginService.user($scope.name, $scope.password).then(result => {
                        console.log('success status'+result.status);
                        store.set('current_data', result.data);

                        loginService.employee(result.data.employeeId).then(result => {
                            store.set('employee', result.data);
                            $location.path('/news');
                        })
                    });
                }).catch((result, status) => {
                    if (result.status === 401 || result.status === 400) {
                        $scope.errorMessage = 'Please, check your login and password.';
                    };
                });
            }
        };
    }
}

export default LoginCtrl;

