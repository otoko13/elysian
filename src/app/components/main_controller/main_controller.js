/* @ngInject */
function MainController($scope, $rootScope, $state) {
    $scope.menuOptions = {
        isOpen: false,
    };

    $scope.openSideMenu = function () {
        $scope.menuOptions.isOpen = true;
    };

    $scope.closeSideMenu = function () {
        $scope.menuOptions.isOpen = false;
    };

    $scope.isCurrentState = function (stateName) {
        return $state.includes(stateName);
    };

    $rootScope.$on('$stateChangeSuccess', (event, toState) => {
        $scope.currentState = toState;
    });
}

module.exports = MainController;
