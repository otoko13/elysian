/* @ngInject */
function MainController($scope, $rootScope, $state) {
    $scope.vm = {
        isMenuOpen: false,
    };

    $scope.openMenu = function () {
        $scope.vm.isMenuOpen = true;
    };

    $scope.closeMenu = function () {
        $scope.vm.isMenuOpen = false;
    };

    $scope.isCurrentState = function (stateName) {
        return $state.includes(stateName);
    };

    $rootScope.$on('$stateChangeSuccess', (event, toState) => {
        $scope.currentState = toState;
    });
}

module.exports = MainController;
