import angular from 'angular';
import './portfolio.less';

module.exports = angular.module('states.portfolio', [])
    .controller('PortfolioController', require('./portfolio_controller'))
    .name;
