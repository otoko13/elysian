import angular from 'angular';
import './contact_us.less';

module.exports = angular.module('states.contact_us', [])
    .controller('ContactUsController', require('./contact_us_controller'))
    .name;
