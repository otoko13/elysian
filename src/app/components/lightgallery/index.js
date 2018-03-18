import angular from 'angular';
import './lightgallery.less';

module.exports = angular.module('components.lightgallery', [])
    .directive('lightgallery', require('./lightgallery_directive'))
    .name;
