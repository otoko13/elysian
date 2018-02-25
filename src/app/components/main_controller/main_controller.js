import menuTemplate from '../side_menu/side_menu_dialog.html';

/* @ngInject */
function MainController($scope, $rootScope, dialogs, $state) {
    $scope.menuIsOpen = false;

    $scope.openMenu = function () {
        $scope.menuIsOpen = true;
        dialogs.create(
            menuTemplate,
            'SideMenuController',
            { current: $scope.currentState },
            { backdrop: true, windowClass: 'side-menu-dialog left fade' },
        ).then(() => {
            $scope.menuIsOpen = false;
        });
    };

    $scope.isCurrentState = function (stateName) {
        return $state.includes(stateName);
    };

    $rootScope.$on('$stateChangeSuccess', (event, toState) => {
        $scope.currentState = toState;
    });
}

module.exports = MainController;
