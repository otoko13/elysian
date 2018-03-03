import angular from 'angular';

module.exports = angular.module('components.on_scroll_down', [])
    .directive('onScrollDown', require('./on_scroll_down_directive'))
    .name;
