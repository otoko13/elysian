/* @ngInject */
function MainController($scope, $rootScope, $state) {
    $scope.isMenuOpen = false;

    $scope.openSideMenu = function () {
        $scope.isMenuOpen = true;
    };

    $scope.closeSideMenu = function () {
        $scope.isMenuOpen = false;
    };

    $scope.isCurrentState = function (stateName) {
        return $state.includes(stateName);
    };

    $rootScope.$on('$stateChangeSuccess', (event, toState) => {
        $scope.currentState = toState;
    });
}

module.exports = MainController;
