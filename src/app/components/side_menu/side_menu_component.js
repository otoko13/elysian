import templateUrl from './side_menu.html';
import './side_menu.less';

const SideMenuComponent = {
    templateUrl,
    bindings: {
        options: '<',
        closeMenu: '<',
    },
    controllerAs: 'vm',
    controller: 'SideMenuComponentController',
};

module.exports = SideMenuComponent;
