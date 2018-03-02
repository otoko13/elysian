import _ from 'lodash';
import angular from 'angular';

// libraries
import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';

// CSS
import css from '../public/less/app.less';

// templates
import ourStoryTemplate from './states/our_story/our_story.html';
import homeTemplate from './states/home/home.html';
import portfolioTemplate from './states/portfolio/portfolio.html';
import pressTemplate from './states/press/press.html';
import servicesTemplate from './states/services/services.html';
import blogTemplate from './states/blog/blog.html';
import contactUsTemplate from './states/contact_us/contact_us.html';

/* eslint-disable */
const libDependencies = [
    uiRouter,
    uiBootstrap,
];

const appDependencies = [
    require('./components/click_outside'),
    require('./components/fix_and_shrink'),
    require('./components/main_controller'),
    require('./components/side_menu'),
    require('./states/our_story'),
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
    $stateProvider
        .state('home', {
            url: '/',
            controller: 'HomeController',
            templateUrl: homeTemplate,
        })
        .state('our-story', {
            url: '/our-story',
            templateUrl: ourStoryTemplate,
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
