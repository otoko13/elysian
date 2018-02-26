/* @ngInject */
function MainController($scope, $rootScope, $state) {
    $scope.isMenuOpen = false;

    $scope.openMenu = function () {
        $scope.isMenuOpen = true;
    };

    $scope.isCurrentState = function (stateName) {
        return $state.includes(stateName);
    };

    $rootScope.$on('$stateChangeSuccess', (event, toState) => {
        $scope.currentState = toState;
    });
}

module.exports = MainController;
