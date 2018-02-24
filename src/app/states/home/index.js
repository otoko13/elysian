import angular from 'angular';

module.exports = angular.module('states.home', [])
    .controller('HomeController', require('./home_controller'))
    .name;
