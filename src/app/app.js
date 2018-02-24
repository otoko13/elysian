import _ from 'lodash';
import angular from 'angular';

// CSS
import '../public/less/app.less';

// templates
import aboutUsTemplate from './states/about_us/about_us.html';
import homeTemplate from './states/home/home.html';
import portfolioTemplate from './states/portfolio/portfolio.html';
import pressTemplate from './states/press/press.html';
import servicesTemplate from './states/services/services.html';
import blogTemplate from './states/blog/blog.html';
import contactUsTemplate from './states/contact_us/contact_us.html';

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
    require('./states/about_us'),
    require('./states/blog'),
    require('./states/contact_us'),
    require('./states/home'),
    require('./states/portfolio'),
    require('./states/press'),
    require('./states/services'),
];

const dependencies = _.concat([], libDependencies, appDependencies);
const application = angular.module('elysian', dependencies);

application.config(['$urlRouterProvider', function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}]);

application.config(['$stateProvider', function ($stateProvider) {
    // $locationProvider.html5Mode(true).hashPrefix('');
    $stateProvider
        .state('home', {
            url: '/',
            controller: 'HomeController',
            templateUrl: homeTemplate,
        })
        .state('about-us', {
            url: '/about-us',
            templateUrl: aboutUsTemplate,
        })
        .state('services', {
            url: '/services',
            templateUrl: servicesTemplate,
        })
        .state('portfolio', {
            url: '/portfolio',
            templateUrl: portfolioTemplate,
        })
        .state('press', {
            url: '/press',
            templateUrl: pressTemplate,
        })
        .state('blog', {
            url: '/blog',
            templateUrl: blogTemplate,
        })
        .state('contact-us', {
            url: '/contact-us',
            controller: 'ContactUsController',
            templateUrl: contactUsTemplate,
        });
}]);

application.run(($rootScope) => {
    $rootScope.applicationReady = true;
});

angular.element(document).ready(() => {
    angular.bootstrap(document, ['elysian']);
});
