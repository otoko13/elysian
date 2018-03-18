import _ from 'lodash';
import angular from 'angular';
import 'jquery';

// libraries
import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';
import angularMasonry from 'angular-masonry';

// CSS
import '../public/less/app.less';

/* eslint-disable */
// PLUGINS
// import '../plugins/unitegallery/css/unite-gallery.css';
// import '../plugins/unitegallery/themes/default/ug-theme-default.css';
// require('../../node_modules/ev-emitter/ev-emitter');
// require('../../node_modules/desandro-matches-selector/matches-selector');
// require('../../node_modules/fizzy-ui-utils/utils');
// require('../../node_modules/get-size/get-size');
// require('../../node_modules/outlayer/item');
// require('../../node_modules/outlayer/outlayer');
// require('../../node_modules/masonry-layout/masonry');
// require('../../node_modules/imagesloaded/imagesloaded');

require('jquery-bridget/jquery-bridget');
const masonry = require('masonry-layout');
const imagesloaded = require('../../node_modules/imagesloaded');
// make Masonry a jQuery plugin
$.bridget( 'masonry', masonry, $ );
$.bridget( 'imagesLoaded', imagesloaded, $ );
// Now you can use $('...').masonry(...)

// templates
import ourStoryTemplate from './states/our_story/our_story.html';
import homeTemplate from './states/home/home.html';
import portfolioTemplate from './states/portfolio/portfolio.html';
import pressTemplate from './states/press/press.html';
import servicesTemplate from './states/services/services.html';
import blogTemplate from './states/blog/blog.html';
import contactUsTemplate from './states/contact_us/contact_us.html';

const libDependencies = [
    uiRouter,
    uiBootstrap,
    angularMasonry,
];

const appDependencies = [
    require('./components/click_outside'),
    require('./components/on_scroll_down'),
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
            controller: 'PortfolioController',
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
