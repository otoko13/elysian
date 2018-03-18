// import $ from 'jquery';
import portfolio from './portfolio';

/* @ngInject */
function PortfolioController($scope) {
    $scope.portfolio = portfolio;
}

module.exports = PortfolioController;
