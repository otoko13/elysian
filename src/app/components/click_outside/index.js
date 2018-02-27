import angular from 'angular';

module.exports = angular.module('components.click_outside', [])
    .directive('clickOutside', require('./click_outside_directive'))
    .name;
