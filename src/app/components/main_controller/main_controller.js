import menuTemplate from '../side_menu/side_menu.html';

/* @ngInject */
function MainController($scope, $rootScope, $state) {
    $scope.menuIsOpen = false;

    $scope.openMenu = function () {
        $scope.menuIsOpen = true;
    };

    $scope.isCurrentState = function (stateName) {
        return $state.includes(stateName);
    };

    $rootScope.$on('$stateChangeSuccess', (event, toState) => {
        $scope.currentState = toState;
    });
}

module.exports = MainController;
