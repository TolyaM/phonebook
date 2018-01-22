import imageProfile from '../../../assets/img/profile-picture-thumb.jpg'
import logo from '../../../assets/icons/logo.svg'
import menu from '../../../assets/icons/menu.svg'
import logout from '../../../assets/icons/logout.svg'
import edit from '../../../assets/icons/edit.svg'
import deletesvg from '../../../assets/icons/delete.svg'
import close from '../../../assets/icons/close.svg'
import search from '../../../assets/icons/search.svg'

class NewsCtrl {
    constructor($scope, $http, newsService, store, $window, $location, trigger) {
        $scope.logo = logo;
        $scope.imageProfile = imageProfile;
        $scope.menu = menu;
        $scope.logout = logout;
        $scope.edit = edit;
        $scope.deletesvg = deletesvg;
        $scope.close = close;
        $scope.search = search;
        $scope.employee = store.get('employee');
        $scope.currentuser = store.get('current_data');
        $scope.searchKey = '';
        $scope.tokenUrl = '?access_token=' + store.get('access_token');
        $scope.expand = "";

        $scope.menutrigger = () => {
            trigger.menutrigger();
        };

        $scope.pageoverlay = () => {
            trigger.pageoverlay();
        };

        $scope.Important = () => {
            $scope.tab = 'Important';
            newsService.findImportant().then(news => {
                $scope.news = news.data;
            });
        };

        $scope.Daily = () => {
            $scope.tab = 'Daily';
            newsService.findDaily().then(news => {
                $scope.news = news.data;
            });
        };

        $scope.deleteNews = (index, newsId) => {
            let deleteUser = $window.confirm('Are you absolutely sure you want to delete?');
            
            console.log(index);
            console.log(newsId);
            
            if (deleteUser) {
                newsService.deleteNews(newsId).then(response => {

                });
                $window.location.reload();
                $scope.news.splice(index, 1);
            }
        };
        $scope.Important();
    }
}

export default NewsCtrl;
