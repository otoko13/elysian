import angular from 'angular';

module.exports = angular.module('components.side_menu', [])
    .component('sideMenu', require('./side_menu_component'))
    .controller('SideMenuComponentController', require('./side_menu_component_controller'))
    .name;
