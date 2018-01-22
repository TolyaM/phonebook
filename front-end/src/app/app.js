import angular from 'angular'
import router from 'angular-ui-router'
import bootstrap from 'angular-ui-bootstrap'
import routefile from './routes'
import login from './components/login'

import '../assets/styles/styles.css'
import '../assets/styles/index.scss'
import '../assets/styles/login.css'

import users from './components/users'
import news from './components/news'
import newsedit from './components/newsedit/index'
import user from './components/user'
import newsadd from './components/newsadd'

import loginService from './services/loginService'
import usersService from './services/usersService'
import addressesService from './services/addressesService'
import newsService from './services/newsService'
import projectsService from './services/projectsService'
import trigger from '../app/components/trigger'
import tokenService from './services/tokenService'

import storage from 'angular-storage'
import route from 'angular-route'
import cookie from 'angular-cookies'
import resource from 'angular-resource'
import jwt from 'angular-jwt'
import pagination from 'angular-utils-pagination'
import scroll from 'ng-infinite-scroll'

import 'font-awesome/css/font-awesome.css'
import 'textangular/dist/textAngular.css'
import 'textangular/dist/textAngular-sanitize.min'

export default angular.module('app', [
    bootstrap,
    require('textAngular'),
    router,
    storage,
    route,
    cookie,
    resource,
    jwt,
    pagination,
    scroll
])
    .config(routefile)
    .component('login', login)
    .component('users', users)
    .component('news', news)
    .component('newsedit', newsedit)
    .component('user', user)
    .component('newsadd', newsadd)
    .factory('loginService', loginService)
    .factory('usersService', usersService)
    .factory('addressesService', addressesService)
    .factory('newsService', newsService)
    .factory('projectsService', projectsService)
    .factory('tokenService',tokenService)
    .factory('trigger', trigger)
    .constant('API_BASE','http://localhost:8850/uaa')
    .constant('API_USERS','http://localhost:8950/users')
    .constant('API_NEWS', 'http://localhost:8950/news')
    .constant('API_PROJECTS', 'http://localhost:8950/projects')
    .constant('API_ADDRESSES', 'http://localhost:8950/addresses')
 