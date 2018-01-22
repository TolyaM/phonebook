import imageProfile from '../../../assets/img/profile-picture-thumb.jpg'
import logo from '../../../assets/icons/logo.svg'
import menu from '../../../assets/icons/menu.svg'
import logout from '../../../assets/icons/logout.svg'
import close from '../../../assets/icons/close.svg'

class NewsaddCtrl {
    constructor($scope, $http, newsService, $stateParams, store, $location, trigger){
        $scope.logo = logo;
        $scope.imageProfile = imageProfile;
        $scope.menu = menu;
        $scope.logout = logout;
        $scope.employee = store.get('employee');
        $scope.close = close;
        $scope.dateCreate = new Date();
        $scope.tokenUrl = '?access_token=' + store.get('access_token');

        $scope.menutrigger = () => {
            trigger.menutrigger();
        };

        $scope.pageoverlay = () => {
            trigger.pageoverlay();
        };

        $scope.category = 'important';
        $scope.heading = '';
        $scope.text = '';
        $scope.dateCreate = '';

       $scope.saveNews = () =>{

           if (!$scope.addForm.$valid) {
               alert('Please correct errors.');
           }
           else{
               let data = (
                   JSON.stringify({
                       category: $scope.category,
                       heading: $scope.heading,
                       text: $scope.text,
                       dateCreate: $scope.dateCreate = new Date()
                   })
               );
               newsService.saveNews(data).then((data, status) => {
                   alert('The news was successfully added.');
                   $location.path('/news');
               }).catch((data,config) =>{

               });
           }
       }
    }
};


export default NewsaddCtrl;
