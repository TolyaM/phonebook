import imageProfile from '../../../assets/img/profile-picture-thumb.jpg'
import logo from '../../../assets/icons/logo.svg'
import menu from '../../../assets/icons/menu.svg'
import logout from '../../../assets/icons/logout.svg'
import close from '../../../assets/icons/close.svg'
import deletesvg from '../../../assets/icons/delete.svg'
import plus from '../../../assets/icons/plus.svg'
class UserCtrl {
    constructor($scope, $http, usersService, projectsService, $window, addressesService, $stateParams, store, $location, trigger) {
        $scope.logo = logo;
        $scope.imageProfile = imageProfile;
        $scope.menu = menu;
        $scope.logout = logout;
        $scope.close = close;
        $scope.employee = store.get('employee');
        $scope.currentuser = store.get('current_data');
        $scope.tokenUrl = '?access_token=' + store.get('access_token');
        $scope.eml_add = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        $scope.deletesvg = deletesvg;
        $scope.addicon = plus;

        $scope.menutrigger = () => {
            trigger.menutrigger();
        };

        $scope.pageoverlay = () => {
            trigger.pageoverlay();
        };

        usersService.findByID($stateParams.userId).then(user =>{
            $scope.user = user.data;
        });

        projectsService.findByID($stateParams.userId).then(project =>{
            $scope.projects = project.data;
            console.log(project);   
        });

        addressesService.findByID($stateParams.userId).then(address =>{
            $scope.address = address.data;
        });

        $scope.addImage = function() {
            let f = document.getElementById('file').files[0],
                r = new FileReader();
        
            r.onloadend = function(e) {
              $scope.user.photoUrl = e.target.result;
              //send your binary data via $http or $resource or do anything else with it
            }
        
            r.readAsBinaryString(f);
        }

        $scope.readFile = function () {            
            fileReader.readAsDataUrl($scope.file, $scope)
                      .then(function(result) {
                            $scope.user.photoUrl = result;
                        });
        };

        $scope.updateUser = () =>{
            let user = (
                JSON.stringify({
                    id: $scope.user.id,
                    first_name: $scope.user.first_name,
                    last_name:$scope.user.last_name,
                    position: $scope.user.position,
                    photoUrl: $scope.user.photoUrl
                }
            ));

            let addresses = (
                JSON.stringify({
                    id: $scope.address.id,
                    email: $scope.address.email,
                    skype: $scope.address.skype,
                    phone: $scope.address.phone,
                    room: $scope.address.room,
                }
            ));

            usersService.updateUser(user).then((user, status) => {
                $window.location.reload();
            }).catch((data, config) =>  {

            });

            addressesService.updateAddress(addresses).then((addresses, status) => {
                // alert('The user was successfully updated.');
                $window.location.reload();
            }).catch((data, config) =>  {
                
            });
        }

        $scope.addProject = () => {

            let projectData = (
                JSON.stringify({
                    project_name: $scope.projects.project_name,
                    userId: $scope.user.id 
                }
            ));
            
            
            projectsService.saveProject(projectData).then((projectData, status) => {
                $window.location.reload();

            }).catch((data, config) =>  {
                 if(data.status === 400) {
                     $scope.errorMessage = 'Please fill in the form or checking the correctness of their input.';
                 }
            });
        }

        $scope.deleteProject = (index, itemId) => {
            let deleteProject = $window.confirm('Are you absolutely sure you want to delete?');

            if (deleteProject) {
                projectsService.deleteProject(itemId).then(response => {

                });
                $scope.projects.splice(index, 1);
            }
        };
    }
};

export default UserCtrl;