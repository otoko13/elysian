import _ from 'lodash';
import angular from 'angular';

// CSS
import '../public/less/app.less';

// templates
import homeTemplate from './states/home/home.html';

// libraries
import '../../node_modules/angular-ui-bootstrap';
import '../../node_modules/angular-ui-router';

/* eslint-disable */
const libDependencies = [
    'ui.router',
    'ui.bootstrap',
];

const appDependencies = [
    require('./components/main_controller'),
    require('./states/home'),
];

const dependencies = _.concat([], libDependencies, appDependencies);
const application = angular.module('elysian', dependencies);

application.config(['$urlRouterProvider', function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}]);

application.config(['$stateProvider', '$locationProvider', function ($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('');
    $stateProvider
        .state('home', {
            url: '/',
            controller: 'HomeController',
            templateUrl: homeTemplate,
        });
}]);

application.run(($rootScope) => {
    $rootScope.applicationReady = true;
});

angular.element(document).ready(() => {
    angular.bootstrap(document, ['elysian']);
});
