import angular from 'angular';
import css from './home.less';

module.exports = angular.module('states.home', [])
    .controller('HomeController', require('./home_controller'))
    .name;
