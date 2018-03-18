import angular from 'angular';

module.exports = angular.module('components.lightgallery', [])
    .directive('lightgallery', require('./lightgallery_directive'))
    .name;
