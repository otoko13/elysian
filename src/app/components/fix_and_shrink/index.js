import angular from 'angular';

module.exports = angular.module('components.fix_and_shrink', [])
    .directive('fixAndShrink', require('./fix_and_shrink_directive'))
    .name;
