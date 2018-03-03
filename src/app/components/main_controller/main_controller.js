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
        return $state.current.name === stateName;
    };

    $rootScope.$on('$stateChangeSuccess', (event, toState) => {
        $scope.currentState = toState;
        $scope.isMenuOpen = false;
    });
}

module.exports = MainController;
