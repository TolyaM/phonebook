import imageProfile from '../../../assets/img/profile-picture-thumb.jpg'
import logo from '../../../assets/icons/logo.svg'
import menu from '../../../assets/icons/menu.svg'
import logout from '../../../assets/icons/logout.svg'
import close from '../../../assets/icons/close.svg'
import search from '../../../assets/icons/search.svg'
import edit from '../../../assets/icons/edit.svg'
import deletesvg from '../../../assets/icons/delete.svg'

class UsersCtrl {
    constructor($scope, $http, usersService, addressesService, $q, store, trigger) {
        $scope.logo = logo;
        $scope.imageProfile = imageProfile;
        $scope.menu = menu;
        $scope.logout = logout;
        $scope.close = close;
        $scope.edit = edit;
        $scope.deletesvg = deletesvg;
        $scope.search = search;
        $scope.employee = store.get('employee');
        $scope.searchKey = '';
        $scope.currentuser = store.get('current_data');
        $scope.tokenUrl = '?access_token=' + store.get('access_token');

        $scope.menutrigger = () => {
            trigger.menutrigger();
        };

        $scope.pageoverlay = () => {
            trigger.pageoverlay();
        };

        $q.all([usersService.findAll(),addressesService.findAll()]).then(([users, addresses]) => {
            $scope.users = users.data.map(user => {
                user.address = addresses.data.find(({ id }) => user.id === id);
                return user
            });
        })
    }
}

export default UsersCtrl;