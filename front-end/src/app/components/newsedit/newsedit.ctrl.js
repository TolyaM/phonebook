import imageProfile from '../../../assets/img/profile-picture-thumb.jpg'
import logo from '../../../assets/icons/logo.svg'
import menu from '../../../assets/icons/menu.svg'
import logout from '../../../assets/icons/logout.svg'
import close from '../../../assets/icons/close.svg'

class NewseditCtrl {
    constructor($scope, $http, newsService, $stateParams, store, $location, trigger){
        $scope.logo = logo;
        $scope.imageProfile = imageProfile;
        $scope.menu = menu;
        $scope.logout = logout;
        $scope.close = close;
        $scope.employee = store.get('employee');
        $scope.tokenUrl = '?access_token=' + store.get('access_token');

        $scope.menutrigger = () => {
            trigger.menutrigger();
        };

        $scope.pageoverlay = () => {
            trigger.pageoverlay();
        };


        newsService.findByID($stateParams.newseditId).then(news =>{
            $scope.news = news.data;
        });

        $scope.category = 'important';
        $scope.heading = '';
        $scope.text = '';
        $scope.dateCreate = '';

        $scope.updateNews = () =>{

            let data = (
                JSON.stringify({
                    category: $scope.news.category,
                    heading: $scope.news.heading,
                    text: $scope.news.text,
                    dateCreate: $scope.news.dateCreate = new Date()
                })
            );
            newsService.updateNews($stateParams.newseditId, data).then((data, status) => {
                $location.path('/news');
                alert('The news was successfully updated.');
            }).catch = () =>  {
                $location.path('/news');
            };
        }
    }
};


export default NewseditCtrl;
