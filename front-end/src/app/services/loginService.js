var loginFactory = function ($http, $httpParamSerializer, API_BASE, API_USERS, store) {
    return {
        login : function(uname, pwd) {
            var data = {
                grant_type:"password",
                username: uname,
                password: pwd,

                client_id: "clientIdPassword"
            };
            var request = {
                method: 'POST',
                url: API_BASE + '/oauth/token',
                headers: {
                    "Authorization": "Basic " + btoa("clientIdPassword:secret"),
                    "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                data: $httpParamSerializer(data)
            };
            return $http(request);
        },
        user: function (uname, pwd) {
            var request = {
                method: 'GET',
                url: API_BASE + '/user?login='+uname+'&password='+pwd
            };
            return $http(request);
        },
        employee: function (staff_id) {
            var request = {
                method: 'GET',
                url: API_USERS + '/api/user/' + staff_id +'?access_token='+ store.get('access_token')
            }
            return $http(request);
        }
    };
}
loginFactory.$inject = ['$http', '$httpParamSerializer', 'API_BASE', 'API_USERS', 'store'];

export default loginFactory